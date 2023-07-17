import { api } from "./api.js";

export const sendEmail = async (employee, schedule) => {
    console.log(schedule)
    try {
        await api.post(`/email`, {
            employee: employee.email,
            schedule: schedule.toString()
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