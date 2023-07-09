import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import "./SignUp.css";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { companySignUp } from "../../services/auth.service";

function SignUpmui() {
  const [name, setName] = useState('')
  const [vat, setVat] = useState('')
  const [email, setEmail] = useState('')
 // const [emailCheck, setEmailCheck] = useState('')
  const [password, setPassword] = useState('')

  const handleName = (name) => {setName(name)}

  const handleVat = (vat) => {setVat(vat)}

  const handleEmail = (email) => {setEmail(email)}

  const handlePass = (pass) => {setPassword(pass)}

  const handleSignUp = async () =>{
    console.log(name.target.value)
    const signUpSuccess = await companySignUp(name.target.value, vat.target.value, email.target.value, password.target.value);
    if (signUpSuccess) {
      console.log("Sign up successful");
    } else {
      console.log("Sign up failed");
    }
  
  }


  return (
    <>
      
      <Box
        sx={{
          minWidth: 275,
          display: "flex",
          margin: "auto",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <div className="content"> 
        <Card>
          <CardContent>
            <div className="name">
                <TextField 
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                  required
                  onChange={handleName}
                  style={{margin:20, width: 500}}
                />
            </div>
            <div className="vat">
              <TextField
                id="outlined-basic"
                label="VAT"
                variant="outlined"
                required
                onChange={handleVat}
                style={{margin:20, width: 500}}
              />
            </div>
            <div className="email">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              onChange={handleEmail}
              style={{margin:20, width: 500}}
            />
            </div>
{/*             <TextField
              id="outlined-basic"
              label="Confirm Email"
              variant="outlined"
              required
            /> */}
            <div className="pass">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              onChange={handlePass}
              style={{margin:20, width: 500}}
            />
            </div>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonCustom text="Sign Up" onClick={handleSignUp}/>
          </CardActions>
        </Card>
        </div>
      </Box>
     
    </>
  );
}

export default SignUpmui;
/*

        <Box
  sx={{

  }}
>
  <Grid container spacing={4} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={10} md={8} lg={6} style={{ backgroundColor: 'blue' }}>
      a
    </Grid>
    <Grid item xs={12} sm={10} md={8} lg={6} style={{ backgroundColor: 'green' }}>
      b
    </Grid>
    <Grid item xs={12} sm={10} md={8} lg={6} style={{ backgroundColor: 'pink' }}>
      c
    </Grid>
    <Grid item xs={12} sm={10} md={8} lg={6} style={{ backgroundColor: 'yellow' }}>
      d
    </Grid>
    <Grid item xs={12} sm={10} md={8} lg={6} style={{ backgroundColor: 'brown' }}>
      e
    </Grid>
  </Grid>
</Box>
*/
