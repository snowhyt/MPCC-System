import db from "../utils/db.js";
import { Sequelize, DataTypes } from "sequelize";



const Employee = db.define('employee',{
        id:{
            type: Sequelize.STRING,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        birthdate:{
            type: DataTypes.DATEONLY,
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
        profilePic:{
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        phone:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        address:{
            type: Sequelize.STRING,
            allowNull: false, 
        }

    },
    




);

export default Employee;