const birthdayCard = document.querySelector("#birthdayCard");
const message = document.querySelector("#message");
const overline = document.querySelector("#overline");
const hint = document.querySelector("#hint");
const stepIndicator = document.querySelector("#stepIndicator");
const introView = document.querySelector("#introView");
const menuView = document.querySelector("#menuView");
const detailView = document.querySelector("#detailView");
const detailContent = document.querySelector("#detailContent");
const options = document.querySelector("#options");
const backButton = document.querySelector("#backButton");
const musicButton = document.querySelector("#musicButton");
const loveSong = document.querySelector("#loveSong");

const screens = [
  { overline: "Una pregunta importante", message: "¿Sabes de quién es el cumpleaños hoy?", hint: "Toca la pantalla para continuar" },
  { overline: "La respuesta es sencilla", message: "A LA MUJER QUE AMO y quiero demasiado", hint: "Toca una vez más" },
  { overline: "Este mensaje es para", message: "Feliz cumpleaños", hint: "Abre la única opción" },
];

const letterPages = [
  { label: "01 / MI MENSAJE PARA TI", title: "Sinceramente, no sé cómo empezar esto.", body: "Han pasado muchas cosas y me arrepiento de muchas de mis decisiones, pero me alegra muchísimo haberte conocido. Aunque no me acuerdo muy bien de cómo era el salón ni de si había más asientos, me alegra mucho que te hayas sentado junto a mí.", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=85", alt: "Rosas rojas sobre una mesa" },
  { label: "02 / CUANDO TE CONOCÍ", title: "Tu presencia empezó a gustarme muchísimo.", body: "Al principio te consideraba un poco molesta. Me gustaba estar solo, pero con el tiempo me empezó a agradar muchísimo tu presencia. Eras divertida e interesante, y sinceramente no sé desde qué momento me enamoré de tus ojos, de tu sonrisa y de tu voz. Me encantaba ver cómo te concentrabas en hacer tus cosas y lo dedicada que eras, no solo con tus estudios, sino también con tus amigos.", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85", alt: "Flores rosadas en un jardín" },
  { label: "03 / LO QUE SIENTO", title: "Sé que cometí errores.", body: "Tal vez, en algún momento, te hice sentir mal. Muchas veces me preguntaba y cuestionaba si era digno de ti o si realmente merecía a alguien como tú. Traté de alejar esos pensamientos, incluso cuando llegué acá. Intenté olvidarlos o dejar de pensar en lo que habría pasado si me hubiera armado de valor antes.", image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e1c?auto=format&fit=crop&w=900&q=85", alt: "Pareja tomada de la mano" },
  { label: "04 / SIEMPRE PIENSO EN TI", title: "De una u otra manera, siempre terminaba pensando en ti.", body: "Y, aunque suene un poco cruel, qué bueno que no lo hice. ¿Habrá comido bien? ¿Estará bien? ¿Habrá dormido a sus horas? Eran cosas que muchas veces quería preguntarte o escribirte, pero no quería ser molesto.", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85", alt: "Dos manos formando un corazón" },
  { label: "05 / 8 DE MARZO DE 2025", title: "Comenzó toda esta aventura contigo como pareja.", body: "Sinceramente, puede que todo esto sea difícil, porque soy alguien a quien le gusta mucho demostrar cariño de forma física, y estar tan separados es algo complicado para mí.", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85", alt: "Ramo de flores blancas" },
  { label: "06 / VOLVER A VERTE", title: "Sentí que me volví a enamorar de ti.", body: "No sé qué me habrás hecho o si simplemente eras algo que siempre había estado esperando. Porque, aunque no lo parezca, a veces me sale un lado cursi. Raro, lo sé.", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85", alt: "Pareja abrazándose al atardecer" },
  { label: "07 / LO QUE DESEO", title: "Espero que todo esto dure mucho más, muchísimo más.", body: "Quiero que sea mientras tú estés cómoda y lista, sin sentirte obligada a nada.", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85", alt: "Corazones de papel sobre una carta" },
  { label: "08 / TE AMO", title: "Voy a tratar de estar ahí para ti.", body: "Te amo y te quiero muchísimo. Sin importar las circunstancias ni el momento, voy a tratar de estar ahí para ti, ya sea de forma presencial o, en este caso, desde la distancia.", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=85", alt: "Pareja compartiendo un momento" },
  { label: "09 / FELIZ CUMPLEAÑOS", title: "Espero que pases un muy buen cumpleaños, amor mío.", body: "Disfruta mucho tu día, pásala increíble y recuerda que te quiero muchísimo.", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85", alt: "Globos de celebración", final: true },
];

let currentScreen = 0;
let currentView = "intro";
let currentPage = 0;

function showScreen(screenIndex) {
  const screen = screens[screenIndex];
  birthdayCard.className = `birthday-card is-${screenIndex + 1}`;
  overline.textContent = screen.overline;
  message.textContent = screen.message;
  hint.textContent = screen.hint;
  stepIndicator.textContent = `0${screenIndex + 1} / 03`;
}

function showMenu() {
  currentView = "menu";
  birthdayCard.className = "birthday-card menu-active";
  introView.hidden = true;
  detailView.hidden = true;
  menuView.hidden = false;
  stepIndicator.textContent = "CARTA";
  hint.textContent = "Elige la única opción para abrirla";
}

function renderLetterPage() {
  const page = letterPages[currentPage];
  const finalClass = page.final ? " is-final" : "";
  detailContent.innerHTML = `
    <div class="heart-wrap" aria-label="Corazón, tamaño ${currentPage + 1} de ${letterPages.length}"><span class="heart${finalClass}">♥</span></div>
    <div class="letter-layout">
      <div class="letter-copy">
        <p class="overline">${page.label}</p>
        <h1 class="detail-title">${page.title}</h1>
        <p class="detail-body">${page.body}</p>
      </div>
      <figure class="love-image"><img src="${page.image}" alt="${page.alt}" /></figure>
    </div>
    <div class="letter-controls">
      <span class="page-count">${String(currentPage + 1).padStart(2, "0")} / ${String(letterPages.length).padStart(2, "0")}</span>
      <button class="next-button" type="button" id="nextPage">${page.final ? "Cerrar la carta" : "Siguiente página →"}</button>
    </div>
  `;
  birthdayCard.style.setProperty("--heart-scale", `${1 + currentPage * 0.11}`);
  stepIndicator.textContent = `${String(currentPage + 1).padStart(2, "0")} / 09`;
  hint.textContent = page.final ? "Gracias por leerme" : "Continúa cuando estés lista";
  detailContent.querySelector("#nextPage").addEventListener("click", nextPage);
}

function openDetail() {
  currentView = "detail";
  currentPage = 0;
  birthdayCard.className = "birthday-card detail-active";
  introView.hidden = true;
  menuView.hidden = true;
  detailView.hidden = false;
  renderLetterPage();
  if (loveSong.paused) {
    toggleMusic();
  }
}

function nextPage() {
  if (currentPage < letterPages.length - 1) {
    currentPage += 1;
    renderLetterPage();
  } else {
    showMenu();
  }
}

async function toggleMusic() {
  if (loveSong.paused) {
    try {
      await loveSong.play();
      musicButton.textContent = "♫ Pausar música";
      musicButton.setAttribute("aria-pressed", "true");
    } catch {
      musicButton.textContent = "♫ Añade follow-you.mp3";
    }
  } else {
    loveSong.pause();
    musicButton.textContent = "♫ Activar música";
    musicButton.setAttribute("aria-pressed", "false");
  }
}

birthdayCard.addEventListener("click", (event) => {
  if (event.target.closest("button")) return;
  if (currentView === "intro") {
    currentScreen < screens.length - 1 ? showScreen(++currentScreen) : showMenu();
  }
});

birthdayCard.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && currentView === "intro") {
    event.preventDefault();
    currentScreen < screens.length - 1 ? showScreen(++currentScreen) : showMenu();
  }
});

options.addEventListener("click", openDetail);
backButton.addEventListener("click", showMenu);
musicButton.addEventListener("click", toggleMusic);
showScreen(currentScreen);
