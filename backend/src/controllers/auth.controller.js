import Employee from "../models/employee.model.js"
import express from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/utils.js";

export const signup = async(req,res,next) =>{
    const {fname,lname,sex,birthdate,email,password,role,position,profilePic,phone, address} = req.body;

    try {
        //check if all fields have data
        if(!fname || !lname || !sex || !birthdate || !email || !password || !role || !position || !profilePic || !phone || !address)
            {
               const error = new Error("All fields are required");
                error.statusCode = 400;
                return next(error);
            }
        
        //accepts admin and employee only (accesibility)

        if (role !== 'admin' && role !== 'employee'){
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
        

        //for new employee
        const newEmployee = await Employee.create({
          fname,
          lname,
          sex,
          birthdate,
          email: email.toLowerCase(),
          password: hashedPassword,
          role,
          position, 
          profilePic,
          phone,
          address
        });

        //generate token

        if(newEmployee){
            generateToken(newEmployee.id,res); //generate token and cookie
        }

        //send response
        return res.status(201).json({
            message: "Employee created successfully",
            employee:{
                id: newEmployee.id,
                fname: newEmployee.fname,
                lname: newEmployee.lname,
                sex: newEmployee.sex,
                birthdate: newEmployee.birthdate,
                email: newEmployee.email,
                role: newEmployee.role,
                position: newEmployee.position,
            }
        })

    } catch (error) {
        next(error);
        console.log(error);
    }


}

export const login = async(req,res) =>{
    
}
export const logout = async(req,res) =>{
    
}