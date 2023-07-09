const { mail } = require('../../mail/mail');
const { randomPassword } = require('../../validations');
const DepartmentModel = require('../models/department.model')
const EmployeeModel = require('../models/employee.model')
const bcrypt = require("bcrypt");

    

const createEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id // to locate the specific department the company id is needed
        const departmentId = await DepartmentModel.findOne({_id: req.body.department, company: companyId})

        if(!departmentId)
            return res.status(400).send('>> Department not found') 

        const random = await randomPassword()
        const hashPassword = bcrypt.hashSync(random, 10); // password need to be hashed in the db
        const employee = await EmployeeModel.create( {...req.body, password: hashPassword})

        if(!employee) 
            return res.status(400).send('>> Something went wrong creating the employee') 
        //await mail(employee, random)
        
        return res.status(200).json(employee)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}



const getAllEmployees = async (req, res) => {
    try {
      const companyId = res.locals.company._id
      const departments = await DepartmentModel.find({ company: companyId }) // finds all departments from a company
      const departmentIds = departments.map((department) => department._id) // brings all ids to search employees
      const employees = await EmployeeModel.find({ department: { $in: departmentIds } }).populate("department").select("-password")
  
      if (employees.length === 0)
        return res.status(400).send(">> There are no employees registered yet")
  
      return res.status(200).json(employees)
    } catch (error) {
      console.error(error)
      return res.status(500).send(">> Error")
    }
}



const getAllEmployeesByDepartment = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        const departmentChosen = await DepartmentModel.findOne({_id: req.params.departmentId, company: companyId})
        if(!departmentChosen)
            return res.status(400).send(">> There is no such department")

        const employees = await EmployeeModel.find({ department: departmentChosen._id }).populate("department").select("-password")

        if(!employees)
            return res.status(400).send(">> There are no employees in this department yet")

      return res.status(200).json(employees)

    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}




const getOneEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        const departments = await DepartmentModel.find({ company: companyId }) // finds all departments from a company
        const departmentIds = departments.map((department) => department._id) // brings all ids to search employees
        const employee = await EmployeeModel.findOne({_id: req.params.employeeId, department: { $in: departmentIds } }).populate("department").select("-password")
        if(!employee) 
            return res.status(400).send('>> There is no such employee registered')
        return res.status(200).json(employee)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}



const deleteOneEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        const departments = await DepartmentModel.find({ company: companyId }) // finds all departments from a company
        const departmentIds = departments.map((department) => department._id) // brings all ids to search employees
        const employee = await EmployeeModel.findOne({_id: req.params.employeeId, department: { $in: departmentIds } }).populate("department")
        if(!employee) 
            return res.status(400).send('>> There is no such employee registered')
        await EmployeeModel.deleteOne(employee)
        return res.status(200).json('>> Employee deleted')
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const updateOneEmployee = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        const departments = await DepartmentModel.find({ company: companyId }) // finds all departments from a company
        const departmentIds = departments.map((department) => department._id) // brings all ids to search employees
        const employee = await EmployeeModel.findOneAndUpdate(
            {_id: req.params.employeeId, department: { $in: departmentIds }}, 
                req.body, 
                    {new: true}).populate("department").select("-password")
        if(!employee) 
            return res.status(400).send('>> There is no such employee registered')
        return res.status(200).json(employee)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}



module.exports = {
    createEmployee,
    getAllEmployees,
    getOneEmployee,
    deleteOneEmployee,
    updateOneEmployee,
    getAllEmployeesByDepartment
}