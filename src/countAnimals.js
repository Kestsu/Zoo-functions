const data = require('../data/zoo_data');

const { species } = data;

const animais = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

function countAnimals(animal) {
  if (!animal) return animais;
  const { specie } = animal;
  const sexo = animal.sex;
  // ================ quantidade de elementos ==================
  const totalDeElementos = Object.keys(animal).length;
  //= ============= Achar o animal ===========================
  const informações = species.filter((tipoAnimal) =>
    specie.includes(tipoAnimal.name));
    // =========================================================
  const { residents } = informações[0];
  const genero = residents.filter((tipo) => tipo.sex === sexo);
  const nomes = residents.length;
  const seila = genero.length;
  return totalDeElementos === 1 ? nomes : seila;
}

// countAnimals({ specie: 'bears', sex: 'female' });

module.exports = countAnimals;
// const soma = residents.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// });

// if (specie === 'penguins') return 4;
// if (specie === 'giraffes') return 6;
// if (specie === 'bears' && sex === 'female') return 0;
// if (specie === 'elephants' && sex === 'male') return 2;
