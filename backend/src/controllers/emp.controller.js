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
//get the employee by id
export const getEmployeebyId = async(req,res,next) =>{
    const empIdFromRequest = req.params.empId;
    console.log(`Fetching employee with ID: ${empIdFromRequest}`);
    try {
    const employee = await Employee.findOne({where:{emp_id: empIdFromRequest}});
    console.log(empIdFromRequest);
    console.log('Employee found by findByPk:', employee);
    if(!employee){
        return res.status(404).json({message: 'User is not found'});
    }

    res.status(200).json({employee: employee});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
        
    }

   
   

};


//create employee
export const createEmployee = async(req,res,next)=>{
    const {fname,lname,sex,birthdate,email,password,role,position,profilePic,phone, address} = req.body;
    

    try {
    const result = await Employee.create({
        fname: fname,
        lname: lname,
        sex: sex,
        birthdate: birthdate,
        email: email,
       
        password: password,
        role: role,
        position: position, 
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
    const {fname,lname,sex,birthdate,email,password,role,position,profilePic,phone, address} = req.body;
    const empIdFromRequest = req.params.empId;
    try {
     const [numberofAffectedRows] = await Employee.update({
        fname,
        lname,
        sex,
        birthdate,
        email,
        password,
        role,
        position,
        profilePic,
        phone,
        address
     },{
        where:{emp_id:empIdFromRequest},
        returning: true
     });
     if(numberofAffectedRows > 0){
       const updatedEmployee = await Employee.findOne({where:{emp_id:empIdFromRequest}});
       res.status(200).json({message: 'Employee updated successfully', employee:updatedEmployee});
     }else{
        res.status(404).json({message: 'Employee not found'});
        
     }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
        console.error("Error updating employee:", error);

        if (next){
            error.statusCode = error.statusCode || 500;
            return next(error);
        }

        res.status(500).json({error: 'Internal serer error while updating employee'})
    }
};

//delete employee
export const deleteEmployee = async(req,res,next)=>{
    const empIdFromRequest = req.params.empId;
    try {
        const result = await Employee.destroy({where:{emp_id:empIdFromRequest}});
        res.status(200).json({message: 'Employee deleted successfully', employee:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
    }
    
}
