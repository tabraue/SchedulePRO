const DepartmentModel = require("../models/department.model")
const ScheduleModel = require("../models/schedule.model")


const createSchedule = async (req, res) => {
    try {
        // adds itself (by taking the info in res.locals) to body the reference to the company
        //req.body.company = res.locals.company._id
        
        const schedule = await ScheduleModel.create(req.body)

        if(schedule) 
            return res.status(200).json(schedule)
        return res.status(400).send('>> Something went wrong creating the schedule') 
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const getAllSchedules = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        const departments = await DepartmentModel.find({company: companyId})

        if(!departments)
            return res.status(400).send('>> There are no departments') 
 
        const departmentIds = departments.map((department) => department._id)
        const schedules= await ScheduleModel.find({ department: { $in: departmentIds } }).populate({ path: "employee", select: "-password -department" })

        if(schedules)
            return res.status(200).json(schedules)

        return res.status(400).send('>> No schedules yet') 

    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const getOneSchedule = async (req, res) => {
    try {
        const companyId = res.locals.company._id
        // finds the choosen department, checking it is from company logged
        const department = await DepartmentModel.findOne({_id: req.params.departmentId, company: companyId})
        if(!department)
            return res.status(400).send('>> There is no department') 
        const schedule = await ScheduleModel.find({department: req.params.departmentId}).populate("employee")
        
        if(!schedule)
            return res.status(400).send('>> There is no schedule') 

        return res.status(200).json(schedule)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const getOneScheduleByShift = async (req, res) =>{
    try {
        const companyId = res.locals.company._id
        const department = await DepartmentModel.findOne({_id: req.params.departmentId, company: companyId})
        if(!department)
            return res.status(400).send('>> There is no department') 
        const schedule = await ScheduleModel.find({department: req.params.departmentId, shift: req.params.shiftId}).populate("employee")
        if(!schedule)
            return res.status(400).send('>> There is no schedule for this department') 
        return res.status(200).json(schedule)       
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}



const updateOneSchedule = async (req, res) => {
    try {
        const schedule = await ScheduleModel.findOneAndUpdate({_id: req.params.scheduleId}, 
            req.body, {new: true}).populate("employee")
        
        if(!schedule)
            return res.status(400).send('>> There is no schedule') 
        return res.status(200).json(schedule)
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}


const deleteOneSchedule = async (req, res) => {
    try {
        const schedule = await ScheduleModel.findOne({_id: req.params.scheduleId})
        if(!schedule)
            return res.status(400).send('>> There is no schedule')
        await ScheduleModel.deleteOne(schedule)
        return res.status(200).json('>> Schedule deleted')
    } catch (error) {
        console.error(error)
        return res.status(500).send('>> Error')
    }
}



module.exports = {
    createSchedule,
    getAllSchedules,
    getOneSchedule,
    updateOneSchedule,
    deleteOneSchedule,
    getOneScheduleByShift
}