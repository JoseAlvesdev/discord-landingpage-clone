class Header extends HTMLElement 
{

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="c-header">
        <div class="o-wrapper o-flex-container-col">
          <h1 class="c-header__title">
            IMAGINE UM<br>LUGAR...
          </h1>
          <p class="c-header__description">
            …onde você possa pertencer a um clube escolar, um grupo de gamers, ou
            uma comunidade artística mundial. Onde você e alguns amigos possam
            passar um tempo juntos. Um lugar que torna fácil conversar todos os dias
            e socializar com mais frequência.
          </p>
          <div class="o-wrapper o-flex-container-col js-wpp-btn-hed">
            <button class="c-button c-header__button c-header__button--primary">
              Baixar para Windows
            </button>
            <button class="c-button c-header__button c-header__button--secondary">
              Abra o Discord no seu navegador
            </button>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", Header);

let wrapperButtonsHeader: any;

if (wrapperButtonsHeader !== null) {
  wrapperButtonsHeader = 
    document.querySelector<HTMLDivElement>(".js-wpp-btn-hed");
}

function responsiveUpdate() {
  wrapperButtonsHeader.classList.remove(
    screen.width < 992 ? 'o-flex-container-def' : 'o-flex-container-col'
  );
  wrapperButtonsHeader.classList.add(
    screen.width >= 992 ? 'o-flex-container-def' : 'o-flex-container-col'
  );
}

responsiveUpdate();

// To test responsiveness in the browser in real time

window.addEventListener("resize", () => {
  responsiveUpdate();
});
