const express = require('express');
const { employeeSubMit, adminShowEmployeeDetails } = require('../controllers/empSubMitController');
const router = express.Router();

router.post("/empSubmit",employeeSubMit);
router.post("/admin",adminShowEmployeeDetails)

module.exports = router;