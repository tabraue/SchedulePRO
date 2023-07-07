const mongoose = require("mongoose")

const scheduleSchema = mongoose.Schema({
    name: {
        type: Date,
        required: true
    },
    shift: {
        type: String,
        enum: ["Morning", "Special", "Evening", "Night", "Off", "Holiday", "Medical"],
        required: true,
    }
})


const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
