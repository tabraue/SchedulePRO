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


// rutas backend /auth
//router.post('/signup', signUp)
//router.post('/login', logIn)
