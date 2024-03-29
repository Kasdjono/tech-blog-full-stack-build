const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/post', postRoutes);

router.use('/user', userRoutes);

module.exports = router;
