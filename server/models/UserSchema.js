const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  books: [
    {
      bookID: String,
      bookmarks: [
        {
          title: String,
          chapter: String,
          location: String
        }
      ]
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
