import Employee from "../models/employee.model.js"
import express from 'express';
import bcrypt from 'bcryptjs';

export const signup = async(req,res) =>{
    const {fname,lname,sex,birthdate,email,password,role,position,profilePic,phone, address} = req.body;

    try {
        //check if all fields have data
        if(!fname || !lname || !sex || !birthdate || !email || !password || !role || !position || !profilePic || !phone || !address)
            {
                return res.status(400).json({message: "All fields are required"})
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
            return res.status(400).json({messsage: "Password must be more than 6 characters"});
            
        }
    } catch (error) {
        
    }


}

export const login = async(req,res) =>{
    
}
export const logout = async(req,res) =>{
    
}