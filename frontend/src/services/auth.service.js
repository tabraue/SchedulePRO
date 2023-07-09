import { api } from './api.js'

export const companySignUp = async (name, vat, email, password) => {
    try {
        console.log(name, vat, email, password)
        return ''
    } catch (error) {
        console.error(error)
        return false
    }
}