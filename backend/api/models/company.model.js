const mongoose = require("mongoose")

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vat: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
    },
    sector: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isOwner: {
        type: Boolean,
        default: true
    },
    
})


const CompanyModel = mongoose.model('Company', companySchema)


module.exports = CompanyModel
