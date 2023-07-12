import { api } from "./api.js";

export const createDepartment = async (name, description) => {
    try {
        const res = await api.post("/department/", {
          name: name,
          description: description
        },{
            headers: {
                token: localStorage.getItem('token')
            }});

        return res;
      } catch (error) {
        console.error(error);
        return false;
      }
}

export const showDepartment = async (departmentId) => {
    try {
        const {data} = await api.get(`/department/${departmentId}`,{
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

export const showAllDepartments = async () => {
    try {
        const {data} = await api.get(`/department/`,{
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error(error);
    }
}

export const updateDepartment = async (departmentId) => {
    try {
        const {data} = await api.patch(`/department/${departmentId}`,{},
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


export const deleteDepartment = async (departmentId) => {
    try {
        const {data} = await api.delete(`/department/${departmentId}`,{},
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


//rutas backend
//router.use('/department', require('./department.route')) // DEPARTMENT

//router.post('/', checkAuth, createDepartment) // CREATE DEPARTMENT
//router.get('/:departmentId', checkAuth, getOneDepartment) // SHOWS ONE DEPARTMENT
//router.get('/', checkAuth, getAllDepartments) // SHOW ALL COMPANY'S DEPARTMENTS
//router.patch('/:departmentId', checkAuth, updateOneDepartment) // UPDATE SOMETHING FROM A COMPANY'S DEPARTMENT
//router.delete('/:departmentId', checkAuth, deleteOneDepartment) // DELETE ONE DEPARTMENT