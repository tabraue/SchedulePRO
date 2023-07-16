import { api } from "./api.js";

export const createSchedule = async (date, shift, department, employee) => {
    try {
        await api.post("/schedule/", {
          date: date,
          shift: shift,
          department: department,
          employee: employee
        },{
            headers: {
                token: localStorage.getItem('token')
            }
        });
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
}


export const showScheduleFromDepartment = async (departmentId) => {
    if(departmentId === "" || departmentId === undefined) return false
    try {
        const {data} = await api.get(`/schedule/${departmentId}`,{
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const showScheduleFromDepartmentByShift = async (departmentId, shiftId) => {
    if(departmentId === "" || departmentId === undefined) return false
    try {
        const {data} = await api.get(`/schedule/${departmentId}/shift/${shiftId}`,{
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return false;
    }
}


export const showScheduleFromEmployee = async(employeeId) => {
    if(employeeId === "" || employeeId === undefined) return false
    try {
        const {data} = await api.get(`/schedule/employee/${employeeId}`,{
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return false;
    }
}


export const showAllSchedules = async () => {
    try {
        const {data} = await api.get(`/schedule/`,{
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const updateSchedule = async (scheduleId) => {
    try {
        const {data} = await api.patch(`/schedule/${scheduleId}`,{},
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const deleteSchedule = async (scheduleId) => {
    try {
        const {data} = await api.delete(`/schedule/${scheduleId}`,{},
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
        return false;
    }
}


//router.use('/schedule', require('./schedule.route')) // SCHEDULE


//router.post('/', createSchedule) // CREATES A SCHEDULE ASIGNINING DEPARTMENT & EMPLOYEE
//router.get('/:departmentId',checkAuth, getOneSchedule) // SHOWS THE SCHEDULE FROM 1 DEPARTMENT
//router.get('/',checkAuth, getAllSchedules) // SHOWS ALL SCHEDULES FROM ALL DEPARTMENTS WITH EMPLOYEE INFO POPULATED
//router.patch('/:scheduleId', checkAuth, updateOneSchedule)
//router.delete('/:scheduleId', checkAuth, deleteOneSchedule)
//router.get('/:departmentId/shift/:shiftId', checkAuth, getOneScheduleByShift) //SHOWS ONE SCHEDULE'S DEPARTMENT FILTERED BY SHIFT
//router.get('/:employeeId', checkAuth, getOneScheduleByEmployee)