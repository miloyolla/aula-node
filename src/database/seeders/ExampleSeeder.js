const User = require("../../models/User");
const faker = require('faker-br');

 const seedExample = async function () {

  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      email: faker.internet.email(),
      name: faker.name.firstName(),
      password: faker.internet.password(10),
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  try {
    await User.sync({ force: true });
    await User.bulkCreate(users);

  } catch (err) { console.log(err); }
}

module.exports = seedExample;
