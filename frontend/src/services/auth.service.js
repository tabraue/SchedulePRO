import { api } from "./api.js";

// ONLY COMPANIES CAN SIGN UP
export const companySignUp = async (name, vat, email, password) => {
    try {
      await api.post("/auth/signup", {
        name: name,
        vat: vat,
        email: email,
        password: password,
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
};


// at this moment ONLY COMPANIES CAN LOG IN
export const companyLogIn = async (email, password) => {
  try {
    const {data: token} = await api.post('/auth/login', 
      {email, 
      password}
    )
    localStorage.setItem('token', token)
    return true
  } catch (error) {
    console.log(error)
    return false;
  }
}
