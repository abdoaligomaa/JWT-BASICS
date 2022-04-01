const {login,dashboard}=require('../controllers/main')
const router=require('express').Router()

router.route('/dashboard').get(dashboard)
router.route('/login').post(login)

module.exports=router