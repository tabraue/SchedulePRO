import { api } from "./api.js";

export const sendEmail = async (emailAddresses, shifts) => {

    try {
        await api.post(`/email`, {
            emails: emailAddresses,
            sh: shifts,
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
