/**
 * Attraction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    city: {
      type: 'string',
      required: true
    },

    rating: {
      type: 'float',
      required: true,
      max: 5,
      min: 0
    },

    imageurl: {
      type: 'string',
      required: false
    },

    expired: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    }
  }
};

