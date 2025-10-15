const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else {
    return `Greetings ${person.name}, how have you been lately?`;
  }
};

const haveBirthday = (person) => {
  age = person.age += 1;
  return person;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
  return person;
};

const carMaker = (name, maker, year) => {
  let car = {
    name,
    year,
    maker,
    needsOilChange: false
  };
  return car;
};

const weAreNotFriends = (person) => {
  let notFriends = person.friends.pop();
  return notFriends;
};

const listHobbies = (person) => {
  person.hobbies.forEach(hobby => {
    console.log(`${person.name} likes ${hobby}.`);
  });
};

const getNextOpponent = (team) => {
  if (!team.matches || team.matches.length === 0) {
    return null;
  }
  return team.matches[0].teamName;
};

const listAllKeys = (object) => {
  return Object.keys(object);
};

const listAllValues = (object) => {
  return Object.values(object);
};

const convertToMatrix = (user) => {
  if (user.length === 0) {
    return [];
  }

  let matrix = [];
  const keyValues = Object.keys(user[0]);
  matrix.push(keyValues);

  for (const u of user) {
    const row = keyValues.map(key => u[key]);
    matrix.push(row);
  }

  return matrix;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
