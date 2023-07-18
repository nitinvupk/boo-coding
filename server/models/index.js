const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/boo-coding', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

class Repository {

  model;
  constructor(db) {
    this.model = db;
  }

  getByQuery = (query, options) => {
    const { findOne, fields, populateFields, sort } = options;
    if (findOne) return this.model.findOne(query).select(fields).populate(populateFields);
    return this.model.find(query).select(fields).populate(populateFields).sort(sort);
  }

  updateByQuery = (findQ, updateQ, tegQ) => this.model.updateMany(findQ, updateQ, tegQ);

  findByIdAndUpdate = (findQ, updateQ, tegQ) => this.model.updateMany(findQ, updateQ, tegQ);

  create = (data) => this.model.create(data);

}

const Post = require('./post.model');
const Profile = require('./profile.model');
const Comment = require('./comment.model');
const Vote = require('./votes.model');

module.exports = {
  mongoose,
  Post: new Repository(Post),
  Profile: new Repository(Profile),
  Comment: new Repository(Comment),
  Vote: new Repository(Vote)
}
