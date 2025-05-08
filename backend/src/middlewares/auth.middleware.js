import Employee from "../models/employee.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async(req, res, next) =>{
    try {
        const token = req.cookies.jwt;



        if(!token){
            return res.status(400).json({message: "Unauthorized - No token"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(400).json({message: "Unauthorized - Invalid token"})
        }
        const employee = await Employee.findOne({where:{id:emp_id}}).select("-password");
        
        if(!employee){
            return res.status(400).json({message: "Unauthorized - Employee not found"})
        }
    } catch (error) {
        
    }
}