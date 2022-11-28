import { Sequelize } from "sequelize";

const db = new Sequelize('mahasiswaisekai','root','', {
    host: 'localhost',
    dialect: 'mysql'
}); 

export default db;