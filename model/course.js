//Reference to mongoose

const mongoose = require ('mongoose')

//Define course schema

const courseSchema = new mongoose.Schema ({
    courseCode:{
        type: String,
        required: true
        }
        })

// Export the schema 

module.exports = mongoose.model ('Course', courseSchema)

