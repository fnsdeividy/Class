import mongoose from 'mongoose'
import  mongoConnection  from'../../../database/connection'

const Comment = new mongoose.Schema({
  id_class:String,
  comment:String,
  date_create:Date,
}, { collection: 'comment', typeKey: '$type', versionKey: false, minimize: false });

const comments = mongoConnection.model("comment", Comment)


export { comments }
