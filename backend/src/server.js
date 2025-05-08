import express, {Router}  from 'express';
import dotenv from 'dotenv'
import bodyparser from 'body-parser';
import sequelize from './utils/db.js';
import EmployeeModel from './models/employee.model.js';
import CrudRoutes from './routes/crud.route.js'
import authRoute from './routes/auth.route.js'


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;


//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();

});


//test routes CRUD
app.get('/',(req,res,next)=>{
    res.send("Hellow world");
})

//crud route
app.use('/employees',CrudRoutes);
app.use('/api/auth', authRoute);
//error handling
app.use((error, req,res,next) =>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data
    res.status(status).json({message: message});
    
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



// app.use(express.json());
// app.use("/api/auth", authRoute);




// app.listen(5001,() =>{
//     console.log(`Server is running on PORT ${PORT}`);
// })
