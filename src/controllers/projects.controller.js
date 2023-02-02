// para guardar 
import {Project} from '../models/Project.js'

// para poder crear consultas

// para los error utilizamos try cath 

//listar
 export const getProjects = async (req, res) =>{

    try {
        const proyects = await Project.findAll()

    res.json(proyects)

    } catch (error) {
    return res.status(500).json ({message: error.message});
        
    }
    
}


// solo nos va a listar un projec con el id 
export const getProject = async (req, res) =>{

 try {
    const { id } = req.params;
    const project = await Project.findOne({
         where: {
             id
         }
     });
     if(!project) {
        return res.status(404).json ({message: 'projecto no existe'});
    }
     res.json(project)
 } catch (error) {
    return res.status(500).json ({message: error.message});

 }
}


// crear

 export const createProject = async (req, res) =>{

const {name, priority, descripcion} = req.body
try {
    const newProyect = await Project.create({

        name, 
        
        descripcion,
    
        priority,
    
    });

    res.json(newProyect)
} catch (error) {
    return res.status(500).json ({message: error.message});
}




}

// editar
export const updateProject = async (req, res)=>{
try {
    const { id } = req.params;
    const {  name, priority, descripcion } = req.body;  

const project = await Project.findByPk(id);

project.name = name;
project.priority = priority;
project.descripcion = descripcion;

await project.save();
 
if(!project) {
    return res.status(404).json ({message: 'projecto no existe'});
}
// res.send('el producto se actualizo correctamente ')

res.json(project)
} catch (error) {
    return res.status(500).json ({message: error.message});
    
}
}

// eliminar

export const deleteProject = async (req, res)=>{
    const { id } = req.params;
    try {
        await Project.destroy({
            where : { 

                id,
            },
        });
res.send('el producto se elimino correctamente ')

    } catch (error) {
    return res.status(500).json ({message: error.message});
        
    }
}





// esto es una consulta  a la base de datos asincrona 
// esta guardando un dato entro de la base de datos 