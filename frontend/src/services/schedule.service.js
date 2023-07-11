import { api } from "./api.js";

export const createSchedule = async (date, shift, department, employee) => {
    try {
        await api.post("/schedule/", {
          date: date,
          shift: shift,
          department: department,
          employee: employee
        });
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
}


export const showScheduleFromDepartment = async (departmentId) => {
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