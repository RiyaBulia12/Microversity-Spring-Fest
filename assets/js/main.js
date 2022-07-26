import { eventList, guests } from './data.js';

const events = eventList.map((event) => `<div class="row col-lg-2 event py-3 gap-1">
      <a class="col-2 col-lg-12 event-icon">
         <img src="${event.icon}"/>
      </a>
      <h2 class="col-3 col-lg-12 event-title"> ${event.title} </h2>
      <p class=" col-6 col-lg-12 event-subtitle"> ${event.subtitle} </p>
   </div>`).join('');

document.querySelector('.main-event').innerHTML = events;

document.querySelector('.guests').innerHTML = guests.map((guest) => `<div class="row col-lg-6 ps-4 pb-4">
      <a class="col-5 col-md-3 col-lg-4 guest-image">
         <img src="${guest.image}"/>
      </a>
      <div class="col-7 col-md-9 col-lg-8 p-2">
         <h3 class="guest-name">${guest.name}</h3>
         <h4 class="guest-org">${guest.position}</h4>
         <hr class="guest-hr" />
         <p class="guest-description text-align-left">${guest.description}</p>
      </div>
   </div>`).join('');

// const partners = [{
//   logo: 'assets/img/speaker_01.png',
//   alt: '',
// }];

// document.querySelector('.sponsors').innerHTML = partners.map((partner) => `<div class="row col-lg-6">
//       <a class="col col-md-3 col-lg-4 sponsor-image">
//          <img src="${partner.logo}"/>
//       </a>
//    </div>`).join('');
