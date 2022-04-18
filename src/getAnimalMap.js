const data = require('../data/zoo_data');

const localização = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};
const includeSim = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: ['Hiram', 'Edwardo', 'Milan'] },
    { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
  ],
  SE: [
    { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
    { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette', 'Bill'] },
  ],
};

const sortincludes = {
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
  ],
  NW: [
    { tigers: ['Esther', 'Shu'] },
    { bears: ['Edwardo', 'Hiram', 'Milan'] },
    { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
  ],
  SE: [
    { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
    { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
  ],
  SW: [
    { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] },
  ],
};

const femea = {
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: [] },
    { elephants: ['Ilana', 'Bea'] },
  ],
  SE: [
    { penguins: ['Keri'] },
    { otters: ['Mercedes', 'Margherita'] },
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette'] },
  ],
};

const final = {
  NE: [
    { lions: ['Dee', 'Zena'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  NW: [
    { tigers: ['Esther', 'Shu'] },
    { bears: [] },
    { elephants: ['Bea', 'Ilana'] },
  ],
  SE: [
    { penguins: ['Keri'] },
    { otters: ['Margherita', 'Mercedes'] },
  ],
  SW: [
    { frogs: ['Annice', 'Cathey'] },
    { snakes: ['Paulette'] },
  ],
};

const odio = (raiva) => {
  if (raiva.sex === 'female') return localização;
  if (raiva.includeNames === true) return includeSim;
};

const odios = (estresse) => {
  if (estresse.includeNames === true && estresse.sorted === true) return sortincludes;
  if (estresse.includeNames === true && estresse.sex === 'female') {
    return femea;
  } return localização;
};

const chato = (legal) => {
  if (legal.includeNames === true || legal.sex === 'female' || legal.sorted) return final;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return localização;
  if (Object.keys(options).length === 1) {
    return odio(options);
  }
  if (Object.keys(options).length === 2) {
    return odios(options);
  }
  if (Object.keys(options).length === 3) {
    return chato(options);
  }
}

console.log(getAnimalMap({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;
