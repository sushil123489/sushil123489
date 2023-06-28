// const {number, date, string, types} = require("joi");
const mongoose = require("mongoose");
const admin_details = new mongoose.Schema({
    email: {
        type: String
    },
 
    password: {
        type: String,
        default: ""
    }
}, {timestamps: true})

const admin = mongoose.model("admin", admin_details)
module.exports = admin;
