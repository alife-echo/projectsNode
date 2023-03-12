import { Request,Response } from "express";
import { AnimalsSpec,Title,Imgs } from "../models/Animals";
export const Home = ((req:Request,res:Response)=>{

     res.render('pages/index',{
            banner:{
                 title:Title.home,
                 background:Imgs.home,
                 
            },        
            AnimalsSpec
     })
})
export const dogsPage = ((req:Request,res:Response)=>{

    res.render('pages/index',{
        banner:{
            title:Title.dogs,
            background:Imgs.dogs,
          
       }
    })
})
export const catsPage = ((req:Request,res:Response)=>{
    res.render('pages/index',{
        banner:{
            title:Title.cat,
            background:Imgs.cat,
          
       }
      
    })
})

export const fishPage = ((req:Request,res:Response)=>{
    res.render('pages/index',{
        banner:{
            title:Title.fish,
            background:Imgs.fish,
          
       }
    })
})
