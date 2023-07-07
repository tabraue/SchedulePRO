const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    is_manager: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})


const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee
