import Employee from "../models/employee.model.js"
import express from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/utils.js";

//SIGNUP
export const signup = async(req,res,next) =>{
    console.log("Signup request received");
    const {fname,lname,mname,sex,birthdate,email,password,role,position,profilePic,phone, address} = req.body;

    try {
        //check if all fields have data
        if(!fname || !lname || !sex || !birthdate || !email || !password || !role || !position || !phone || !address)
            {
            const error = new Error("All fields are required");
                error.statusCode = 400;
                return next(error);
            }
        
        //accepts admin and employee only (accessibility)

        if (role !== 'admin' && role !== 'staff'){
            return res.status(400).json({message: "Invalid role. Choose the right role"});    
        }

        //phone only accepts 11 digits
        if(phone.length !== 11){
            return res.status(400).json({message: "Invalid phone number"});

        }

        //password must be more than 6 characters
        if(password.length < 6){
            const error = new Error("Password must be at least 6 characters long.");
            error.statusCode = 400;
            return next(error);
        }

        //find any duplicated records
        const existingEmployee = await Employee.findOne({ where: { email: email.toLowerCase() } }); // Check against lowercase email

        if (existingEmployee){
            const error = new Error("Email already exists.");
            error.statusCode = 400;
            return next(error);
        }


        //hashing password using bcrypt

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${email}`;
        //for new employee

        const newEmployee = await Employee.create({
            fname,
            lname,
            mname,
            sex: sex.toLowerCase(),
            birthdate,
            email: email.toLowerCase(),
            password: hashedPassword,
            role,
            position, 
            phone,
            address,
            profilePic : sex === "male" ? boyProfilePic : girlProfilePic
        });

        //generate token

        if(newEmployee){
            generateToken(newEmployee.id,res); //generate token and cookie
        }

        //send response
        return res.status(201).json({
            message: "Employee created successfully",
            employee:{
                emp_id: newEmployee.emp_id,
                id: newEmployee.id,
                fname: newEmployee.fname,
                lname: newEmployee.lname,
                mname: newEmployee.mname,
                sex: newEmployee.sex,
                birthdate: newEmployee.birthdate,
                email: newEmployee.email,
                role: newEmployee.role,
                position: newEmployee.position,
            }
        })

    } catch (error) {
        next(error);
        console.log("Error in login Controller".message);
        res.status(500).json({message: "Internal server error"});
            
    }


}


//LOGIN
export const login = async(req,res) =>{
    const {emp_id, password} = req.body;
  
    
    try {
        //to check if all fields is inputted
        if (!emp_id || !password){
            return res.status(400).json({message: "All fields are required"});
         }
        
         //check is current employee is not in the database
         const LoginEmployee = await Employee.findOne({where: {emp_id: emp_id}});
        
         if (!LoginEmployee){
            return res.status(404).json({message: "Employee not found"});

         }

         //password validation

         const isPasswordCorrect = await bcrypt.compare(password, LoginEmployee.password);

        if (!isPasswordCorrect){
            return res.status(401).json({message: "Invalid password"});

        }


        //generate token
        generateToken(LoginEmployee.id,res);

        //send response
        res.status(200).json({
            message: "Login successful",
            employee:{
                id: LoginEmployee.id,
                fname: LoginEmployee.fname,
                lname: LoginEmployee.lname,
                mname: LoginEmployee.mname,
                sex: LoginEmployee.sex,
                birthdate: LoginEmployee.birthdate,
                email: LoginEmployee.email,
                role: LoginEmployee.role,
                position: LoginEmployee.position,
                phone: LoginEmployee.phone,
                address: LoginEmployee.address
            }
        })
        
} catch(error) {
    console.log("Error in login Controller".message);
    res.status(500).json({message: "Internal server error"});
        
    }
};




//LOGOUT
export const logout = async(req,res) =>{
    try {
        res.cookie("jwt","" ,{maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error (Logout)"});
        
    
    }
}