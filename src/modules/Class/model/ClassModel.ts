import mongoose from 'mongoose'
import  mongoConnection  from'../../../database/connection'

const Class = new mongoose.Schema({
  name:String,
  description:String,
  video:String,
  total_comments:Number,
  date_init:Date,
  date_end:Date,
  date_create:Date,
  date_update:Date,
}, { collection: 'class', typeKey: '$type', versionKey: false, minimize: false });

const classes = mongoConnection.model("class", Class)


export { classes }
