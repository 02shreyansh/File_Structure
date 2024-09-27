import express from "express"
import {newUser} from '../Controllers/userController.js'
const router=express.Router();
router.get('/new',newUser)

export default router