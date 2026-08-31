const STORAGE_KEY = "myEnglishDictionaryData_v2";

const defaultData = {
  words: [],
  quizHistory: [],
  settings: { version: 2 }
};

let state = loadData();
let deferredInstallPrompt = null;
let quizState = null;
let offlineDictionary = new Map();
let dictionaryReady = false;
let pendingLessonReview = null;

const $ = (id) => document.getElementById(id);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultData);
    const parsed = JSON.parse(raw);
    return {
      words: Array.isArray(parsed.words) ? parsed.words : [],
      quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
      settings: parsed.settings || { version: 2 }
    };
  } catch {
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  $("storageStatus").textContent = "Данные сохранены";
  renderAll();
}

function cleanSearch(text = "") {
  return text
    .toLocaleLowerCase("ru-RU")
    .normalize("NFKD")
    .replace(/[^\p{L}]/gu, "");
}

function cleanAnswer(text = "") {
  return text
    .toLocaleLowerCase("en-US")
    .trim()
    .replace(/[^\p{L}\s'-]/gu, "")
    .replace(/\s+/g, " ");
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2800);
}

function goToPage(page) {
  $$(".page").forEach((el) => el.classList.toggle("active", el.id === `page-${page}`));
  $$(".nav-item").forEach((el) => el.classList.toggle("active", el.dataset.page === page));
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSidebar() {
  $("sidebar").classList.remove("open");
  $("overlay").classList.add("hidden");
}

function openSidebar() {
  $("sidebar").classList.add("open");
  $("overlay").classList.remove("hidden");
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Озвучка не поддерживается этим браузером");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  speechSynthesis.speak(utterance);
}

function isLearned(word) {
  const total = (word.correct || 0) + (word.wrong || 0);
  const accuracy = total ? (word.correct || 0) / total : 0;
  return (word.correct || 0) >= 3 && accuracy >= 0.7;
}

function uniqueLessons() {
  return [...new Set(state.words.map((w) => Number(w.lesson)))].sort((a, b) => a - b);
}

function renderAll() {
  renderWords();
  renderLessons();
  renderQuizLessons();
  renderStats();

  const hasWords = state.words.length > 0;
  $("emptyAll").classList.toggle("hidden", hasWords);
  $("wordList").classList.toggle("hidden", !hasWords);
  $("emptyLessons").classList.toggle("hidden", hasWords);
  $("lessonList").classList.toggle("hidden", !hasWords);
  $("emptyQuiz").classList.toggle("hidden", state.words.length >= 3);
  $(".quiz-controls")?.classList?.toggle("hidden", state.words.length < 3);
}

function renderWords() {
  const list = $("wordList");
  const query = cleanSearch($("searchAll").value);
  const sort = $("sortAll").value;

  let words = [...state.words].filter((w) => {
    if (!query) return true;
    return cleanSearch(w.en).includes(query) || cleanSearch(w.ru).includes(query);
  });

  words.sort((a, b) => {
    if (sort === "english") return a.en.localeCompare(b.en, "en");
    if (sort === "russian") return a.ru.localeCompare(b.ru, "ru");
    if (sort === "lesson") return Number(a.lesson) - Number(b.lesson);
    return (b.createdAt || "").localeCompare(a.createdAt || "");
  });

  list.innerHTML = words.map((w) => `
    <article class="word-card">
      <div class="word-main">
        <button class="icon-button" data-speak="${escapeHtml(w.en)}" aria-label="Озвучить ${escapeHtml(w.en)}">🔊</button>
        <div class="word-text">
          <div class="word-en">${escapeHtml(w.en)}</div>
          <div class="word-ru">${escapeHtml(w.ru)}</div>
          <div class="word-meta">
            <span>Урок ${w.lesson}</span>
            <span>✓ ${w.correct || 0}</span>
            <span>✕ ${w.wrong || 0}</span>
            ${isLearned(w) ? '<span class="learned-badge">изучено</span>' : ""}
          </div>
        </div>
      </div>
      <div class="word-actions">
        <button class="icon-button" data-delete="${w.id}" aria-label="Удалить слово">🗑️</button>
      </div>
    </article>
  `).join("");

  $("totalWordsTop").textContent = state.words.length;
  $("learnedWordsTop").textContent = state.words.filter(isLearned).length;
  $("lessonCountTop").textContent = uniqueLessons().length;
}

function renderLessons() {
  const container = $("lessonList");
  const query = cleanSearch($("searchLessons").value);
  const lessons = uniqueLessons();

  container.innerHTML = lessons.map((lesson) => {
    const items = state.words.filter((w) => Number(w.lesson) === lesson)
      .filter((w) => !query || cleanSearch(w.en).includes(query) || cleanSearch(w.ru).includes(query));

    if (query && !items.length) return "";

    return `
      <article class="lesson-card">
        <button class="lesson-head" data-toggle-lesson>
          <div>
            <strong>Урок ${lesson}</strong>
            <span>${items.length} ${plural(items.length, "слово", "слова", "слов")}</span>
          </div>
          <span>⌄</span>
        </button>
        <div class="lesson-body">
          ${items.map((w) => `
            <div class="lesson-row">
              <div>
                <strong>${escapeHtml(w.en)}</strong>
                <div>${escapeHtml(w.ru)}</div>
              </div>
              <button class="icon-button" data-speak="${escapeHtml(w.en)}">🔊</button>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function renderQuizLessons() {
  const select = $("quizLesson");
  const current = select.value;
  select.innerHTML = `<option value="all">Все уроки</option>` +
    uniqueLessons().map((lesson) => `<option value="${lesson}">Урок ${lesson}</option>`).join("");
  if ([...select.options].some((o) => o.value === current)) select.value = current;
}

function renderStats() {
  const total = state.words.length;
  const learned = state.words.filter(isLearned).length;
  const correct = state.words.reduce((sum, w) => sum + (w.correct || 0), 0);

  $("statTotal").textContent = total;
  $("statLearned").textContent = learned;
  $("statCorrect").textContent = correct;
  $("statQuizzes").textContent = state.quizHistory.length;

  const percent = total ? Math.round((learned / total) * 100) : 0;
  $("progressPercent").textContent = `${percent}%`;
  $("bigProgressBar").style.width = `${percent}%`;

  $("lessonStats").innerHTML = uniqueLessons().map((lesson) => {
    const words = state.words.filter((w) => Number(w.lesson) === lesson);
    const learnedCount = words.filter(isLearned).length;
    const pct = words.length ? Math.round((learnedCount / words.length) * 100) : 0;
    return `
      <div class="lesson-stat">
        <div class="lesson-stat-head">
          <span>Урок ${lesson}</span>
          <span>${learnedCount}/${words.length} · ${pct}%</span>
        </div>
        <div class="big-progress"><div style="width:${pct}%"></div></div>
      </div>
    `;
  }).join("") || '<p class="muted">Статистика появится после добавления слов.</p>';
}


async function loadOfflineDictionary() {
  const status = $("dictionaryStatus");
  try {
    status.className = "dictionary-status loading";
    status.querySelector("span:last-child").textContent = "Загружаю словарь…";

    const entries = Array.isArray(window.EMBEDDED_DICTIONARY)
      ? window.EMBEDDED_DICTIONARY
      : await fetch("./dictionary-15000.json").then((response) => {
          if (!response.ok) throw new Error("Dictionary load failed");
          return response.json();
        });

    offlineDictionary = new Map(entries);
    dictionaryReady = offlineDictionary.size >= 15000;
    status.className = "dictionary-status";
    status.querySelector("span:last-child").textContent = `Словарь готов: ${offlineDictionary.size.toLocaleString("ru-RU")} слов`;
  } catch (error) {
    dictionaryReady = false;
    status.className = "dictionary-status error";
    status.querySelector("span:last-child").textContent = "Не удалось загрузить словарь. Слова можно сохранить без проверки.";
  }
}

function normalizeEnglishWord(text = "") {
  return text.toLocaleLowerCase("en-US").trim().replace(/[^a-z'-]/g, "");
}

function normalizeRussian(text = "") {
  return text
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[^а-я\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function russianVariants(text = "") {
  return String(text)
    .split(/[,;/|]+/)
    .map(normalizeRussian)
    .filter(Boolean);
}

function closeRussianForm(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.length >= 4 && b.length >= 4) {
    if ((a.startsWith(b) || b.startsWith(a)) && Math.abs(a.length - b.length) <= 4) return true;
  }
  return false;
}

function translationMatches(input, translations) {
  const candidates = russianVariants(input);
  const expected = translations.map(normalizeRussian).filter(Boolean);
  return candidates.some((candidate) => expected.some((value) => closeRussianForm(candidate, value)));
}

function validateLessonPairs(pairs) {
  return pairs.map((pair, index) => {
    const key = normalizeEnglishWord(pair.en);
    const isPhrase = /\s/.test(pair.en.trim());
    const translations = !isPhrase ? (offlineDictionary.get(key) || []) : [];

    if (!translations.length) {
      return {
        index,
        status: "unknown",
        pair,
        translations: [],
        note: isPhrase
          ? "Фразы не исправляются автоматически: база проверяет отдельные английские слова."
          : "Слово не найдено среди 15 000 статей. Оно будет сохранено без изменений."
      };
    }

    if (translationMatches(pair.ru, translations)) {
      return { index, status: "correct", pair, translations, note: "Перевод найден в словаре." };
    }

    return {
      index,
      status: "mismatch",
      pair,
      translations,
      note: "Введённый перевод не найден среди вариантов. Выбери подходящий вариант или оставь свой."
    };
  });
}

function renderLessonReview(lesson, pairs, results) {
  pendingLessonReview = { lesson, pairs: pairs.map((pair) => ({ ...pair })) };
  const issues = results.filter((result) => result.status !== "correct");
  const mismatches = results.filter((result) => result.status === "mismatch").length;
  const unknown = results.filter((result) => result.status === "unknown").length;
  const correct = results.length - mismatches - unknown;

  $("validationSummary").textContent = `Совпало: ${correct}. Расхождений: ${mismatches}. Не найдено в базе: ${unknown}.`;
  $("validationItems").innerHTML = issues.map((result) => {
    const { pair, index, translations, status, note } = result;
    const suggestions = translations.slice(0, 6);
    return `
      <article class="validation-item ${status}">
        <div class="validation-title">
          <strong>${escapeHtml(pair.en)}</strong>
          <span class="validation-label">${status === "mismatch" ? "нужно проверить" : "нет в базе"}</span>
        </div>
        <input class="review-translation" data-review-index="${index}" value="${escapeHtml(pair.ru)}" aria-label="Перевод слова ${escapeHtml(pair.en)}" />
        ${suggestions.length ? `
          <div class="suggestion-list">
            ${suggestions.map((suggestion) => `<button type="button" class="suggestion-chip" data-review-index="${index}" data-suggestion="${escapeHtml(suggestion)}">${escapeHtml(suggestion)}</button>`).join("")}
          </div>` : ""}
        <div class="review-note">${escapeHtml(note)}</div>
      </article>
    `;
  }).join("");

  $("validationReview").classList.remove("hidden");
  $("checkLessonButton").classList.add("hidden");
  $("validationReview").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeLessonReview() {
  pendingLessonReview = null;
  $("validationReview").classList.add("hidden");
  $("checkLessonButton").classList.remove("hidden");
}

function saveLessonPairs(lesson, pairs) {
  let added = 0;
  for (const pair of pairs) {
    const duplicate = state.words.some((word) =>
      cleanSearch(word.en) === cleanSearch(pair.en) &&
      cleanSearch(word.ru) === cleanSearch(pair.ru) &&
      Number(word.lesson) === lesson
    );
    if (duplicate) continue;

    state.words.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      en: pair.en,
      ru: pair.ru,
      lesson,
      correct: 0,
      wrong: 0,
      createdAt: new Date().toISOString()
    });
    added++;
  }

  saveData();
  $("lessonNumber").value = "";
  $("lessonWords").value = "";
  closeLessonReview();
  showFormMessage(`Добавлено: ${added}. Пропущено дублей: ${pairs.length - added}.`);
  showToast(`Урок ${lesson} сохранён`);
}

function prepareLessonReview(event) {
  event.preventDefault();
  $("formMessage").classList.add("hidden");

  const lesson = Number($("lessonNumber").value);
  const pairs = parseLessonLines($("lessonWords").value);

  if (!Number.isInteger(lesson) || lesson < 1) {
    showFormMessage("Укажи корректный номер урока.");
    return;
  }
  if (!pairs.length) {
    showFormMessage("Не удалось распознать слова. Используй формат: apple — яблоко.");
    return;
  }

  if (!$("dictionaryCheckEnabled").checked || !dictionaryReady) {
    saveLessonPairs(lesson, pairs);
    return;
  }

  const results = validateLessonPairs(pairs);
  const issues = results.filter((result) => result.status !== "correct");
  if (!issues.length) {
    saveLessonPairs(lesson, pairs);
    return;
  }

  renderLessonReview(lesson, pairs, results);
}

function saveReviewed(useOriginal = false) {
  if (!pendingLessonReview) return;
  const pairs = pendingLessonReview.pairs.map((pair) => ({ ...pair }));

  if (!useOriginal) {
    document.querySelectorAll(".review-translation").forEach((input) => {
      const index = Number(input.dataset.reviewIndex);
      if (pairs[index] && input.value.trim()) pairs[index].ru = input.value.trim();
    });
  }

  saveLessonPairs(pendingLessonReview.lesson, pairs);
}

function parseLessonLines(text) {
  const lines = text.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  const parsed = [];

  for (const line of lines) {
    const match = line.match(/^(.+?)\s*(?:—|–|-|:|=)\s*(.+)$/);
    if (!match) continue;
    const en = match[1].trim();
    const ru = match[2].trim();
    if (!en || !ru) continue;
    parsed.push({ en, ru });
  }

  return parsed;
}

function showFormMessage(message) {
  $("formMessage").textContent = message;
  $("formMessage").classList.remove("hidden");
}

function deleteWord(id) {
  const word = state.words.find((w) => w.id === id);
  if (!word) return;
  if (!confirm(`Удалить слово “${word.en} — ${word.ru}”?`)) return;
  state.words = state.words.filter((w) => w.id !== id);
  saveData();
  showToast("Слово удалено");
}

function startQuiz() {
  const lesson = $("quizLesson").value;
  const pool = state.words.filter((w) => lesson === "all" || String(w.lesson) === lesson);

  if (pool.length < 3) {
    showToast("Для квиза нужно минимум три слова");
    return;
  }

  const count = Math.min(Number($("quizCount").value), pool.length);
  const questions = shuffle([...pool]).slice(0, count);

  quizState = {
    mode: $("quizMode").value,
    pool,
    questions,
    index: 0,
    correct: 0,
    answered: false
  };

  $("quizResult").classList.add("hidden");
  $("quizArea").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const current = quizState.questions[quizState.index];
  quizState.answered = false;

  const progress = ((quizState.index) / quizState.questions.length) * 100;
  $("quizProgressBar").style.width = `${progress}%`;
  $("quizProgressText").textContent = `${quizState.index + 1} / ${quizState.questions.length}`;

  $("quizFeedback").className = "quiz-feedback hidden";
  $("nextQuestion").classList.add("hidden");
  $("quizAnswers").innerHTML = "";
  $("typingBox").classList.add("hidden");
  $("repeatAudio").classList.add("hidden");

  const mode = quizState.mode;

  if (mode === "en-ru") {
    $("quizPromptLabel").textContent = "Выбери перевод";
    $("quizQuestion").textContent = current.en;
    renderChoiceAnswers(current, "ru");
  } else if (mode === "ru-en") {
    $("quizPromptLabel").textContent = "Выбери английское слово";
    $("quizQuestion").textContent = current.ru;
    renderChoiceAnswers(current, "en");
  } else if (mode === "typing") {
    $("quizPromptLabel").textContent = "Напиши по-английски";
    $("quizQuestion").textContent = current.ru;
    $("typingBox").classList.remove("hidden");
    $("typingAnswer").value = "";
    setTimeout(() => $("typingAnswer").focus(), 50);
  } else {
    $("quizPromptLabel").textContent = "Прослушай слово и выбери перевод";
    $("quizQuestion").textContent = "🔊";
    $("repeatAudio").classList.remove("hidden");
    $("repeatAudio").onclick = () => speak(current.en);
    speak(current.en);
    renderChoiceAnswers(current, "ru");
  }
}

function renderChoiceAnswers(current, key) {
  const correctValue = current[key];
  const wrongOptions = shuffle(
    quizState.pool.filter((w) => w.id !== current.id).map((w) => w[key])
  ).filter((value, index, arr) => arr.indexOf(value) === index).slice(0, 3);

  const options = shuffle([correctValue, ...wrongOptions]);

  $("quizAnswers").innerHTML = options.map((option) => `
    <button class="answer-button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>
  `).join("");
}

function answerChoice(button) {
  if (!quizState || quizState.answered) return;
  const current = quizState.questions[quizState.index];
  const correct = quizState.mode === "ru-en" ? current.en : current.ru;
  const selected = button.dataset.answer;
  const isCorrect = cleanAnswer(selected) === cleanAnswer(correct);

  quizState.answered = true;
  $$(".answer-button").forEach((btn) => {
    const value = btn.dataset.answer;
    btn.disabled = true;
    if (cleanAnswer(value) === cleanAnswer(correct)) btn.classList.add("correct");
    else if (btn === button) btn.classList.add("wrong");
  });

  recordAnswer(current, isCorrect);
  showFeedback(isCorrect, correct);
}

function answerTyping() {
  if (!quizState || quizState.answered) return;
  const current = quizState.questions[quizState.index];
  const input = $("typingAnswer").value;
  const isCorrect = cleanAnswer(input) === cleanAnswer(current.en);
  quizState.answered = true;
  recordAnswer(current, isCorrect);
  showFeedback(isCorrect, current.en);
}

function recordAnswer(word, isCorrect) {
  const stored = state.words.find((w) => w.id === word.id);
  if (stored) {
    if (isCorrect) {
      stored.correct = (stored.correct || 0) + 1;
      quizState.correct++;
    } else {
      stored.wrong = (stored.wrong || 0) + 1;
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showFeedback(isCorrect, correctValue) {
  const box = $("quizFeedback");
  box.className = `quiz-feedback ${isCorrect ? "good" : "bad"}`;
  box.textContent = isCorrect ? "Правильно!" : `Правильный ответ: ${correctValue}`;
  $("nextQuestion").classList.remove("hidden");
}

function nextQuestion() {
  if (!quizState || !quizState.answered) return;
  quizState.index++;
  if (quizState.index >= quizState.questions.length) finishQuiz();
  else showQuestion();
}

function finishQuiz() {
  $("quizArea").classList.add("hidden");
  $("quizResult").classList.remove("hidden");

  const total = quizState.questions.length;
  const score = quizState.correct;
  const pct = Math.round((score / total) * 100);

  $("resultScore").textContent = `${score}/${total}`;
  $("resultMessage").textContent =
    pct >= 90 ? "Отличный результат!" :
    pct >= 70 ? "Хорошо! Ещё немного практики." :
    "Повтори слова и попробуй ещё раз.";

  state.quizHistory.push({
    date: new Date().toISOString(),
    score,
    total,
    mode: quizState.mode
  });

  saveData();
}

function exportData() {
  const payload = {
    app: "My English Dictionary",
    exportedAt: new Date().toISOString(),
    data: state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `english_dictionary_backup_${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Резервная копия сохранена");
}

async function importData(file) {
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const incoming = parsed.data || parsed;

    if (!incoming || !Array.isArray(incoming.words)) throw new Error("Неверный формат");

    state = {
      words: incoming.words,
      quizHistory: Array.isArray(incoming.quizHistory) ? incoming.quizHistory : [],
      settings: incoming.settings || { version: 2 }
    };

    saveData();
    showToast("Данные восстановлены");
  } catch {
    alert("Не удалось импортировать файл. Проверь, что это резервная копия приложения.");
  } finally {
    $("importData").value = "";
  }
}

function clearData() {
  if (!confirm("Удалить все слова, уроки и статистику? Это действие нельзя отменить.")) return;
  state = structuredClone(defaultData);
  saveData();
  showToast("Все данные удалены");
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function plural(n, one, few, many) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return few;
  return many;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-page]");
  if (nav) goToPage(nav.dataset.page);

  const go = event.target.closest("[data-go]");
  if (go) goToPage(go.dataset.go);

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) speak(speakButton.dataset.speak);

  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) deleteWord(deleteButton.dataset.delete);

  const lessonToggle = event.target.closest("[data-toggle-lesson]");
  if (lessonToggle) lessonToggle.closest(".lesson-card").classList.toggle("closed");

  const suggestion = event.target.closest("[data-suggestion]");
  if (suggestion) {
    const input = document.querySelector(`.review-translation[data-review-index="${suggestion.dataset.reviewIndex}"]`);
    if (input) input.value = suggestion.dataset.suggestion;
  }

  const answer = event.target.closest(".answer-button");
  if (answer) answerChoice(answer);
});

$("menuButton").addEventListener("click", openSidebar);
$("overlay").addEventListener("click", closeSidebar);
$("searchAll").addEventListener("input", renderWords);
$("sortAll").addEventListener("change", renderWords);
$("searchLessons").addEventListener("input", renderLessons);
$("lessonForm").addEventListener("submit", prepareLessonReview);
$("cancelReview").addEventListener("click", closeLessonReview);
$("saveReviewedLesson").addEventListener("click", () => saveReviewed(false));
$("saveOriginalReview").addEventListener("click", () => saveReviewed(true));
$("dictionaryCheckEnabled").addEventListener("change", (event) => {
  const status = $("dictionaryStatus");
  if (!event.target.checked) {
    status.className = "dictionary-status";
    status.querySelector("span:last-child").textContent = "Проверка отключена";
  } else if (dictionaryReady) {
    status.className = "dictionary-status";
    status.querySelector("span:last-child").textContent = `Словарь готов: ${offlineDictionary.size.toLocaleString("ru-RU")} слов`;
  } else {
    loadOfflineDictionary();
  }
});

$("fillExample").addEventListener("click", () => {
  $("lessonNumber").value = $("lessonNumber").value || 1;
  $("lessonWords").value = "house — лошадь\nbook — книга\ngood morning — доброе утро";
});

$("startQuiz").addEventListener("click", startQuiz);
$("restartQuiz").addEventListener("click", startQuiz);
$("submitTyping").addEventListener("click", answerTyping);
$("typingAnswer").addEventListener("keydown", (event) => {
  if (event.key === "Enter") answerTyping();
});
$("nextQuestion").addEventListener("click", nextQuestion);

$("exportData").addEventListener("click", exportData);
$("importData").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) importData(file);
});
$("clearData").addEventListener("click", clearData);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("installButton").classList.remove("hidden");
  $("installButtonSettings").classList.remove("hidden");
});

async function promptInstall() {
  if (!deferredInstallPrompt) {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (isIOS) {
      showToast("Safari: «Поделиться» → «На экран Домой» → «Открыть как веб-приложение» → «Добавить»");
    } else {
      showToast("Откройте меню браузера и выберите «Установить приложение»");
    }
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $("installButton").classList.add("hidden");
  $("installButtonSettings").classList.add("hidden");
}

$("installButton").addEventListener("click", promptInstall);
$("installButtonSettings").addEventListener("click", promptInstall);


const isIOSDevice = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isStandaloneMode = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
if (isIOSDevice && !isStandaloneMode) {
  $("installButton").classList.remove("hidden");
  $("installButtonSettings").classList.remove("hidden");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

loadOfflineDictionary();
renderAll();
