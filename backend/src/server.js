import express from 'express';
import dotenv from 'dotenv'
import bodyparser from 'body-parser';
import sequelize from './utils/db.js';
import EmployeeModel from './models/employee.model.js';
import CrudRoutes from './routes/crud.route.js'
import authRoute from './routes/auth.route.js'
import cors from 'cors'


const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};


dotenv.config();
const PORT = process.env.PORT || 5001;


//middlewares
app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cors(corsOptions));





//test routes CRUD
app.get('/',(req,res,next)=>{
    res.send("Hellow world");
})

//crud route
app.use('/employees',CrudRoutes);
app.use('/api/auth', authRoute);
//error handling
app.use((error, req, res, next) =>{ // Added 'next' for completeness, though not strictly used here
    console.error("--- GLOBAL ERROR HANDLER CAUGHT ---"); // More prominent logging
    console.error("Timestamp:", new Date().toISOString());
    console.error("Request URL:", req.originalUrl);
    console.error("Request Method:", req.method);
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Error Status Code:", error.statusCode);
    if (error.data) {
        console.error("Error Data:", error.data);
    }
    console.error("Error Stack:", error.stack); // Log the full stack
    console.error("-----------------------------------");

    const status = error.statusCode || 500;
    
    const message = error.message || "An internal server error occurred.";
    const responseError = { message: message };
    if (error.data) { // If the error object has a 'data' property, include it
        responseError.data = error.data;
    }
    res.status(status).json(responseError);
    
});



//sync database
async function startServer(){
    try {
        await sequelize.sync();
        console.log("Database connected");

        app.listen(PORT,() =>{
            console.log(`Server is running on PORT ${PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to the database:",error);
        
    }
}


startServer();




