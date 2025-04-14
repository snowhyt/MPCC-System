import db from "../utils/db.js";
import { Sequelize } from "sequelize";



const Employee = db.define('employee',{
    id:{
        primaryKey: true,
        fname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        emp_id:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        role:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        profilepicture:{
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        phone:{
            type: Sequelize.STRING,
            allowNull: false,
        },

    },
    




});

export default Employee;