
import{Router} from 'express'

const router = Router()

// estanos ultiliza´ndo una parte de express el cual cambiamos "app" por " router" por medio del modulo de router

router.get('/',(req, res) => res.render('index'))

router.get('/about',(req, res) => res.render('about'))

router.get('/contact',(req, res) => res.render('contact'))

// para unir tenemos exportar pordefecto el router

export default router