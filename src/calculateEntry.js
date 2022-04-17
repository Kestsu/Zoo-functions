const data = require('../data/zoo_data');

// prices: {
//   adult: 49.99,
//   senior: 24.99,
//   child: 20.99,
// },

function countEntrants(entrants) {
  // seu código aqui
  const idades = entrants.reduce((accIdade, currPessoa) => {
    if (currPessoa.age < 18) {
      return { adult: accIdade.adult, child: accIdade.child + 1, senior: accIdade.senior };
    } if (currPessoa.age >= 18 && currPessoa.age < 50) {
      return { adult: accIdade.adult + 1, child: accIdade.child, senior: accIdade.senior };
    }
    return { adult: accIdade.adult, child: accIdade.child, senior: accIdade.senior + 1 };
  }, { adult: 0, child: 0, senior: 0 });
  return idades;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const objeto = countEntrants(entrants);
  const adulto = objeto.adult * 49.99;
  const criança = objeto.child * 20.99;
  const idoso = objeto.senior * 24.99;
  return adulto + criança + idoso;
  // console.log(idoso);
}
// calculateEntry([
//   { name: "Lara Carvalho", age: 5 },
//   { name: "Frederico Moreira", age: 5 },
//   { name: "Pedro Henrique Carvalho", age: 5 },
//   { name: "Maria Costa", age: 18 },
//   { name: "Núbia Souza", age: 18 },
//   { name: "Carlos Nogueira", age: 50 },
// ]);
module.exports = { calculateEntry, countEntrants };
