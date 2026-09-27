const STORAGE_KEY = "myEnglishDictionaryData_v2";

const BUNDLED_DATA_VERSION = "user-json-2026-09-27-v2-collapsed-lessons";
const defaultData = {
  "words": [
    {
      "id": "c2c0ec49-c23d-495d-8411-f7bfb0f812dd",
      "en": "fat",
      "ru": "толстый",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "3f55177e-d5b7-4d84-b37b-f4d2a388f2a1",
      "en": "surprising",
      "ru": "удивительно",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "12bee7ea-9524-4f29-a2c1-60b0d0fc2802",
      "en": "convenient for me",
      "ru": "удобно для меня",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "2233aaf5-bbfd-48b4-92be-318e24e01f21",
      "en": "chair",
      "ru": "стул",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "6f7fa7e3-5c62-4df8-9cca-36f707b6e70a",
      "en": "armchair",
      "ru": "кресло",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "bef4247c-5717-4e97-a808-678cdd632d52",
      "en": "desk",
      "ru": "письменный стол",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "bce47846-a92e-4e95-bcd6-6c17c6eb8f20",
      "en": "clear",
      "ru": "ясный",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "16d6e797-4b7b-4c9c-a9b0-f48ecb51059a",
      "en": "go shopping",
      "ru": "ходить за покупками",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "d76ca6fa-5aa8-4541-ad29-35ee0a6b001a",
      "en": "do the shopping",
      "ru": "делать покупки",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "e837efc2-19e7-44d2-a0cd-e2cb9be7edcf",
      "en": "communicate",
      "ru": "общаться",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "c29dab8e-e36c-4ff8-b930-b06147b5a18a",
      "en": "cake",
      "ru": "пирог",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "10a9802b-f02d-458d-a75a-4dcb6fb9108e",
      "en": "furniture",
      "ru": "мебель",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "4f80d937-ebe3-412c-8101-f5d38e458568",
      "en": "advertising",
      "ru": "реклама",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.498Z"
    },
    {
      "id": "096f84fc-fb82-42bf-9918-11f09ae9ea53",
      "en": "advertisement",
      "ru": "рекламное объявление",
      "lesson": 40,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:56:58.499Z"
    },
    {
      "id": "83a6a007-3f31-4333-89e4-2c379eda3344",
      "en": "lauht at",
      "ru": "смеяться над …",
      "lesson": 39,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.545Z"
    },
    {
      "id": "57577c08-3362-4806-a4bb-c949e52e3583",
      "en": "joke",
      "ru": "шутка",
      "lesson": 39,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.545Z"
    },
    {
      "id": "86fd4f32-947c-4cf4-815b-cad681d424ad",
      "en": "in hospital",
      "ru": "в больнице",
      "lesson": 39,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.545Z"
    },
    {
      "id": "0557ed73-dbe6-406e-813d-8c91a1373376",
      "en": "compare",
      "ru": "сравнивать",
      "lesson": 39,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.546Z"
    },
    {
      "id": "2df39d4c-d91e-401b-bdb0-adad95996c29",
      "en": "necessary",
      "ru": "необходимый",
      "lesson": 39,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.546Z"
    },
    {
      "id": "7d94e9d8-739b-418a-a17b-ddbc833973d7",
      "en": "prepare for",
      "ru": "готовиться к",
      "lesson": 39,
      "correct": 1,
      "wrong": 0,
      "createdAt": "2026-09-01T17:29:25.546Z"
    },
    {
      "id": "9a8810e7-578d-4d80-b148-5758a0259140",
      "en": "in summer",
      "ru": "летом",
      "lesson": 39,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T13:22:10.935Z"
    },
    {
      "id": "2bf628f7-4c4d-4ce7-8347-b24669f2da04",
      "en": "polite",
      "ru": "вежливый",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.159Z"
    },
    {
      "id": "b0808177-67be-4f00-b050-e82cbe97a393",
      "en": "compete",
      "ru": "соревноваться",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.159Z"
    },
    {
      "id": "ab773157-9e76-4b2b-9667-15919e062ffa",
      "en": "cook",
      "ru": "готовить",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.160Z"
    },
    {
      "id": "0f839385-35e9-4b38-a4d9-2cdece12053c",
      "en": "i am fond of",
      "ru": "я обожаю",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.160Z"
    },
    {
      "id": "d0c22d87-3081-48e2-a5e7-78057f83c3a0",
      "en": "at the airport",
      "ru": "в аэропорту",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.160Z"
    },
    {
      "id": "800aec09-0902-4a05-9b0c-1ccba8ea4c11",
      "en": "hope",
      "ru": "надеяться",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.161Z"
    },
    {
      "id": "090a3375-8ade-4a2b-9a4b-3400eee31d8f",
      "en": "this year",
      "ru": "в этом году",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.162Z"
    },
    {
      "id": "0b49c2b3-82f4-4b51-8399-0395ae01bf98",
      "en": "by tomorrow",
      "ru": "к завтрашнему дню",
      "lesson": 41,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:14:29.162Z"
    },
    {
      "id": "f952b6bf-5609-4776-b383-e29d19a46ee3",
      "en": "each other",
      "ru": "друг друга",
      "lesson": 42,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:26:46.141Z"
    },
    {
      "id": "274a1a3f-3edd-4b2a-8e15-f67b91f36a8e",
      "en": "separately",
      "ru": "раздельно",
      "lesson": 42,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:26:46.142Z"
    },
    {
      "id": "fd54adc1-0520-4ddb-ae67-371bbd725967",
      "en": "afraid of",
      "ru": "бояться чего то",
      "lesson": 42,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:26:46.142Z"
    },
    {
      "id": "779ed17b-6782-4acc-9ab2-0abedc2bcd7a",
      "en": "keen on",
      "ru": "увлекаться чем то",
      "lesson": 42,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-02T14:26:46.142Z"
    },
    {
      "id": "d9ef4d30-4dac-4ccc-9ea3-40e0b0569116",
      "en": "thanks to you",
      "ru": "благодаря тебе",
      "lesson": 43,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T18:56:27.249Z"
    },
    {
      "id": "28e512ed-f732-4cda-af03-b4f24345c3ce",
      "en": "explanation",
      "ru": "объяснение",
      "lesson": 43,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T18:56:27.249Z"
    },
    {
      "id": "ab56de56-b535-46ec-a46b-316815d6c1b9",
      "en": "simplicity",
      "ru": "простота",
      "lesson": 43,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T18:56:27.249Z"
    },
    {
      "id": "5997976b-e478-4c55-9b43-7fa741e342d0",
      "en": "frighten",
      "ru": "пугать",
      "lesson": 43,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T18:56:27.249Z"
    },
    {
      "id": "c2d7fa05-f439-4f17-84a5-38d71b80bf9d",
      "en": "nowadays",
      "ru": "в настоящее время",
      "lesson": 43,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T18:56:27.249Z"
    },
    {
      "id": "5cb85c57-5384-480d-ac26-e0da7b506fb7",
      "en": "admire",
      "ru": "восхищаться",
      "lesson": 43,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T18:56:27.250Z"
    },
    {
      "id": "0e7f9b89-13d5-4dfc-96eb-badb0f1f74de",
      "en": "perfectly understand",
      "ru": "прекрасно понимаю",
      "lesson": 44,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T19:20:03.449Z"
    },
    {
      "id": "3a776007-a01b-4568-b066-4962985a541e",
      "en": "realize",
      "ru": "осознавать",
      "lesson": 44,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-03T19:20:03.449Z"
    },
    {
      "id": "32b30e37-8340-45b8-9679-65c696ef7e70",
      "en": "must",
      "ru": "должен",
      "lesson": 45,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:23:23.973Z"
    },
    {
      "id": "d95d1212-02ce-47ec-8025-2e48db922b63",
      "en": "should",
      "ru": "следует",
      "lesson": 45,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:23:23.973Z"
    },
    {
      "id": "c4462a4f-77fb-479b-a720-5bf011957bc0",
      "en": "may",
      "ru": "возможно",
      "lesson": 45,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:23:23.973Z"
    },
    {
      "id": "35848c7b-9905-476a-a95e-1e65c4e386da",
      "en": "might",
      "ru": "возможно",
      "lesson": 45,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:23:23.973Z"
    },
    {
      "id": "15a0c19a-552d-4969-933e-63e6b8219944",
      "en": "short",
      "ru": "короткий",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.052Z"
    },
    {
      "id": "c9436487-9d1d-4df9-902b-652c67698757",
      "en": "rude",
      "ru": "грубый",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.052Z"
    },
    {
      "id": "f39e28dc-b758-4b70-93fa-a98e143fc974",
      "en": "sentence",
      "ru": "предложение в тексте",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.052Z"
    },
    {
      "id": "329a8124-e550-461d-97db-1ebbbbeeec8f",
      "en": "adult",
      "ru": "взрослый",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.052Z"
    },
    {
      "id": "cbbd8628-fc31-4f51-ae6b-b60e434e2147",
      "en": "grown up",
      "ru": "выросший/взрослый",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.052Z"
    },
    {
      "id": "c7d94746-577d-40b9-9d47-470a2beb5e22",
      "en": "thin",
      "ru": "худой (нездоровый)",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.052Z"
    },
    {
      "id": "3f3f241a-4ec4-4771-86db-b2dc245ff928",
      "en": "slim",
      "ru": "худой (стройный)",
      "lesson": 46,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-04T19:44:08.053Z"
    },
    {
      "id": "9cacfbc1-7499-4e40-bb90-967a0b918a96",
      "en": "tall",
      "ru": "высокий (человек)",
      "lesson": 47,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:06:13.074Z"
    },
    {
      "id": "b1254635-e336-423e-bf4b-5d470204be50",
      "en": "advanced",
      "ru": "продвинутый",
      "lesson": 47,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:06:13.075Z"
    },
    {
      "id": "a129547b-35db-42c5-9155-ae51a15bcfdb",
      "en": "beginner",
      "ru": "новичок",
      "lesson": 47,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:06:13.075Z"
    },
    {
      "id": "468d6a07-41c4-4b62-9ce0-17036b311055",
      "en": "educated",
      "ru": "образованный",
      "lesson": 47,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:06:13.075Z"
    },
    {
      "id": "09a1521d-b734-4d62-9a4d-33f3d65c4fb6",
      "en": "personal",
      "ru": "личный",
      "lesson": 48,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:23:54.814Z"
    },
    {
      "id": "64524a0d-f0b0-4a24-99c2-33fe66ed61b6",
      "en": "in the photo",
      "ru": "на фото",
      "lesson": 48,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:23:54.814Z"
    },
    {
      "id": "33585823-813d-4847-9d92-9dd7547c41d3",
      "en": "disease",
      "ru": "серьезная болезнь",
      "lesson": 48,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-05T20:23:54.814Z"
    },
    {
      "id": "063cf091-b9a6-4815-8dc4-f076b5381382",
      "en": "cost",
      "ru": "издержка",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.718Z"
    },
    {
      "id": "e399603b-d217-485f-92aa-73009943a9c8",
      "en": "get tired",
      "ru": "устанешь",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.718Z"
    },
    {
      "id": "474bf968-00fc-4bdf-9c9a-0b8361b81a53",
      "en": "get",
      "ru": "получать",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.718Z"
    },
    {
      "id": "01abe8ef-1594-407d-8728-1d3956f107cd",
      "en": "achieve",
      "ru": "достигать",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.718Z"
    },
    {
      "id": "9c022e9e-a6e5-43fd-b1b3-dff10bb71851",
      "en": "aim",
      "ru": "цель",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.719Z"
    },
    {
      "id": "221da480-6caf-4e57-8b86-52882ca83b9e",
      "en": "think it over",
      "ru": "обдумать это",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.719Z"
    },
    {
      "id": "ae1eb26b-9d85-4e01-ad3a-f95900c01c68",
      "en": "grateful to you for it",
      "ru": "благодарю тебя за это",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.720Z"
    },
    {
      "id": "8b5936ed-0708-4fe5-8bf4-c8141d694e23",
      "en": "get married",
      "ru": "жениться",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.720Z"
    },
    {
      "id": "99a92d14-3504-453c-9131-14a855c6aaae",
      "en": "repair",
      "ru": "починить",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.720Z"
    },
    {
      "id": "eb902060-2c58-4d23-b383-3d09876fd508",
      "en": "follow",
      "ru": "последовать",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.720Z"
    },
    {
      "id": "d8e74382-876f-405a-a0ee-8f9aa2c73905",
      "en": "shock",
      "ru": "шокировать",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.720Z"
    },
    {
      "id": "9193052d-cace-47b5-8326-33469412ea5b",
      "en": "surprise",
      "ru": "удивлять",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.721Z"
    },
    {
      "id": "242314d9-447b-400f-9a36-ab06b3335312",
      "en": "greatly",
      "ru": "очень сильно",
      "lesson": 49,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:19:46.721Z"
    },
    {
      "id": "ca94a37c-2c06-415b-8ce9-873b3271395f",
      "en": "reinvent the wheel",
      "ru": "изобретать заново колесо",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.792Z"
    },
    {
      "id": "309828e6-769b-410e-bfe1-ac8a146c9c56",
      "en": "invent",
      "ru": "изобретать",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.794Z"
    },
    {
      "id": "e6608b99-8838-43d8-a707-6b698e1c6a44",
      "en": "disappointed",
      "ru": "расстроен",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.794Z"
    },
    {
      "id": "e08f068e-6e51-4537-b24e-d53e004a8e47",
      "en": "sales manager",
      "ru": "менеджер по продажам",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.795Z"
    },
    {
      "id": "612b7208-bfe5-4043-af52-7c71977f18c0",
      "en": "forgive",
      "ru": "простить",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.795Z"
    },
    {
      "id": "0a71600f-6066-4f7e-a21f-c2e148739f8d",
      "en": "harry up",
      "ru": "торопиться",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.796Z"
    },
    {
      "id": "ee35051b-c7b5-4f63-bba0-b72df952acb3",
      "en": "lend",
      "ru": "одолжить",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.797Z"
    },
    {
      "id": "f576329f-27fa-4691-bcdf-539d12ca7ff8",
      "en": "borrow",
      "ru": "занять",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.797Z"
    },
    {
      "id": "4333b299-78f0-4c3a-a1d8-42c0a08a9edb",
      "en": "authorities",
      "ru": "власти",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.798Z"
    },
    {
      "id": "0a98a6c5-505d-4be0-9f0a-38a07d6f5fb0",
      "en": "devote to me",
      "ru": "уделять мне",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.799Z"
    },
    {
      "id": "c9d104ed-713c-49a3-beba-aec136cf67f8",
      "en": "confuse",
      "ru": "путать",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.799Z"
    },
    {
      "id": "d64b6184-595e-45c3-8252-e7adb1df59e7",
      "en": "regret it",
      "ru": "пожалеть об этом",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.800Z"
    },
    {
      "id": "57730884-be47-441a-986b-6c7b07c8e761",
      "en": "punish",
      "ru": "наказать",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.801Z"
    },
    {
      "id": "5e14d438-dda0-46a2-9548-adb0590792c2",
      "en": "teach a lesson",
      "ru": "преподать урок",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.801Z"
    },
    {
      "id": "0d3505c5-95fb-483d-98e2-dfdb91ab54b9",
      "en": "apologize for it",
      "ru": "извинитьзя за это",
      "lesson": 50,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-09T19:55:04.802Z"
    },
    {
      "id": "b34f0efa-2456-41f5-ba0f-7c5f0be391d7",
      "en": "preparation",
      "ru": "подготовка",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.430Z"
    },
    {
      "id": "0a715a5a-06f3-46ed-83a3-13f245bb3bb9",
      "en": "lead to success",
      "ru": "приводить к успеху",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.431Z"
    },
    {
      "id": "afb751ed-f6e1-44d1-8f67-e6b5b293542b",
      "en": "interrupt",
      "ru": "перебивать",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.431Z"
    },
    {
      "id": "635cb82d-c2b8-4e71-8bac-1366e0241c73",
      "en": "take part",
      "ru": "принимать участие",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.432Z"
    },
    {
      "id": "e10b5813-0265-4d5a-a147-74d5bf4ddac9",
      "en": "competition",
      "ru": "соревнование",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.432Z"
    },
    {
      "id": "26601a82-3318-4e8d-9cb0-253853cbe6fa",
      "en": "contest",
      "ru": "конкурс",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.433Z"
    },
    {
      "id": "5d488ae7-65a8-4cac-8c0b-0e4c5cfa24a8",
      "en": "measure",
      "ru": "мера",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.433Z"
    },
    {
      "id": "41240229-107d-4806-9d0e-3ef924a19d6b",
      "en": "influence",
      "ru": "повлиять",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.434Z"
    },
    {
      "id": "416e860a-ce68-4f49-8b05-f3f7e9caf32d",
      "en": "deny",
      "ru": "отрицать",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.435Z"
    },
    {
      "id": "b665cbac-73df-448a-b484-248d414c7b1c",
      "en": "legal",
      "ru": "законно",
      "lesson": 51,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T12:28:32.435Z"
    },
    {
      "id": "cccd53b7-0b41-4dce-983c-c25247d78361",
      "en": "insist on it",
      "ru": "настаивать на этом",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.721Z"
    },
    {
      "id": "78d186eb-79f0-4d4e-b79d-e8ec37fbf002",
      "en": "in one day",
      "ru": "за один день",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.722Z"
    },
    {
      "id": "9e5065f4-47ff-4a96-9141-12810e8afcdb",
      "en": "guests",
      "ru": "гости",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.723Z"
    },
    {
      "id": "4913fd75-fa3c-432d-af95-3e80ab6c3178",
      "en": "notice",
      "ru": "заметить",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.723Z"
    },
    {
      "id": "762c947d-1056-4a69-8ff4-698a861a2166",
      "en": "absence",
      "ru": "отсутствие",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.724Z"
    },
    {
      "id": "783ad4a9-9a5e-4326-97e8-3c4334de10eb",
      "en": "absent",
      "ru": "отсутствует",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.724Z"
    },
    {
      "id": "8daebd52-6355-49c6-91e4-e4b02d6bb5e8",
      "en": "present",
      "ru": "присутствует",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.725Z"
    },
    {
      "id": "3fc68853-76e0-4af8-9cad-6ecd3e48f4f6",
      "en": "approach",
      "ru": "подход",
      "lesson": 52,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-10T13:05:32.725Z"
    },
    {
      "id": "8e570476-5e74-4389-8327-cf5b0050df30",
      "en": "automatically",
      "ru": "на автоматизме",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.037Z"
    },
    {
      "id": "5e7f8379-d023-45c3-9a56-68bad9512b08",
      "en": "attitude to problem",
      "ru": "отношение к проблеме",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.038Z"
    },
    {
      "id": "e8315fba-ac47-4325-9146-bd319098e94a",
      "en": "point at mistakes",
      "ru": "указать на ошибки",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.039Z"
    },
    {
      "id": "cc414ca6-39e1-4f89-ba31-77f6a216c18a",
      "en": "last forever",
      "ru": "длиться вечно",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.040Z"
    },
    {
      "id": "7c1f42a5-0850-4f25-9ea9-0f25d77f2f13",
      "en": "last for more",
      "ru": "длиться дольше",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.040Z"
    },
    {
      "id": "94461195-9dcf-4e92-b0ef-10af25f818d6",
      "en": "available",
      "ru": "доступен",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.041Z"
    },
    {
      "id": "92df4a25-c4aa-4d92-ab7e-5e2f06b90ddf",
      "en": "main",
      "ru": "основной",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.042Z"
    },
    {
      "id": "56633681-4d3b-446a-80b5-5e03ab2283ca",
      "en": "sign",
      "ru": "подписать",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.043Z"
    },
    {
      "id": "a4d40268-fc58-4f66-8acd-8370cd35be4b",
      "en": "report",
      "ru": "отчет",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.043Z"
    },
    {
      "id": "f678a0cd-1108-41a9-adfa-937476cadb9f",
      "en": "threat",
      "ru": "угроза",
      "lesson": 53,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T18:54:53.044Z"
    },
    {
      "id": "31213688-886c-41b4-b858-b603ecd614fa",
      "en": "miss the bus",
      "ru": "пропустить автобус",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.831Z"
    },
    {
      "id": "4b994d26-427b-472b-80d4-d86cef15265f",
      "en": "pronunciation",
      "ru": "произношение",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.833Z"
    },
    {
      "id": "07a04c77-ce7e-4a18-8af2-6d712d8b1430",
      "en": "guess",
      "ru": "отгадать",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.834Z"
    },
    {
      "id": "5bd27552-f0a0-4c45-acb4-478b5cde133c",
      "en": "look something up in a dictionary",
      "ru": "посмотреть что то в словаре",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.834Z"
    },
    {
      "id": "08d3b8ff-b475-42e3-a6ff-54f29373ef36",
      "en": "at last",
      "ru": "наконец-то",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.835Z"
    },
    {
      "id": "73305c08-6658-4dd0-b2ba-c50ceb00dfea",
      "en": "fail",
      "ru": "завалить",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.836Z"
    },
    {
      "id": "24de5359-3689-4b89-a853-e129d2ecb701",
      "en": "dissatisfaction",
      "ru": "неудовлетворение",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.837Z"
    },
    {
      "id": "72615b68-78df-4735-b511-28855f61e8b0",
      "en": "the current situation",
      "ru": "текущая ситуация",
      "lesson": 54,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-11T19:29:39.838Z"
    },
    {
      "id": "ac6624f0-51e9-4f45-b5bc-3e8468244467",
      "en": "produce",
      "ru": "производить",
      "lesson": 55,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-13T18:36:25.748Z"
    },
    {
      "id": "d456004a-61d9-4fd6-8f5f-d7c56b9bfae7",
      "en": "manage to do",
      "ru": "суметь сделать",
      "lesson": 55,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-13T18:36:25.749Z"
    },
    {
      "id": "ff81ccd4-18bc-4382-ba38-4439ce1db33e",
      "en": "manage",
      "ru": "управлять",
      "lesson": 55,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-13T18:36:25.750Z"
    },
    {
      "id": "eeff06b3-ada8-46ba-9d4e-db8def0f6cad",
      "en": "belong to him",
      "ru": "принодлежать ему",
      "lesson": 55,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-13T18:36:25.751Z"
    },
    {
      "id": "023d23a4-64fa-47ca-8c61-091cc2ea620e",
      "en": "spider",
      "ru": "паук",
      "lesson": 55,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-13T18:36:25.752Z"
    },
    {
      "id": "74b122d9-06f1-4933-a344-f59a7886b171",
      "en": "whose",
      "ru": "Чей",
      "lesson": 55,
      "correct": 0,
      "wrong": 0,
      "createdAt": "2026-09-13T19:07:17.154Z"
    }
  ],
  "quizHistory": [
    {
      "date": "2026-09-02T13:21:37.964Z",
      "score": 20,
      "total": 20,
      "mode": "en-ru"
    }
  ],
  "settings": {
    "version": 2,
    "bundledDataVersion": "user-json-2026-09-02-v1"
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
      const indexById = new Map(
        loaded.words
          .map((word, index) => [String(word.id || ""), index])
          .filter(([id]) => id)
      );
      const existingKeys = new Set(loaded.words.map(normalizeWordKey));

      for (const bundledWord of defaultData.words) {
        const normalizedBundled = normalizeWordRecord(structuredClone(bundledWord));
        const bundledId = String(bundledWord.id || "");

        if (bundledId && indexById.has(bundledId)) {
          const index = indexById.get(bundledId);
          loaded.words[index] = normalizedBundled;
          existingKeys.add(normalizeWordKey(normalizedBundled));
          continue;
        }

        const contentKey = normalizeWordKey(normalizedBundled);
        if (existingKeys.has(contentKey)) continue;

        loaded.words.push(normalizedBundled);
        if (bundledId) indexById.set(bundledId, loaded.words.length - 1);
        existingKeys.add(contentKey);
      }

      if (Array.isArray(defaultData.quizHistory)) {
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
      <article class="lesson-card closed" data-lesson-card="${lesson}">
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
