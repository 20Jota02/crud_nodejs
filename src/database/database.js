import  Sequelize  from "sequelize";


  export const sequelize =   new Sequelize( 'practica_bd','postgres','root',{
    
    host: 'localhost',
    dialect: 'postgres', 
 })