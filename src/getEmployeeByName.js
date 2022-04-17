const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const resultado = employees.filter(
    (nome) =>
      employeeName.includes(nome.firstName) || employeeName.includes(nome.lastName),
  );
  return resultado[0];
}

// console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
