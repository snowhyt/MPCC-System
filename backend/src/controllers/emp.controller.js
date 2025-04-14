import Employee from "../models/employee.model.js";


//CRUD Controllers


//get all users

export const getEmployee = async(req,res,next) =>{
    try {
        const employees =await Employee.findAll();
        res.status(200).json({employees: employees});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
        
    }
};
//get all the user by id
export const getEmployeebyId = async(req,res,next) =>{
    const empId = req.params.employeeId;
    
    try {
    const employee = Employee.findByPk(employeeId);
    if(!employee){
        return res.status(404),json({message: 'User is not found'});
    }

    res.status(200).json({employee: employee});
    } catch (error) {
        console.log(error);
        res.status(500),json({error: 'Internal server error'});
        
    }
}