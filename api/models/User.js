/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },

    username: {
      type: 'string',
      required: true,
      unique: true,
      alphanumericdashed: true
    },

    password: {
      type: 'string',
      required: true
    },

    approved: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },

    userType: {
      type: 'integer',
      required: true
    },

    expired: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  }
};

