import {DataTypes} from 'sequelize'

import { sequelize } from '../database/database.js'

import { Task } from './Task.js'

 export const Project= sequelize.define( 'projects', {


    // ESTOS SON LOS CAMPOS QUE VAN EN LA BASE DE DATOS 
    //   si queremos utilizar esa tabla queresmos exportar  donde la guardamois en una const 
    id: {

        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name: {

        type: DataTypes.STRING
    },
    image: {
        type:DataTypes.STRING
    },
    priority: {

        type: DataTypes.INTEGER
    },
    descripcion: {

        type: DataTypes.STRING
    }
})


// en esta parte tenemos solo definido el esquema del proyecto dondde apartir de este esquema creamosuna tabla




// en esta parte hacemos larelacion de las tablas 


Project.hasMany(Task, {

foreignKey : 'projectId',
 sourceKey : 'id'

})

Task.belongsTo( Project, {

    foreignKey : 'projectId',
     targeId : 'id'
})