const jwt = require("jsonwebtoken");
const CompanyModel = require("../models/company.model");

const checkAuth = async (req, res, next) => {
  jwt.verify(req.headers.token, process.env.JWT_SECRET_PASS, async (err, result) => {
      if (err) return res.status(403).send(">> Invalid access");

      const company = await CompanyModel.findOne({ email: result.email });
      if (!company) return res.status(403).send(">> Invalid access");

      res.locals.company = company;
      next();
    }
  );
};

module.exports = {
  checkAuth,
};
