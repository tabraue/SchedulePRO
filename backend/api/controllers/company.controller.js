const CompanyModel = require("../models/company.model");


const getCompanyDetails = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        const company = await CompanyModel.findOne({_id: companyId}).select("-password")
        if(!company)
            return res.status(400).send('>> There is no such company')
        return res.status(200).json(company)
    } catch (error) {
        console.error(error)
        return res.status(500).send(">> Error")
    }
}


const updateCompanyDetails = async (req, res) => {
    try {
        const comp = res.locals.company._id
        console.log(comp.toString())
        console.log(req.params.companyId)
        
        if(comp.toString() !== req.params.companyId)

            return res.status(400).send('>> Error')
        const company = await CompanyModel.findOneAndUpdate(
            {_id: req.params.companyId}, 
            req.body, {new: true}).select("-password")

            console.log(company)
        if(!company)
            return res.status(400).send('>> There is no such company')     
        return res.status(200).json(company)
    } catch (error) {
        console.error(error)
        return res.status(500).send(">> Error")
    }
}



module.exports =  {
    getCompanyDetails,
    updateCompanyDetails
}