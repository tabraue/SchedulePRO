const mongoose = require("mongoose")
const { DateTime } = require("luxon");

const scheduleSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: () => DateTime.local().toFormat('dd/MM/yyyy')
    },
    shift: {
        type: String,
        enum: ["Morning", "Special", "Evening", "Night", "Off", "Holiday", "Medical"],
        required: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true,
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    }
})


const ScheduleModel = mongoose.model('Schedule', scheduleSchema)

module.exports = ScheduleModel
