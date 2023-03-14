import { Request,Response } from "express";
import { AnimalsSpec,Title,Imgs,AnimalsFunctions } from "../models/Animals";
export const Home = ((req:Request,res:Response)=>{

     res.render('pages/index',{
            banner:{
                 title:Title.home,
                 background:Imgs.home,
                 
            },        
            AnimalsSpec:AnimalsFunctions.getAll()
     })
})
export const dogsPage = ((req:Request,res:Response)=>{

    res.render('pages/index',{
        banner:{
            title:Title.dogs,
            background:Imgs.dogs,
       },
       AnimalsSpec:AnimalsFunctions.getSpec('cachorro')
    })
})
export const catsPage = ((req:Request,res:Response)=>{
    res.render('pages/index',{
        banner:{
            title:Title.cat,
            background:Imgs.cat,
          
       },
      AnimalsSpec:AnimalsFunctions.getSpec('gato')
    })
})

export const fishPage = ((req:Request,res:Response)=>{
    res.render('pages/index',{
        banner:{
            title:Title.fish,
            background:Imgs.fish, 
       },
       AnimalsSpec:AnimalsFunctions.getSpec('peixe')
    })
})
