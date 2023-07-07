const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CompanyModel = require("../models/company.model");

const signUp = async (req, res) => {
  try {
    const { name, vat, email, password } = req.body;
    const company = await CompanyModel.findOne({ vat });

    if (company) return res.status(400).json(">> Already have an account");

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newCompany = await CompanyModel.create(req.body);
    const token = jwt.sign(
      { email: newCompany.email },
      process.env.JWT_SECRET_PASS
    );

    return res.status(200).json(token);
  } catch (error) {
    console.error(error);
    return res.status(500).send(">> Invalid sign up");
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const company = await CompanyModel.findOne({ email });

    if (!company) return res.status(400).json(">> Email or password incorrect");

    const match = await bcrypt.compareSync(password, company.password);
    if (!match) res.status(400).json(">> Email or password incorrect");

    const token = jwt.sign(
      { email: company.email },
      process.env.JWT_SECRET_PASS,
      { expiresIn: "1y" }
    );

    return res.status(200).json(token);
  } catch (error) {
    console.error(error);
    return res.status(500).send(">> Oops something went wrong loging you in!");
  }
};

module.exports = {
  signUp,
  logIn,
};
