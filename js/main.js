'use strict';
/* const section = document.querySelector('.js-new-form');
section.classList.remove('collapsed'); */

const kittenlist = document.querySelector('.js-list');





const kittentwo = `<li class="card">
         <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
          <h3 class="card_title">Fiona</h3>
          <h4 class="card_race">Sphynx</h4>
          <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
            hasta con pinta de alienígena han llegado a definir a esta raza
            gatuna que se caracteriza por la «ausencia» de pelo.
          </p>
        </li>`;

const kittenthree = `<li class="card">
          <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
          <h3 class="card_title">Cielo</h3>
          <h4 class="card_race">Maine Coon</h4>
          <p class="card_description">
            Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
          </p>
        </li>`;
kittenlist.innerHTML = `${kittenone} ${kittentwo} ${kittenthree}`;


const kittenImage1 = '<img src= "https://dev.adalab.es/gato-siames.webp" />';

const kittenName1='Anastacio';

const kittenDesc1= 'porte elegante, su patron de color tan caracterisitico y sus ojos de un azul intenso';

const kittenRace1 = 'siamés';

const kittenImage2 = '<img src="https://dev.adalab.es/sphynx-gato.webp" />';

const kittenName2='Fiona';

const kittenDesc2= 'Produce fascinacion y curiosidad. Exotico, raro, bello, extraño...hasta con pinta de alienigena han llegadoa  definir a esta razagatuna';

const kittenRace2 = 'Sphynx';

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp"/>';

const kittenName3='Cielo';

const kittenDesc3= 'Tiene la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en unas de sus señas de identidad ';

const kittenRace3 = 'Maine coon';

const kittenOne.innerHTML = `${kittenImage1} ${kittenName1} ${kittenDesc1} ${kittenRace1}`;




