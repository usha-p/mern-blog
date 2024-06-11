import express from 'express'
import {deleteUser, test,signout, getusers, getUser} from '../controllers/user.controller.js'
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utlis/verifyUser.js';
const router=express.Router();

router.get('/test',test)
router.put('/update/:userId',verifyToken,updateUser)
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout',signout)
router.get('/getusers',verifyToken,getusers)
router.get('/:userId',getUser)
export default router;