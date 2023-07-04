import supportList from '../data/support.json';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

import saveTheChildren from '../images/supports/1.png';
import saveTheChildren2x from '../images/supports/1@2x.png';
import projectHope from '../images/supports/2.png';
import projectHope2x from '../images/supports/2@2x.png';
import united24 from '../images/supports/3.png';
import united242x from '../images/supports/3@2x.png';
import internationalMedicalCorps from '../images/supports/4.png';
import internationalMedicalCorps2x from '../images/supports/4@2x.png';
import medicinsSansFrontieres from '../images/supports/5.png';
import medicinsSansFrontieres2x from '../images/supports/5@2x.png';
import razom from '../images/supports/6.png';
import razom2x from '../images/supports/6@2x.png';
import actionAgainstHunger from '../images/supports/7.png';
import actionAgainstHunger2x from '../images/supports/7@2x.png';
import worldVision from '../images/supports/8.png';
import worldVision2x from '../images/supports/8@2x.png';
import serhiyPrytulaCharityFoundation from '../images/supports/9.png';
import serhiyPrytulaCharityFoundation2x from '../images/supports/9@2x.png';

const supportImg = [
  {
    title: 'Save the Children',
    srcset: `${saveTheChildren} 1x, ${saveTheChildren2x} 2x`,
    src: saveTheChildren,
    width: 104,
  },
  {
    title: 'Project HOPE',
    srcset: `${projectHope} 1x, ${projectHope2x} 2x`,
    src: projectHope,
    width: 63,
  },
  {
    title: 'UNITED24',
    srcset: `${united24} 1x, ${united242x} 2x`,
    src: united24,
    width: 104,
  },
  {
    title: 'International Medical Corps',
    srcset: `${internationalMedicalCorps} 1x, ${internationalMedicalCorps2x} 2x`,
    src: internationalMedicalCorps,
    width: 90,
  },
  {
    title: 'Medicins Sans Frontieres',
    srcset: `${medicinsSansFrontieres} 1x, ${medicinsSansFrontieres2x} 2x`,
    src: medicinsSansFrontieres,
    width: 93,
  },
  {
    title: 'RAZOM',
    srcset: `${razom} 1x, ${razom2x} 2x`,
    src: razom,
    width: 74,
  },
  {
    title: 'Action against hunger',
    srcset: `${actionAgainstHunger} 1x, ${actionAgainstHunger2x} 2x`,
    src: actionAgainstHunger,
    width: 55,
  },
  {
    title: 'World vision',
    srcset: `${worldVision} 1x, ${worldVision2x} 2x`,
    src: worldVision,
    width: 57,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    srcset: `${serhiyPrytulaCharityFoundation} 1x, ${serhiyPrytulaCharityFoundation2x} 2x`,
    src: serhiyPrytulaCharityFoundation,
    width: 82,
  },
];

const swiperOptions = {
  direction: 'vertical',
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 6,
    },
  },
};

const fundList = document.querySelector('.fund-list');
const down = document.querySelector('.button-next');
const up = document.querySelector('.button-prev');
const swiper = new Swiper('.swiper', swiperOptions);

swiper.on('reachEnd', function () {
  if (up.classList.contains('visually-hidden')) {
    up.classList.remove('visually-hidden');
  }
  down.classList.add('visually-hidden');
});

swiper.on('reachBeginning', function () {
  if (down.classList.contains('visually-hidden')) {
    down.classList.remove('visually-hidden');
  }
  up.classList.add('visually-hidden');
});

down.addEventListener('click', slideUp);

function slideUp() {
  swiper.slideNext();
}

up.addEventListener('click', slideDown);

function slideDown() {
  swiper.slidePrev();
}

supportList.forEach(function (data) {
  let imgSrc = data.img;
  let imgSrcset = '';
  let imgWidth = null;

  if (!imgSrc) {
    const supportImgItem = supportImg.find(item => item.title === data.title);
    if (supportImgItem) {
      imgSrc = supportImgItem.src;
      imgSrcset = supportImgItem.srcset;
      imgWidth = supportImgItem.width;
    }
  }

  const listItem = `
    <li class="swiper-slide support-list">
      <a href="${data.url}"rel="noopener noreferrer nofollow" target="_blank" style='width: ${imgWidth}px'>
        <img class="support-img" src="${imgSrc}" srcset="${imgSrcset}" alt="${data.title} loading="lazy"">
      </a>
    </li>
  `;

  fundList.insertAdjacentHTML('beforeend', listItem);
});
swiper.update();
