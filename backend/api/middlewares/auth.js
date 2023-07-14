const jwt = require("jsonwebtoken");
const CompanyModel = require("../models/company.model");

const checkAuth = async (req, res, next) => {
  jwt.verify(req.headers.token, process.env.JWT_SECRET_PASS, async (err, result) => {
      if (err) 
        { return res.status(403).send(">> Invalid access 1") }

      const company = await CompanyModel.findOne({ email: result.email });
      if (!company) 
        { console.log(company)
          return res.status(403).send(">> Invalid access 2");
        }

      res.locals.company = company;
      next();
    }
  );
};

const checkOwner = async (req, res, next) => {
  try {
    const company = await CompanyModel.findById( res.locals.company._id);
    console.log(company)
    if (!company)
      return res.status(403).send(">> Invalid access");
    
    if (!company.isOwner)
      return res.status(403).send(">> Access denied. Not an owner.");
    
    next()
  } catch (error) {
    console.error(error)
    return res.status(500).send(">> Error")
  }

}

module.exports = {
  checkAuth,
  checkOwner
};
