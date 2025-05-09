import jwt from "jsonwebtoken";



export const generateToken = (employeeId, res) => {
    const secret = process.env.JWT_SECRET;
    console.log(`[DEBUG] JWT_SECRET in generateToken: '${secret}'`); // Log the secret

    if (!secret) {
      // Throw an error if the secret is missing. This will be caught by the controller's catch block.
      console.error("CRITICAL ERROR: JWT_SECRET is undefined or empty. Cannot sign token. Ensure it's set in the environment.");
      throw new Error("Server configuration error: JWT_SECRET is not defined.");
    }
    const token = jwt.sign({ employeeId }, secret, {
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