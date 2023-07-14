import { api } from "./api.js";

export const createEmployee = async (name, last_name, is_manager, email, department, position) => {
    try {
        await api.post("/employee/", {
          name: name,
          last_name: last_name,
          is_manager: is_manager,
          email: email,
          department: department,
          position: position
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

export const showEmployee = async (employeeId) => {
    try {
        const {data} = await api.get(`/employee/${employeeId}`,{
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


export const showAllEmployees = async () => {
    try {
        const {data} = await api.get(`/employee/`,{
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

export const showEmployeesByDepartment = async (departmentId) => {
    try {
        const {data} = await api.get(`/employee/department/${departmentId}`,{
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

export const updateEmployee = async (employeeId) => {
    try {
        const {data} = await api.patch(`/employee/${employeeId}`,{},
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


export const deleteEmployee = async (employeeId) => {
    try {
        const {data} = await api.delete(`/employee/${employeeId}`,
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

//router.use('/employee', require('./employee.route')) // EMPLOYEE

//router.post('/', checkAuth, createEmployee) // CREATE AN EMPLOYEE AND ADD IT TO ITS DEPARTMENT
//router.get('/:employeeId', checkAuth, getOneEmployee) // SHOWS ONE EMPLOYEE
//router.get('/department/:departmentId', checkAuth, getAllEmployeesByDepartment) // SHOWS ALL EMPLOYEES FROM A DEPARTMENT
//router.get('/', checkAuth, getAllEmployees) // SHOWS ALL EMPLOYEES
//router.delete('/:employeeId', checkAuth, deleteOneEmployee) // DELETES ONE EMPLOYEE
//router.patch('/:employeeId', checkAuth, updateOneEmployee) // UPDATES SOME DETAILS INCLUDING UPDATING DEPARTMENT!