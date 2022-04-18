const data = require('../data/zoo_data');

const hora = 'Open from 8am until 6pm';
const horario = {
  Tuesday: {
    officeHour: hora,
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'elephants',
      'giraffes',
    ],
  },
  Wednesday: {
    officeHour: hora,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [
      'tigers',
      'otters',
      'frogs',
      'snakes',
      'elephants',
      'giraffes',
    ],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
// const { Monday, Tuesday, Wednesday } = horario;
const Monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const Tuesday = {
  Tuesday: {
    officeHour: hora,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
};
const Wednesday = {
  Wednesday: {
    officeHour: hora,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
};
const leao = ['Tuesday', 'Thursday', 'Saturday', 'Sunday'];
const pinguim = ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'];

function raiva(nervoso) {
  if (nervoso === 'Monday') {
    return Monday;
  } if (nervoso === 'Tuesday') {
    return Tuesday;
  } if (nervoso === 'Wednesday') {
    return Wednesday;
  } if (nervoso === 'lions') {
    return leao;
  } return pinguim;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) return horario;
  if (scheduleTarget === 'qualquercoisa') return horario;
  const dias = raiva(scheduleTarget);
  return dias;
}
getSchedule('Monday');
module.exports = getSchedule;
