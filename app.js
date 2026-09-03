const STORAGE_KEY = "myEnglishDictionaryData_v2";

const BUNDLED_DATA_VERSION = "user-json-2026-09-02-v1";
const defaultData = {
  "words": [
    {
      "id": "83a6a007-3f31-4333-89e4-2c379eda3344",
      "en": "lauht at",
      "ru": "смеяться над …",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.545Z"
    },
    {
      "id": "57577c08-3362-4806-a4bb-c949e52e3583",
      "en": "joke",
      "ru": "шутка",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.545Z"
    },
    {
      "id": "86fd4f32-947c-4cf4-815b-cad681d424ad",
      "en": "in hospital",
      "ru": "в больнице",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.545Z"
    },
    {
      "id": "0557ed73-dbe6-406e-813d-8c91a1373376",
      "en": "compare",
      "ru": "сравнивать",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.546Z"
    },
    {
      "id": "2df39d4c-d91e-401b-bdb0-adad95996c29",
      "en": "necessary",
      "ru": "необходимый",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.546Z"
    },
    {
      "id": "7d94e9d8-739b-418a-a17b-ddbc833973d7",
      "en": "prepare for",
      "ru": "готовиться к",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.546Z"
    },
    {
      "id": "c2c0ec49-c23d-495d-8411-f7bfb0f812dd",
      "en": "fat",
      "ru": "толстый",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "3f55177e-d5b7-4d84-b37b-f4d2a388f2a1",
      "en": "surprising",
      "ru": "удивительно",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "12bee7ea-9524-4f29-a2c1-60b0d0fc2802",
      "en": "convenient for me",
      "ru": "удобно для меня",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "2233aaf5-bbfd-48b4-92be-318e24e01f21",
      "en": "chair",
      "ru": "стул",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "6f7fa7e3-5c62-4df8-9cca-36f707b6e70a",
      "en": "armchair",
      "ru": "кресло",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "bef4247c-5717-4e97-a808-678cdd632d52",
      "en": "desk",
      "ru": "письменный стол",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "bce47846-a92e-4e95-bcd6-6c17c6eb8f20",
      "en": "clear",
      "ru": "ясный",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "16d6e797-4b7b-4c9c-a9b0-f48ecb51059a",
      "en": "go shopping",
      "ru": "ходить за покупками",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "d76ca6fa-5aa8-4541-ad29-35ee0a6b001a",
      "en": "do the shopping",
      "ru": "делать покупки",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "e837efc2-19e7-44d2-a0cd-e2cb9be7edcf",
      "en": "communicate",
      "ru": "общаться",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "c29dab8e-e36c-4ff8-b930-b06147b5a18a",
      "en": "cake",
      "ru": "пирог",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "10a9802b-f02d-458d-a75a-4dcb6fb9108e",
      "en": "furniture",
      "ru": "мебель",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "4f80d937-ebe3-412c-8101-f5d38e458568",
      "en": "advertising",
      "ru": "реклама",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "096f84fc-fb82-42bf-9918-11f09ae9ea53",
      "en": "advertisement",
      "ru": "рекламное объявление",
      "lesson": 40,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.499Z"
    }
  ],
  "quizHistory": [],
  "settings": {
    "version": 2
  }
};

let state = loadData();
let deferredInstallPrompt = null;
let quizState = null;
let offlineDictionary = new Map();
let dictionaryReady = false;
let pendingLessonReview = null;

const $ = (id) => document.getElementById(id);
const $$ = (selector) => [...document.querySelectorAll(selector)];
function normalizeEnglishCase(text = "") {
  return String(text).trim().toLocaleLowerCase("en-US");
}
function normalizeWordRecord(word) {
  return { ...word, en: normalizeEnglishCase(word?.en) };
}


