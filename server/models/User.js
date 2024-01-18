/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 21 - MERN Google Book Search
 * 
 * Filename: User.js
 * Date : 1/16/2024 9:27:28 PM
 *******************************************************************/
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const bookSchema = require('./Book');

const userSchema = new Schema(
     {
          username: { type: String, required: true, unique: true, },
          email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Enter a valid email address'], },
          password: { type: String, required: true, },
          savedBooks: [bookSchema],// Array of books
     },
     
     {
          toJSON: { virtuals: true, }, //Required to use virtuals
     }
);

// hash user password
userSchema.pre('save', async function (next) {
     if (this.isNew || this.isModified('password')) {
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
     }
     next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
     return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('bookCount').get(function () {
     return this.savedBooks.length;
});

const User = model('User', userSchema);
module.exports = User;