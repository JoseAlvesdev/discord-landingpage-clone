import { range } from '../modules/functions.export';

// Interfaces
import { ISection } from "../interfaces/ISection.interfaces";
import { IImage } from '../interfaces/IImage.interfaces';

// Images
import imgMobSec1 from '../assets/img/section-1-mob-379px-img.svg';
import imgDeskSec1 from '../assets/img/section-1-desk-607px-img.svg';
import imgMobSec2 from '../assets/img/section-2-mob-379px-img.svg';
import imgDeskSec2 from '../assets/img/section-2-desk-607px-img.svg';
import imgMobSec3 from '../assets/img/section-3-mob-379px-img.svg';
import imgDeskSec3 from '../assets/img/section-3-desk-607px-img.svg';
import imgMobSec4 from '../assets/img/section-4-mob-379px-img.svg';
import imgDeskSec4 from '../assets/img/section-4-desk-784px-img.svg';

const images: IImage[] = [
  {
    imgMob: imgMobSec1,
    imgDesk: imgDeskSec1
  },
  {
    imgMob: imgMobSec2,
    imgDesk: imgDeskSec2
  },
  {
    imgMob: imgMobSec3,
    imgDesk: imgDeskSec3
  },
  {
    imgMob: imgMobSec4,
    imgDesk: imgDeskSec4
  }
]

// Api
const url: string =
  "https://raw.githubusercontent.com/josehenriques10/discord-landingpage-clone/main/src/data/sections.json";

// Request

const request: { sections: ISection[] } = await fetch(url)
  .then((response: Response) => response.json())
  .catch((error: any) => console.log(error))
  .finally(() => console.log("Request completed!"))
;

const mainContent: HTMLElement 
  = document.querySelector(".js-main-content") as HTMLElement;

mainContent.innerHTML = request.sections
  .map((section: ISection, index: number) => {
    return `
      <section class="c-section">
        <div class="o-wrapper">
          <div class="o-flex-container-col">
            <picture class="c-section__img">
              <source srcset="${images[index].imgDesk}" media="(min-width: 992px)">
              <img src="${images[index].imgMob}" alt="">
            </picture>
            <h1 class="c-section__title">
              ${section.title}
            </h1>
            <p class="c-section__description">
              ${section.description}
            </p>
          </div>
        </div>
      </section>
    `;
  }).join('')
;

const secQty: number = mainContent.children.length;

mainContent.children[secQty - 1].classList.add('c-section--special');

function responsiveUpdate() {
  let i: number = 0;

  for (i of range(0, secQty - 1)) {
    mainContent.children[i].children[0].children[0].classList.remove(
      window.innerWidth >= 992 ?  'o-flex-container-col' : 'o-grid-container-2cr'
    );
    mainContent.children[i].children[0].children[0].classList.add(
      window.innerWidth >= 992 ? 'o-grid-container-2cr' : 'o-flex-container-col'
    );

    if (i % 2 === 1 && i < secQty - 1) 
      mainContent.children[i].classList.add('c-section--reverse');
  }
  
}

responsiveUpdate()

// To test responsiveness in the browser in real time

window.addEventListener('resize', () => {
  responsiveUpdate()
});