import footerLogoMob from '../assets/img/footer-logo-mob-162px-img.svg';
import footerLogoDesk from '../assets/img/footer-logo-desk-230px-img.svg';

class Footer extends HTMLElement 
{

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="c-footer">
        <picture class="c-footer__img">
          <source srcset="${footerLogoDesk}" media="(min-width: 992px)">
          <img src="${footerLogoMob}" alt="">
        </picture>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
