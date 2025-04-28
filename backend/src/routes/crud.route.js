import {getEmployee, getEmployeebyId, createEmployee, updateEmployee, deleteEmployee} from '../controllers/emp.controller.js';
import express from 'express'

const router = express.Router();


router.get('/', getEmployee);
router.get('/:empId', getEmployeebyId);
router.post('/createEmp', createEmployee);
router.put('/updateEmp', updateEmployee);
router.delete('/deleteEmp', deleteEmployee);


export default router;


