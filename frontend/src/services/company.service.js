import { api } from "./api.js";

export const companyDetails = async () => {
    try {
        const {data} = await api.get('/company/', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error)
        return false
    }
}

export const updateDetails = async (companyId) => {
    try {
        const {data} = await api.patch(`/company/${companyId}`, {},{
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error)
        return false
    }
}



//rutas company
//router.use('/company', require('./company.route')) // COMPANY


//router.get("/", checkAuth, getCompanyDetails);
//router.patch('/:companyId', checkAuth, updateCompanyDetails)
