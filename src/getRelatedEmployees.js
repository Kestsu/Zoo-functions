const data = require('../data/zoo_data');

// const { gerentes } = data;
// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  if (
    id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
    || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83'
    || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  ) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const funcionário = ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  if (isManager(managerId) === true) {
    return funcionário;
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

// console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