function loadData() {
  const normalizeWordKey = (word) => [
    String(word?.en || "").trim().toLocaleLowerCase("en-US"),
    String(word?.ru || "").trim().toLocaleLowerCase("ru-RU"),
    Number(word?.lesson || 0)
  ].join("|");

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let loaded;

    if (!raw) {
      loaded = structuredClone(defaultData);
      loaded.words = (loaded.words || []).map(normalizeWordRecord);
    } else {
      const parsed = JSON.parse(raw);
      loaded = {
        words: Array.isArray(parsed.words) ? parsed.words.map(normalizeWordRecord) : [],
        quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
        settings: parsed.settings || { version: 2 }
      };
    }

    loaded.settings = loaded.settings || { version: 2 };

    if (loaded.settings.bundledDataVersion !== BUNDLED_DATA_VERSION) {
      const existingIds = new Set(loaded.words.map((word) => String(word.id || "")));
      const existingKeys = new Set(loaded.words.map(normalizeWordKey));

      for (const bundledWord of defaultData.words) {
        const byId = bundledWord.id && existingIds.has(String(bundledWord.id));
        const byContent = existingKeys.has(normalizeWordKey(bundledWord));
        if (byId || byContent) continue;
        loaded.words.push(normalizeWordRecord(structuredClone(bundledWord)));
        if (bundledWord.id) existingIds.add(String(bundledWord.id));
        existingKeys.add(normalizeWordKey(bundledWord));
      }

      if (!loaded.quizHistory.length && Array.isArray(defaultData.quizHistory)) {
        loaded.quizHistory = structuredClone(defaultData.quizHistory);
      }

      loaded.settings = {
        ...defaultData.settings,
        ...loaded.settings,
        bundledDataVersion: BUNDLED_DATA_VERSION
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    }

    return loaded;
  } catch {
    const fallback = structuredClone(defaultData);
    fallback.words = (fallback.words || []).map(normalizeWordRecord);
    fallback.settings = {
      ...(fallback.settings || { version: 2 }),
      bundledDataVersion: BUNDLED_DATA_VERSION
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
    } catch {}
    return fallback;
  }
}

