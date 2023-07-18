const ProfileRouter = require('./profile.routes');
const PostRouter = require('./post.routes');

const Router = require('express').Router();

Router.use('/profile', ProfileRouter);
Router.use('/post', PostRouter);

module.exports = Router;
