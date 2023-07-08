const DepartmentModel = require('../models/department.model')
const EmployeeModel = require('../models/employee.model')
const bcrypt = require("bcrypt");


const createEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id // to locate the specific department the company id is needed

        const departmentId = await DepartmentModel.findOne({_id: req.body.department, company: companyId})

        if(!departmentId)
            return res.status(400).send('>> Department not found') 

        req.body.password = bcrypt.hashSync(req.body.password, 10); // password need to be hashed in the db
        const employee = await EmployeeModel.create(req.body)

        if(!employee) 
            return res.status(400).send('>> Something went wrong creating the employee') 

        return res.status(200).json(employee)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


/*

const getAllEmployees = async (req, res) => {
    try {
        companyId = res.locals.company._id
        // finds departments from only the company logged
        const departments = await DepartmentModel.find({company: companyId})
        if(!departments) 
            return res.status(400).send('>> There are no departments registered yet')
        return res.status(200).json(departments)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const getOneEmployee = async (req, res) => {
    try {
        companyId = res.locals.company._id
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


const deleteOneEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // deletes the chosen department, checking it is from company logged
        const department = await DepartmentModel.findOne({_id: req.params.departmentId, company: companyId})
        if(!department) 
            return res.status(400).send('>> There is no such department registered')
        await DepartmentModel.deleteOne(department)
        return res.status(200).send('>> Department deleted')
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const updateOneEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // finds a department from a company and updates its details
        const department = await DepartmentModel.findOneAndUpdate(
            {_id: req.params.departmentId, company: companyId}, 
                req.body, 
                    {new: true})
        if(!department) 
            return res.status(400).send('>> There is no such department registered')
        return res.status(200).send('>> Department updated')
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}



*/






module.exports = {
    createEmployee,
    
}