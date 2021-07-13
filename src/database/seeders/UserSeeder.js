const User = require("../../models/User");
const faker = require('faker-br');

 const seedUser = async function () {
   try {
     await User.sync({ force: true });
     const users = [];

     for (let i = 0; i < 10; i++) {

      let user = await User.create({
        email: faker.internet.email(),
        name: faker.name.firstName(),
        password: faker.internet.password(10),
        createdAt: new Date(),
        updatedAt: new Date()
      });

      if(i>1){
        let userFollowed = await User.findByPk(i-1);
        user.addFollowing(userFollowed);
      }

    }

  } catch (err) { console.log(err +'!'); }
}

module.exports = seedUser;
