//Reference to mongoose

const mongoose = require('mongoose');

//Define project schema

var projectSchema = new mongoose.Schema({
        name:{
            type: String,
            required : true
        },
        dueDate:{
            type:Date
        },
        course:{
            type: String,
            required : true
        },
        status:{
            type: String,
            default: 'To-Do'
        }
    })

// Export the schema 

module.exports= mongoose.model('Project',projectSchema);