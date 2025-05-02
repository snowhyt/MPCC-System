import db from "../utils/db.js";
import { Model, DataTypes } from "sequelize";
import nanoid from "nanoid";



const Employee = db.define('employee',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex:{
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false,
        },
        birthdate:{
            type: DataTypes.DATEONLY,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        emp_id:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => nanoid(),
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        role:{
            type: DataTypes.ENUM('admin', 'employee'),
            allowNull: false,
        },
        position:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePic:{
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        phone:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true, 
        }
    },
    {
        sequelize: db,
        modelName: 'Employee',
        tableName: 'employees',
    });

export default Employee;