import express from "express";
import  ProjectsRouter  from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js"

const app = express();

// middlewares  para recibir datos 

app.use(express.json())
// esto nos permite cada vez que envien un dato json el servidor podra interpretarlo y lo va aguardar en u req.bady
// y cada ves que utilizamos el req.bady voy a poder utiliar los datos que la aplicacion cliente me esta enviando 

app.use(ProjectsRouter)
app.use(tasksRoutes)

export default app;
