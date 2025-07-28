const express = require('express');
const { employeeSubMit } = require('../controllers/empSubMitController');
const router = express.Router();

router.post("/empSubmit",employeeSubMit)

module.exports = router;