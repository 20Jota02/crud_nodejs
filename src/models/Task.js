import {DataTypes} from 'sequelize'

import { sequelize } from '../database/database.js'

 export const Task = sequelize.define( 'task', {


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
    done: {

        type: DataTypes.BOOLEAN,
        defaultValue:false,
    },
   
})


// en esta parte tenemos solo definido el esquema del proyecto dondde apartir de este esquema creamosuna tabla