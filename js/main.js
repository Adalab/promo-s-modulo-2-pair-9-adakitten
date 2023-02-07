'use strict';
/* const section = document.querySelector('.js-new-form');
section.classList.remove('collapsed'); */

const kittenlist = document.querySelector('.js-list');
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  'porte elegante, su patron de color tan caracterisitico y sus ojos de un azul intenso';
const kittenRace1 = 'siamés';

const kittenone = `<li class="card">
          <img class="card_img" src=${kittenImage1} alt="maine-coon-cat" />
          <h3 class="card_title">${kittenName1}</h3>
          <h4 class="card_race">Maine Coon</h4>
          <p class="card_description">${kittenDesc1}</p>
        </li>`;
const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  'Produce fascinacion y curiosidad. Exotico, raro, bello, extraño...hasta con pinta de alienigena han llegadoa  definir a esta razagatuna';

const kittenRace2 = 'Sphynx';
const kittentwo = `<li class="card">
         <img class="card_img" src=${kittenImage2} alt="sphynx-cat" />
          <h3 class="card_title">${kittenName2}</h3>
          <h4 class="card_race">${kittenRace2}</h4>
          <p class="card_description">
            ${kittenDesc2}
          </p>
        </li>`;

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  'Tiene la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en unas de sus señas de identidad ';
const kittenRace3 = 'Maine coon';
const kittenthree = `<li class="card">
          <img class="card_img" src=${kittenImage3} alt="maine-coon-cat" />
          <h3 class="card_title">${kittenName3}</h3>
          <h4 class="card_race">${kittenRace3}</h4>
          <p class="card_description"> ${kittenDesc3}
          </p>
        </li>`;
kittenlist.innerHTML = `${kittenone} ${kittentwo} ${kittenthree}`;

const buttonplus = document.querySelector('.buttonplus');
const formElement = document.querySelector('.js-new-form');
buttonplus.addEventListener('click', () => {
  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove('collapsed');
  } else {
    formElement.classList.add('collapsed');
  }
});

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const newButton= document.querySelector ('.js-btn-add')
newButton.addEventListener('click',(event)=> {
  event.preventDefault();

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
  
  
if (valueDesc === '' || valuePhoto === '' || valueName === '') {
labelMessageError.innerHTML='uy!parece que has olvidado algo';
}
});






