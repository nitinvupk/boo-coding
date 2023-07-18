const ProfileRouter = require('./profile.routes');
const PostRouter = require('./post.routes');
const LikeRouter = require('./like.routes');

const Router = require('express').Router();

Router.use('/profile', ProfileRouter);
Router.use('/post', PostRouter);
Router.use('/like', LikeRouter);

module.exports = Router;