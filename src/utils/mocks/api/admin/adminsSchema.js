const getAdmin = (number) => {
  let schema = {
    id: Math.floor(Math.random() * (+4 - +200)),
    firstName: 'Gary',
    lastName: 'Nigel',
    email: 'garynigel@flec.com',
    phoneNumber: '07929467199',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  schema.id = number;
  schema.firstName = `${schema.firstName} ${number}`;
  schema.lastName = `${schema.lastName} ${number}`;

  return schema;
}

const generateResponse = () => {
  let response = [];

  for (let i=1; i<=11; i++) {
    response.push(getAdmin(i));
  }

  return response;
}

const response = {
  admins: generateResponse(),
  count: 10,
  page: 1,
  limit: 20
}

module.exports = response;
  