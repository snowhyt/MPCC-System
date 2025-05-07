import {getEmployee, getEmployeebyId, createEmployee, updateEmployee, deleteEmployee} from '../controllers/emp.controller.js';
import express from 'express'

const router = express.Router();


router.get('/', getEmployee);
router.get('/:empId', getEmployeebyId);
router.post('/createEmp', createEmployee);
router.put('/:empId', updateEmployee);
router.delete('/:empId', deleteEmployee);


export default router;


