const data = require('../data/zoo_data');

const todosAnimais = data.species;
// const idades = todosAnimais.residents.age
// console.log(todosAnimais);

function getAnimalsOlderThan(animal, age) {
  const especie = todosAnimais.find((bicho) => bicho.name === animal);
  const test = especie.residents.every((idade) => idade.age > age);
  return test;
}
// console.log(getAnimalsOlderThan('lions', 1));

module.exports = getAnimalsOlderThan;
