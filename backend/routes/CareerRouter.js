const express=require('express')
const router=express.Router()
const userInfo=require('../controller/careerController')

router.post('/',userInfo.postUser)
router.get('/', userInfo.getUser )

exports.router=router

