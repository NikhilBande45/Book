import express from 'express'
const router = express.Router()
import { signUpUser , loginUser } from '../controller/user_controller.js'

router.route('/signup').post(signUpUser);
router.route('/login').post(loginUser)
export default router;
