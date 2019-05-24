let schema = {
  id: Math.floor(Math.random() * (100)),
  firstName: 'Gary',
  lastName: 'Nigel',
  adminTypeId: '123123',
  email: 'garynigel@flec.com',
  phone: '07929467199',
  profilePic: "http://placehold.it/242x242",
  createdAt: new Date(),
  updatedAt: new Date()
}

module.exports = {
  admin: schema
}
  