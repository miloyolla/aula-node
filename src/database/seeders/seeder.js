require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedComment = require('./CommentSeeder');
const seedExample = require('./ExampleSeeder');

(async () => {
  try {
    // await seedUser();
    await seedExample();
    await seedComment();


  } catch(err) { console.log(err) }
})();
