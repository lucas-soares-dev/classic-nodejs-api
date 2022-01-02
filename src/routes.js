const express = require('express');
const router = express.Router();

// controllers
const AuthController = require('./controllers/AuthController');
const UserCotroller = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

// routes
router.get('/ping', (req, res) => {
    res.json({ access: true });
});

router.get('/states', UserCotroller.getStates);

router.post('/user/signin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/user/me', UserCotroller.info);
router.put('/user/me', UserCotroller.edit);

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', AdsController.create);
router.get('/ad/list', AdsController.getList);
router.get('/ad/:id', AdsController.getItem);
router.post('/ad/:id', AdsController.edit);

module.exports = router;