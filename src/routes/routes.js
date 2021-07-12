const { Router } = require('express');
const UserController = require('../controllers/UserController');
const router = Router();


router.post('/users', UserController.create);
router.get('/users', UserController.index);
router.put('/follow/:id', UserController.follow);
router.put('/unfollow/:id', UserController.unfollow);

router.get('/listFollowing/:id', UserController.listFollowing);
router.get('/listFollowers/:id', UserController.listFollowers);


module.exports = router;
