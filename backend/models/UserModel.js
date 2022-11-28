import {Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    nim: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    hobi: DataTypes.STRING,
    semester: DataTypes.INTEGER(12)
}, {
    freezeTableName:true
});

export default User;

(async()=> {
    await db.sync();
})();