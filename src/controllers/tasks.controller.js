

import { Task } from "../models/Task.js";




// listar 
export const getTasks = async (req, res)=>{
    try {
        const tasks = await Task.findAll()

    res.json(tasks)

    } catch (error) {
    return res.status(500).json ({message: error.message});
        
    }

}



// solo nos va a listar un projec con el id 
export const getTask = async (req, res) =>{

    try {
       const { id } = req.params;
       const task = await Task.findOne({
            where: {
                id
            }
        });
        if(!task) {
           return res.status(404).json ({message: 'projecto no existe'});
       }
        res.json(task)
    } catch (error) {
       return res.status(500).json ({message: error.message});
   
    }
   }

// crear 

export const createTasks = async (req, res) =>{

    const {name, done } = req.body
    try {
        const newTask = await Task.create({
    
            name, 
              done,
        
        });
    
        res.json(newTask)
    } catch (error) {
        return res.status(500).json ({message: error.message});
    }
     
    }


    // editar
    export const updateTasks = async (req, res)=>{
        try {
            const { id } = req.params;
            const {  name, done } = req.body;  
        
        const task = await Task.findByPk(id);
        
        task.name = name;
        task.done = done;
       
        
        await task.save();
         
        if(!task) {
            return res.status(404).json ({message: 'projecto no existe'});
        }
        // res.send('el producto se actualizo correctamente ')
        
        res.json(task)
        } catch (error) {
            return res.status(500).json ({message: error.message});
            
        }
        }



        // eliminar

export const deleteTasks = async (req, res)=>{
    const { id } = req.params;
    try {
        await Task.destroy({
            where : { 

                id,
            },
        });
res.send('el producto se elimino correctamente ')

    } catch (error) {
    return res.status(500).json ({message: error.message});
        
    }
}