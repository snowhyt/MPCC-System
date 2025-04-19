import Employee from "../models/employee.model.js";


//CRUD Controllers for employee 


//get employee users

export const getEmployee = async(req,res,next) =>{
    try {
        const employees =await Employee.findAll();
        res.status(200).json({employees: employees});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
        
    }
};
//get all the employee by id
export const getEmployeebyId = async(req,res,next) =>{
    const employeeId = req.params.emp_Id;
    
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

    
};


//create employee
export const createEmployee = async(req,res,next)=>{
    const {fname,lname,gender,birthdate,email,emp_id,password,role,profilePic,phone, address} = req.body;
try {
    const result = await Employee.create({
        fname: fname,
        lname: lname,
        gender: gender,
        birthdate: birthdate,
        email: email,
        emp_id: emp_id,
        password: password,
        role: role, 
        profilePic: profilePic,
        phone: phone,
        address: address
    });
  res.status(201).json({message: 'Employee created successfully', employee:result});

    
} catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal server error'});
    
}
    
}


//update employee
export const updateEmployee = async(req,res,next)=>{
    const {fname,lname,gender,birthdate,email,emp_id,password,role,profilePic,phone, address} = req.body;
    const employeeId = req.params.emp_id;
    try {
        const result = await Employee.update({
            fname: fname,
            lname: lname,
            gender: gender,
            birthdate: birthdate,
            email: email,
            emp_id: emp_id,
            password: password,
            role: role, 
            profilePic: profilePic,
            phone: phone,
            address: address
        },{where:{id:employeeId}});
        res.status(200).json({message: 'Employee updated successfully', employee:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
};

//delete employee
export const deleteEmployee = async(req,res,next)=>{
    const employeeId = req.params.emp_id;
    try {
        const result = await Employee.destroy({where:{id:employeeId}});
        res.status(200).json({message: 'Employee deleted successfully', employee:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
    }
    
}
