import { eventList, guests, sponsors } from './data.js';

const menuBtn = document.querySelector('.navbar-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const menuOption = document.querySelectorAll('.menu-option li');
const closeBtn = document.querySelector('.close-icon');
const mainEvent = document.querySelector('.main-event');
const guest = document.querySelector('.guests');
const sponsor = document.querySelector('.sponsor');

function closeNav() {
  menuOverlay.style.cssText = 'width: 0%; display: none;';
}

if (window.screen.width <= 768) {
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      menuOverlay.style.cssText = 'width: 100%; display: block;';
      document.body.style.overflow = 'hidden';
    });
  }
  if (menuOption) {
    menuOption.forEach((element) => {
      element.addEventListener('click', () => {
        document.body.style.overflow = 'auto';
        closeNav();
      });
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.body.style.overflow = 'auto';
      closeNav();
    });
  }
}

if (mainEvent) {
  mainEvent.innerHTML = eventList.map((event) => `<div class="row col-lg-2 event py-2 gap-1 gap-lg-4 text-center">
      <a class="col-2 col-lg-12 event-icon">
         <img src="${event.icon}" alt="${event.alt}"/>
      </a>
      <h2 class="col-3 col-lg-12 event-title"> ${event.title} </h2>
      <p class=" col-6 col-lg-12 event-subtitle px-lg-3"> ${event.subtitle} </p>
   </div>`).join('');
}

if (guest) {
  guest.innerHTML = guests.map((guest) => `<div class="row col-lg-6">
      <a class="col-6 col-md-3 col-lg-4 guest-image">
         <img src="${guest.image}" alt="${guest.alt}"/>
      </a>
      <div class="col-6 col-md-9 col-lg-8 py-2">
         <h3 class="guest-name">${guest.name}</h3>
         <h4 class="guest-org">${guest.position}</h4>
         <hr class="guest-hr" />
         <p class="guest-description text-align-left">${guest.description}</p>
      </div>
   </div>`).join('');
}

if (sponsor) {
  sponsor.innerHTML = sponsors.map((sponsor) => `<div class="col-lg text-center">
      <a class="col-md-3 text-center">
         <img src="${sponsor.logo}" width="100px" alt="${sponsor.alt}"/>
      </a>
   </div>`).join('');
}
