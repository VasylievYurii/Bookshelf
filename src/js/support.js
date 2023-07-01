import supportList from '../data/support.json';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

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
  },
  {
    title: 'Project HOPE',
    srcset: `${projectHope} 1x, ${projectHope2x} 2x`,
    src: projectHope,
  },
  {
    title: 'UNITED24',
    srcset: `${united24} 1x, ${united242x} 2x`,
    src: united24,
  },
  {
    title: 'International Medical Corps',
    srcset: `${internationalMedicalCorps} 1x, ${internationalMedicalCorps2x} 2x`,
    src: internationalMedicalCorps,
  },
  {
    title: 'Medicins Sans Frontieres',
    srcset: `${medicinsSansFrontieres} 1x, ${medicinsSansFrontieres2x} 2x`,
    src: medicinsSansFrontieres,
  },
  {
    title: 'RAZOM',
    srcset: `${razom} 1x, ${razom2x} 2x`,
    src: razom,
  },
  {
    title: 'Action against hunger',
    srcset: `${actionAgainstHunger} 1x, ${actionAgainstHunger2x} 2x`,
    src: actionAgainstHunger,
  },
  {
    title: 'World vision',
    srcset: `${worldVision} 1x, ${worldVision2x} 2x`,
    src: worldVision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    srcset: `${serhiyPrytulaCharityFoundation} 1x, ${serhiyPrytulaCharityFoundation2x} 2x`,
    src: serhiyPrytulaCharityFoundation,
  },
];

const swiperOptions = {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const fundList = document.querySelector('.fund-list');

const swiper = new Swiper('.swiper', swiperOptions);

supportList.forEach(function (data) {
  let imgSrc = data.img;
  let imgSrcset = '';

  if (!imgSrc) {
    const supportImgItem = supportImg.find(item => item.title === data.title);
    if (supportImgItem) {
      imgSrc = supportImgItem.src;
      imgSrcset = supportImgItem.srcset;
    }
  }

  const listItem = `
    <li class="swiper-slide support-list">
      <a href="${data.url}">
        <img class="support-img" src="${imgSrc}" srcset="${imgSrcset}" alt="${data.title}" height="32">
      </a>
    </li>
  `;

  fundList.insertAdjacentHTML('beforeend', listItem);
});

swiper.update();
