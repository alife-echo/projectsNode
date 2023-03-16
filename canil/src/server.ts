import express,{Request,Response} from "express";
import routersMain from './routers/index'
import mustache from 'mustache-express'
import path from "path";
import dotenv from 'dotenv'

dotenv.config()
const server = express()

server.use(express.static(path.join(__dirname,'../public')))
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'./views'))
server.engine('mustache',mustache())

server.use(routersMain)

server.use(express.urlencoded({extended:true}))

server.use((req:Request,res:Response)=>{
     res.status(404).render('pages/notFound')
})
server.listen(process.env.PORT)
