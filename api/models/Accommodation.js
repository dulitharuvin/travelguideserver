/**
 * Accommodation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
      required: true
    },

    address:{
      type: 'string',
      required: true
    },

    description:{
      type: 'string',
      required: true
    },

    type:{
      type: 'string',
      required: true
    },

    imageurl:{
      type: 'string',
      required: true
    },

    coordinates:{
      type: 'string',
      required: true
    },

    tele1:{
      type: 'string',
      required: true
    },

    tele2:{
      type: 'string',
      required: false
    },

    email:{
      type: 'email',
      required: true
    },

    fbpage:{
      type: 'string'
    },

    weburl:{
      type: 'string'
    }
  }

};

