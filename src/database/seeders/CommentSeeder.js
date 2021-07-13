const Comment = require("../../models/Comment");
const User = require("../../models/User");
const faker = require('faker-br');

 const seedComment = async function () {
   try {
     await Comment.sync({ force: true });
     const comments = [];
     const users = await User.findAll();

     for (let i = 0; i < 10; i++) {
       let comment = await Comment.create({
         description: faker.lorem.text(),
         createdAt: new Date(),
         updatedAt: new Date()
       });
       let user = await User.findByPk(i);
       comment.setUser(user);
     }

  } catch (err) { console.log(err); }
}

module.exports = seedComment;
