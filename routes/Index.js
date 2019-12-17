const express = require('express')
const { keycloak } = require('../keycloak');

const router = express.Router()
const userController = require('../controllers/user')


router.get('/token', userController.token)
router.get('/', keycloak.protect(), userController.getUser)

module.exports = router
