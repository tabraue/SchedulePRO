const DepartmentModel = require('../models/department.model')


const createDepartment = async (req, res) => {
    try {
        // adds itself (by taking the info in res.locals) to body the reference to the company       
        req.body.company = res.locals.company._id  
        const department = await DepartmentModel.create(req.body)
        if(department) 
            return res.status(200).json(department)
        return res.status(400).send('>> Something went wrong creating the department') 
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const getAllDepartments = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // finds departments from only the company logged
        const departments = await DepartmentModel.find({company: companyId})
        if(departments.length === 0) 
            return res.status(400).send('>> There are no departments registered yet')
        return res.status(200).json(departments)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const getOneDepartment = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // finds the choosen department, checking it is from company logged
        const department = await DepartmentModel.findOne({_id: req.params.departmentId, company: companyId})
        if(!department) 
            return res.status(400).send('>> There is no such department registered')
        return res.status(200).json(department)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const deleteOneDepartment = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // deletes the chosen department, checking it is from company logged
        const department = await DepartmentModel.findOne({_id: req.params.departmentId, company: companyId})
        if(!department) 
            return res.status(400).send('>> There is no such department registered')
        await DepartmentModel.deleteOne(department)
        return res.status(200).json('>> Department deleted')
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const updateOneDepartment = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // finds a department from a company and updates its details
        const department = await DepartmentModel.findOneAndUpdate(
            {_id: req.params.departmentId, company: companyId}, 
                req.body, 
                    {new: true})
        if(!department) 
            return res.status(400).send('>> There is no such department registered')
        return res.status(200).json('>> Department updated')
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}




module.exports = {
    createDepartment,
    getAllDepartments,
    getOneDepartment,
    deleteOneDepartment,
    updateOneDepartment
}