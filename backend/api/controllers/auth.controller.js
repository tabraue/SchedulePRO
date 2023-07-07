const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CompanyModel = require('../models/company.model');




const signup = async (req, res) => {

  //const {name, vat, email, password} = req.body

  //if(!vat || !email) return res.status(400).send('>> Already in')

  /*const company = await CompanyModel.find({email: company.email})

  if (company)
    return res.status(400).send('>> Company already registered')
  */
 try {
  const newCompany = new CompanyModel(req.body)
  console.log(newCompany)
  await newCompany.save()

  return res.status(200).send('>> Company created')
 } catch (error) {
  console.error(error)
 }





  /*try {
    
    //req.body.password = bcrypt.hashSync(req.body.password, 10)

    const company = new Company(req.body)
    await company.save()
    console.log(company)

    //const token = jwt.sign({email: company.email})
    return res.status(200).json(">> Sign up success")

  } catch (error) {
    console.error(error)
    return res.status(500).send('>> Invalid sign up.')
  }*/
};


const login = async (req, res) => {
  const {_id, name} = req.body

  if(!_id || !name) return res.status(400).send()

  const company = await CompanyModel.findById(id)

  if (company)
    return res.status(400).send('>> Company already registered')
  
  const newCompany = new Company({_id, name})

  await newCompany.save()

  return res.status(200).send('>> Company created')
    
}


module.exports = {
    signup,
    login
}