import jwt from "jsonwebtoken";



export const generateToken = (employeeId, res) => {



    const token = jwt.sign({employeeId}, process.env.JWT_SECRET,{
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //prevent XS attacks cross-site scriptig attacks
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        
    });


    return token;
}