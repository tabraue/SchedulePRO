const router = require("express").Router();
const { getCompanyDetails, updateCompanyDetails } = require("../controllers/company.controller");
const { checkAuth, checkOwner } = require("../middlewares/auth");

router.get("/", checkAuth, getCompanyDetails);
router.patch('/:companyId', checkAuth, updateCompanyDetails)

module.exports = router;
