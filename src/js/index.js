import '../scss/style.scss';
const sideMenu = document.querySelector('.side-menu');
const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feedback');
const mainContent = document.querySelector('.main-content');
const content = document.querySelector('.content');

const menus = document.querySelector('.side-menu .menu');
const selectMarkers = document.querySelectorAll('.menu__select-marker');

const heightBtns = document.querySelectorAll(".height-btn");
const heightBtnTxt = document.querySelectorAll(".height-btn > span");
const heightBtnSvg = document.querySelectorAll(".height-btn > svg");
const brendList = document.querySelector(".brend-list");
const techList = document.querySelector(".techs-list");
const aboutText = document.querySelector(".about__text");


let sections = [
  {
    full: false,
    shortSize768: '125px',
    shortSize1440: '150px',
    fullSize768: '210px',
    fullSize1440: '150px',
    name : aboutText,
    fullSizeName: "Скрыть",
    shortSizeName: "Читать далее",
    fullArrow: "rotate(180deg)",
    shortArrow: "rotate(0deg)",
  },

  {
    full: false,
    shortSize768: '160px',
    shortSize1440: '160px',
    fullSize768: '350px',
    fullSize1440: '250px',
    name : brendList,
    fullSizeName: "Скрыть",
    shortSizeName: "Показаьть все",
    fullArrow: "rotate(180deg)",
    shortArrow: "rotate(0deg)",
  },
  {
    full: false,
    shortSize768: '160px',
    shortSize1440: '165px',
    fullSize768: '530px',
    fullSize1440: '530px',
    name: techList,
    fullSizeName: "Скрыть",
    shortSizeName: "Показаьть все",
    fullArrow: "rotate(180deg)",
    shortArrow: "rotate(0deg)",
  }
];

let modals = [
  {
    name: sideMenu,
    blur: mainContent,
  },
  {
    name: modalCall,
    blur: content,
  },
  {
    name: modalFeedback,
    blur: content,
  }
]

let currentModal;

let selectMenu = (e) => {
  selectMarkers.forEach((marker) => {
    marker.style.display="none";
  });
  selectMarkers[e.target.id].style.display="inline";
}

let sizeChanger = (e) => {

  let sectionProps = sections[e.currentTarget.id];
  let section = sectionProps.name;
  let btnText = heightBtnTxt[e.currentTarget.id];
  let arrow = heightBtnSvg[e.currentTarget.id];
  let shortHeight = '';
  let fullHeight = '';

  window.innerWidth < 1440 ? 
  ( shortHeight = sectionProps.shortSize768,
    fullHeight = sectionProps.fullSize768) : 
  ( shortHeight = sectionProps.shortSize1440,
    fullHeight = sectionProps.fullSize1440);
    
  sectionProps.full ? 
  ( section.style.height = shortHeight,
    btnText.innerHTML= sectionProps.shortSizeName, 
    arrow.style.transform = sectionProps.shortArrow, 
    sectionProps.full = false) : 
  (section.style.height = fullHeight, 
    btnText.innerHTML= sectionProps.fullSizeName, 
    arrow.style.transform = sectionProps.fullArrow, 
    sectionProps.full = true);
}

document.addEventListener("click",function(e) {
  let closeBtn = e.target.closest('.close');
  let openBtn = e.target.closest('.modal-btn');
  let opendModals = document.querySelectorAll('.open');

  if(currentModal) {
    if(!currentModal.name.contains(e.target) || closeBtn) {
      for(let i=0; i<=opendModals.length-1; i++) {
        opendModals[i].classList.remove('open');
      }
      currentModal = null;
    } else {
      if(openBtn){
        currentModal = modals[openBtn.id];
        openModal(currentModal);
      }
    };
  } else {
    if(openBtn){
      currentModal = modals[openBtn.id];
      openModal(currentModal);
    }
  };
});

for(let btn of heightBtns) {
  btn.addEventListener("click", sizeChanger);
};

menus.addEventListener("click", selectMenu);

const openModal = (block) => {
  block.name.classList.add('open');
}

new Swiper('.swiper-container', {
  spaceBetween: 50,
  slidesPerView:1.45,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper-price', {
  spaceBetween: 78,
  slidesPerView:1.45,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
