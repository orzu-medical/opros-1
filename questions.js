const QUESTIONS = [
  {
    id: "Вопрос-1",
    text: "Насколько удобной была запись на прием? (1–10)",
    muted: "1 — неудобно, 10 — очень удобно",
  },
  {
    id: "Вопрос-2",
    text: "Насколько внимателен был врач? (1–10)",
    muted: "1 — невнимательно, 10 — очень внимательно",
  },
  {
    id: "Вопрос-3",
    text: "Чувствовали ли вы заботу и комфорт? (1–10)",
    muted: "1 — нет, 10 — максимально",
  },
  {
    id: "Вопрос-4",
    text: "Порекомендуете ли клинику друзьям? (1–10)",
    muted: "1 — нет, 10 — да",
  },
];

const BRANCHES = [
  "Зангиота",
  "Юнусобод",
  "Фотима-Султон",
  "Паркент",
  "Янгибазар",
  "Аккурган",
  "Чиноз",
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

// Создаём слайды вопросов
QUESTIONS.forEach((q, idx) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="card" data-q="${idx + 1}">
      <div class="q">${idx + 1}. ${q.text}</div>
      <div class="muted">${q.muted}</div>
      <div class="rating" data-key="${q.id}"></div>
      <div class="controls">
        <span class="pill">Вопрос ${idx + 1} / ${QUESTIONS.length}</span>
        <div class="nav">
           <button class="iconbtn next">⟶</button>
        </div>
      </div>
    </div>
  `;
  swiperWrapper.appendChild(slide);
});

// Создаём слайд формы для Ф.И.О. и филиала
const formSlide = document.createElement("div");
formSlide.className = "swiper-slide";
formSlide.innerHTML = `
  <div class="card" data-q="form">
    <div class="q">Пожалуйста, заполните свои данные</div>
    <div class="muted">Это необходимо для идентификации ответов</div>
    <div class="controls" style="flex-direction: column; gap: 10px;">
      <input type="text" id="fullName" placeholder="Ф.И.О." style="padding: 10px; border-radius: 8px; border: none; width: 100%;" />
      <select id="branch" style="padding: 10px; border-radius: 8px; border: none; width: 100%;">
        <option value="">Выберите филиал</option>
        ${BRANCHES.map((b) => `<option value="${b}">${b}</option>`).join("")}
      </select>
    </div>
    <div class="submit">
      <button id="submitBtn">Отправить ответы</button>
    </div>
  </div>
`;
swiperWrapper.appendChild(formSlide);
