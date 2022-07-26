import { eventList, guests, sponsors } from './data.js';

const events = eventList.map((event) => `<div class="row col-lg-2 event py-2 gap-1 gap-lg-4 text-center">
      <a class="col-2 col-lg-12 event-icon">
         <img src="${event.icon}"/>
      </a>
      <h2 class="col-3 col-lg-12 event-title"> ${event.title} </h2>
      <p class=" col-6 col-lg-12 event-subtitle px-lg-3"> ${event.subtitle} </p>
   </div>`).join('');

document.querySelector('.main-event').innerHTML = events;

document.querySelector('.guests').innerHTML = guests.map((guest) => `<div class="row col-lg-6">
      <a class="col-6 col-md-3 col-lg-4 guest-image">
         <img src="${guest.image}"/>
      </a>
      <div class="col-6 col-md-9 col-lg-8 py-2">
         <h3 class="guest-name">${guest.name}</h3>
         <h4 class="guest-org">${guest.position}</h4>
         <hr class="guest-hr" />
         <p class="guest-description text-align-left">${guest.description}</p>
      </div>
   </div>`).join('');

document.querySelector('.sponsor').innerHTML = sponsors.map((sponsor) => `<div class="row col-lg-2">
      <a class="col col-md-3 col-lg-4 sponsor-image">
         <img src="${sponsor.logo}" width="100px" alt="${sponsor.alt}"/>
      </a>
   </div>`).join('');
