var mongoose = require("mongoose");

var file_schema_1 = new mongoose.Schema({
  fileName : {
    type : String,
    required : true
  },
  lastModified : {
    type : String,
    required : true
  },
  isSync:{type:String,default:0},
  isNewRecord:{type:String,default:0},
  content_type:String,
  BlobType:String,
  LeaseStatus:String,
  LeaseState:String
},{
  timestamps:{}
})
const file_schema = mongoose.model("file_records", file_schema_1)

module.exports = file_schema