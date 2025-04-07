import express, {Router}  from 'express';
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;


//middleware
app.use(express.json());
app.use("/api/auth", authRoute);




app.listen(5001,() =>{
    console.log(`Server is running on PORT ${PORT}`);
})
