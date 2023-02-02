import app from "./app.js";
import {sequelize} from "./database/database.js"

// import './models/Project.js'
// import './models/Task.js'

// import {dirname, join} from "path";
// import { fileURLToPath } from "url";

// import indexRouter from './routes/index.js'

 async function main(){
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established successfully.');
        app.listen(3000)
        console.log('server fun el puerto', 3000)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();

 
// const __dirname = dirname(fileURLToPath(import.meta.url))

// app.set('views', join(__dirname, 'views'))
// app.set ('view engine' , 'ejs')

// app.use(indexRouter)


// app.use(express.static(join(__dirname, 'public')))

