/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'someMysqlServer',
  tableName:'user',
schema:true,
  attributes: {
    fName:{
      type:'string',
      required:true
    },
    lName:{
      type:'string'
    },
    email:{
      type:'string',
      required:true,
      unique: true
    },
    mNumber:{
      type:'integer'
    }
  }
};