function saveData() {
  state.words = (state.words || []).map(normalizeWordRecord);
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
        <button class="icon-button" data-edit-word="${w.id}" aria-label="Редактировать слово">✏️</button>
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
    const allItems = state.words.filter((w) => Number(w.lesson) === lesson);
    const items = allItems.filter((w) =>
      !query || cleanSearch(w.en).includes(query) || cleanSearch(w.ru).includes(query)
    );

    if (query && !items.length) return "";

    return `
      <article class="lesson-card" data-lesson-card="${lesson}">
        <div class="lesson-head lesson-head-editable">
          <button class="lesson-toggle-main" data-toggle-lesson type="button">
            <div>
              <strong>Урок ${lesson}</strong>
              <span>${allItems.length} ${plural(allItems.length, "слово", "слова", "слов")}</span>
            </div>
            <span class="lesson-chevron">⌄</span>
          </button>
          <button class="secondary small lesson-edit-button" data-edit-lesson="${lesson}" type="button">✏️ Редактировать</button>
        </div>
        <div class="lesson-body">
          ${items.map((w) => `
            <div class="lesson-row">
              <div class="lesson-row-text">
                <strong>${escapeHtml(w.en)}</strong>
                <div>${escapeHtml(w.ru)}</div>
                <small>✓ ${w.correct || 0} · ✕ ${w.wrong || 0}</small>
              </div>
              <div class="lesson-row-actions">
                <button class="icon-button" data-speak="${escapeHtml(w.en)}" type="button" aria-label="Озвучить">🔊</button>
                <button class="icon-button" data-edit-word="${w.id}" type="button" aria-label="Редактировать">✏️</button>
                <button class="icon-button" data-delete="${w.id}" type="button" aria-label="Удалить">🗑️</button>
              </div>
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
      en: normalizeEnglishCase(pair.en),
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
    const en = normalizeEnglishCase(match[1]);
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


let editingWordId = null;
let editingLessonNumber = null;

function openModal(id) {
  const modal = $(id);
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = $(id);
  if (!modal) return;
  modal.classList.add("hidden");
  if (!document.querySelector(".modal:not(.hidden)")) {
    document.body.classList.remove("modal-open");
  }
}

function openWordEditor(id) {
  const word = state.words.find((item) => String(item.id) === String(id));
  if (!word) return;

  editingWordId = word.id;
  $("editWordEn").value = word.en || "";
  $("editWordRu").value = word.ru || "";
  $("editWordLesson").value = Number(word.lesson) || 1;
  $("editWordCorrect").value = Number(word.correct) || 0;
  $("editWordWrong").value = Number(word.wrong) || 0;
  $("editWordCreatedAt").value = word.createdAt || "";
  openModal("wordEditModal");
  setTimeout(() => $("editWordEn").focus(), 30);
}

function saveWordEditor(event) {
  event.preventDefault();
  const word = state.words.find((item) => String(item.id) === String(editingWordId));
  if (!word) {
    closeModal("wordEditModal");
    return;
  }

  const en = normalizeEnglishCase($("editWordEn").value);
  const ru = $("editWordRu").value.trim();
  const lesson = Number($("editWordLesson").value);
  const correct = Math.max(0, Number($("editWordCorrect").value) || 0);
  const wrong = Math.max(0, Number($("editWordWrong").value) || 0);
  const createdAt = $("editWordCreatedAt").value.trim();

  if (!en || !ru) {
    showToast("Английское слово и перевод не могут быть пустыми");
    return;
  }
  if (!Number.isInteger(lesson) || lesson < 1) {
    showToast("Укажи корректный номер урока");
    return;
  }

  word.en = normalizeEnglishCase(en);
  word.ru = ru;
  word.lesson = lesson;
  word.correct = Math.floor(correct);
  word.wrong = Math.floor(wrong);
  word.createdAt = createdAt || word.createdAt || new Date().toISOString();

  saveData();
  closeModal("wordEditModal");
  showToast("Слово обновлено");
}

function lessonEditorRow(word = null) {
  const id = word?.id || "";
  const en = word?.en || "";
  const ru = word?.ru || "";
  const correct = Number(word?.correct) || 0;
  const wrong = Number(word?.wrong) || 0;
  const createdAt = word?.createdAt || new Date().toISOString();

  return `
    <div class="lesson-edit-row" data-id="${escapeHtml(id)}" data-created-at="${escapeHtml(createdAt)}">
      <div class="lesson-edit-fields">
        <label>
          <span>English</span>
          <input class="lesson-edit-en" type="text" value="${escapeHtml(en)}" placeholder="English" />
        </label>
        <label>
          <span>Перевод</span>
          <input class="lesson-edit-ru" type="text" value="${escapeHtml(ru)}" placeholder="Русский перевод" />
        </label>
        <label class="compact-field">
          <span>✓</span>
          <input class="lesson-edit-correct" type="number" min="0" step="1" value="${correct}" />
        </label>
        <label class="compact-field">
          <span>✕</span>
          <input class="lesson-edit-wrong" type="number" min="0" step="1" value="${wrong}" />
        </label>
      </div>
      <button class="icon-button lesson-remove-row" type="button" data-remove-lesson-row aria-label="Удалить строку">🗑️</button>
    </div>
  `;
}

function openLessonEditor(lesson) {
  lesson = Number(lesson);
  const words = state.words.filter((word) => Number(word.lesson) === lesson);
  if (!words.length) return;

  editingLessonNumber = lesson;
  $("lessonEditorTitle").textContent = `Редактировать урок ${lesson}`;
  $("editLessonNumber").value = lesson;
  $("lessonEditorRows").innerHTML = words.map((word) => lessonEditorRow(word)).join("");
  openModal("lessonEditModal");
}

function addLessonEditorRow() {
  $("lessonEditorRows").insertAdjacentHTML("beforeend", lessonEditorRow());
  const rows = $$("#lessonEditorRows .lesson-edit-row");
  rows.at(-1)?.querySelector(".lesson-edit-en")?.focus();
}

function saveLessonEditor(event) {
  event.preventDefault();
  const newLesson = Number($("editLessonNumber").value);
  if (!Number.isInteger(newLesson) || newLesson < 1) {
    showToast("Укажи корректный номер урока");
    return;
  }

  const originalWords = state.words.filter((word) => Number(word.lesson) === Number(editingLessonNumber));
  const originalById = new Map(originalWords.map((word) => [String(word.id), word]));
  const originalIds = new Set(originalWords.map((word) => String(word.id)));
  const rebuilt = [];

  for (const row of $$("#lessonEditorRows .lesson-edit-row")) {
    const en = normalizeEnglishCase(row.querySelector(".lesson-edit-en").value);
    const ru = row.querySelector(".lesson-edit-ru").value.trim();
    if (!en && !ru) continue;
    if (!en || !ru) {
      showToast("В каждой строке заполни English и перевод");
      return;
    }

    const id = row.dataset.id;
    const old = id ? originalById.get(String(id)) : null;
    rebuilt.push({
      ...(old || {}),
      id: old?.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`),
      en,
      ru,
      lesson: newLesson,
      correct: Math.max(0, Math.floor(Number(row.querySelector(".lesson-edit-correct").value) || 0)),
      wrong: Math.max(0, Math.floor(Number(row.querySelector(".lesson-edit-wrong").value) || 0)),
      createdAt: old?.createdAt || row.dataset.createdAt || new Date().toISOString()
    });
  }

  state.words = state.words.filter((word) => !originalIds.has(String(word.id)));
  state.words.push(...rebuilt);
  saveData();
  closeModal("lessonEditModal");
  showToast(`Урок ${newLesson} сохранён`);
}

function deleteEditedLesson() {
  const lesson = Number(editingLessonNumber);
  const count = state.words.filter((word) => Number(word.lesson) === lesson).length;
  if (!count) {
    closeModal("lessonEditModal");
    return;
  }
  if (!confirm(`Удалить урок ${lesson} целиком (${count} ${plural(count, "слово", "слова", "слов")})?`)) return;

  state.words = state.words.filter((word) => Number(word.lesson) !== lesson);
  saveData();
  closeModal("lessonEditModal");
  showToast(`Урок ${lesson} удалён`);
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
      words: incoming.words.map(normalizeWordRecord),
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

  const editWordButton = event.target.closest("[data-edit-word]");
  if (editWordButton) openWordEditor(editWordButton.dataset.editWord);

  const editLessonButton = event.target.closest("[data-edit-lesson]");
  if (editLessonButton) openLessonEditor(editLessonButton.dataset.editLesson);

  const editIrregularButton = event.target.closest("[data-edit-irregular]");
  if (editIrregularButton) openIrregularEditor(editIrregularButton.dataset.editIrregular);

  const removeLessonRow = event.target.closest("[data-remove-lesson-row]");
  if (removeLessonRow) removeLessonRow.closest(".lesson-edit-row")?.remove();

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

$("wordEditForm").addEventListener("submit", saveWordEditor);
$("closeWordEditor").addEventListener("click", () => closeModal("wordEditModal"));
$("cancelWordEditor").addEventListener("click", () => closeModal("wordEditModal"));

$("lessonEditForm").addEventListener("submit", saveLessonEditor);
$("closeLessonEditor").addEventListener("click", () => closeModal("lessonEditModal"));
$("cancelLessonEditor").addEventListener("click", () => closeModal("lessonEditModal"));
$("addLessonEditorRow").addEventListener("click", addLessonEditorRow);
$("deleteLessonButton").addEventListener("click", deleteEditedLesson);

$$(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal.id);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  $$(".modal:not(.hidden)").forEach((modal) => closeModal(modal.id));
});

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

const IRREGULAR_STORAGE_KEY = "myEnglishIrregularVerbs_v1";
let irregularVerbs = loadIrregularVerbs();
let editingIrregularId = null;

function normalizeIrregularVerb(item = {}) {
  return {
    id: String(item.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`)),
    v1: normalizeEnglishCase(item.v1),
    v2: normalizeEnglishCase(item.v2),
    v3: normalizeEnglishCase(item.v3),
    ru: String(item.ru || "").trim()
  };
}
function loadIrregularVerbs() {
  try {
    const raw = localStorage.getItem(IRREGULAR_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.map(normalizeIrregularVerb) : [];
  } catch { return []; }
}
function saveIrregularVerbs() {
  irregularVerbs = irregularVerbs.map(normalizeIrregularVerb);
  localStorage.setItem(IRREGULAR_STORAGE_KEY, JSON.stringify(irregularVerbs));
  renderIrregularVerbs();
}
function renderIrregularVerbs() {
  const list = $("irregularList");
  if (!list) return;
  const query = String($("searchIrregular")?.value || "").trim().toLocaleLowerCase("ru-RU");
  const filtered = [...irregularVerbs]
    .filter(v => !query || [v.v1,v.v2,v.v3,v.ru].some(x => String(x).toLocaleLowerCase("ru-RU").includes(query)))
    .sort((a,b)=>a.v1.localeCompare(b.v1,"en"));
  $("irregularCount").textContent = irregularVerbs.length;
  $("emptyIrregular").classList.toggle("hidden", filtered.length > 0);
  list.innerHTML = filtered.map(v => `
    <article class="irregular-card">
      <div class="irregular-forms">
        <div><span>V1</span><strong>${escapeHtml(v.v1)}</strong></div>
        <div><span>V2</span><strong>${escapeHtml(v.v2)}</strong></div>
        <div><span>V3</span><strong>${escapeHtml(v.v3)}</strong></div>
      </div>
      <div class="irregular-translation">${escapeHtml(v.ru)}</div>
      <div class="irregular-actions">
        <button class="icon-button" type="button" data-speak="${escapeHtml(v.v1)}">🔊</button>
        <button class="secondary small" type="button" data-edit-irregular="${escapeHtml(v.id)}">✏️ Редактировать</button>
      </div>
    </article>`).join("");
}
function openIrregularEditor(id = null) {
  editingIrregularId = id;
  const verb = id ? irregularVerbs.find(v => String(v.id) === String(id)) : null;
  $("irregularEditorTitle").textContent = verb ? "Редактировать глагол" : "Добавить глагол";
  $("irregularV1").value = verb?.v1 || "";
  $("irregularV2").value = verb?.v2 || "";
  $("irregularV3").value = verb?.v3 || "";
  $("irregularRu").value = verb?.ru || "";
  $("deleteIrregularButton").classList.toggle("hidden", !verb);
  openModal("irregularEditModal");
}
function closeIrregularEditor() { closeModal("irregularEditModal"); editingIrregularId = null; }
function saveIrregularEditor(event) {
  event.preventDefault();
  const next = normalizeIrregularVerb({
    id: editingIrregularId || undefined,
    v1: $("irregularV1").value, v2: $("irregularV2").value,
    v3: $("irregularV3").value, ru: $("irregularRu").value
  });
  if (!next.v1 || !next.v2 || !next.v3 || !next.ru) { showToast("Заполни V1, V2, V3 и перевод"); return; }
  const duplicate = irregularVerbs.find(v => String(v.id)!==String(editingIrregularId||"") && v.v1===next.v1 && v.v2===next.v2 && v.v3===next.v3);
  if (duplicate) { showToast("Такой глагол уже есть"); return; }
  const idx = irregularVerbs.findIndex(v => String(v.id)===String(editingIrregularId));
  if (idx>=0) irregularVerbs[idx]=next; else irregularVerbs.push(next);
  saveIrregularVerbs(); closeIrregularEditor(); showToast(idx>=0 ? "Глагол обновлён" : "Глагол добавлен");
}
function deleteIrregularVerb() {
  if (!editingIrregularId) return;
  const verb=irregularVerbs.find(v=>String(v.id)===String(editingIrregularId));
  if (!verb || !confirm(`Удалить “${verb.v1} — ${verb.v2} — ${verb.v3}”?`)) return;
  irregularVerbs=irregularVerbs.filter(v=>String(v.id)!==String(editingIrregularId));
  saveIrregularVerbs(); closeIrregularEditor(); showToast("Глагол удалён");
}
function exportIrregularVerbs() {
  const payload={app:"My English Dictionary",type:"irregular-verbs",exportedAt:new Date().toISOString(),irregularVerbs};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob), a=document.createElement("a");
  a.href=url; a.download=`irregular_verbs_${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
}
async function importIrregularVerbs(file) {
  try {
    const parsed=JSON.parse(await file.text());
    const incoming=Array.isArray(parsed)?parsed:(parsed.irregularVerbs||parsed.data?.irregularVerbs);
    if (!Array.isArray(incoming)) throw new Error();
    const merged=new Map(irregularVerbs.map(v=>[`${v.v1}|${v.v2}|${v.v3}`,v]));
    incoming.map(normalizeIrregularVerb).filter(v=>v.v1&&v.v2&&v.v3&&v.ru).forEach(v=>merged.set(`${v.v1}|${v.v2}|${v.v3}`,v));
    irregularVerbs=[...merged.values()]; saveIrregularVerbs(); showToast("Неправильные глаголы импортированы");
  } catch { alert("Не удалось импортировать файл неправильных глаголов."); }
  finally { $("importIrregularInput").value=""; }
}

$("addIrregularButton")?.addEventListener("click", () => openIrregularEditor());
$("emptyAddIrregularButton")?.addEventListener("click", () => openIrregularEditor());
$("closeIrregularEditor")?.addEventListener("click", closeIrregularEditor);
$("cancelIrregularEditor")?.addEventListener("click", closeIrregularEditor);
$("irregularEditForm")?.addEventListener("submit", saveIrregularEditor);
$("deleteIrregularButton")?.addEventListener("click", deleteIrregularVerb);
$("searchIrregular")?.addEventListener("input", renderIrregularVerbs);
$("exportIrregularButton")?.addEventListener("click", exportIrregularVerbs);
$("importIrregularInput")?.addEventListener("change", e => { const file=e.target.files?.[0]; if(file) importIrregularVerbs(file); });
["irregularV1","irregularV2","irregularV3"].forEach(id => {
  $(id)?.addEventListener("input", e => {
    const p=e.target.selectionStart; e.target.value=normalizeEnglishCase(e.target.value);
    try { e.target.setSelectionRange(p,p); } catch {}
  });
});
renderIrregularVerbs();
