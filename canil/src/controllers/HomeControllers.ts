import { Request,Response } from "express";
import { Title,Imgs,AnimalsFunctions } from "../models/Animals";
import { createMenuObject } from "../helpers/createMenuObject"; 
export const Home = ((req:Request,res:Response)=>{

     res.render('pages/index',{
            menu:createMenuObject('all'),
            banner:{
                 title:Title.home,
                 background:Imgs.home,
                 
            },        
            AnimalsSpec:AnimalsFunctions.getAll()
     })
})
export const dogsPage = ((req:Request,res:Response)=>{

    res.render('pages/index',{
        menu:createMenuObject('dog'),
        banner:{
            title:Title.dogs,
            background:Imgs.dogs,
       },
       AnimalsSpec:AnimalsFunctions.getSpec('cachorro')
    })
})
export const catsPage = ((req:Request,res:Response)=>{
    res.render('pages/index',{
        menu:createMenuObject('cat'),
        banner:{
            title:Title.cat,
            background:Imgs.cat,
          
       },
      AnimalsSpec:AnimalsFunctions.getSpec('gato')
    })
})

export const fishPage = ((req:Request,res:Response)=>{
    res.render('pages/index',{
        menu:createMenuObject('fish'),
        banner:{
            title:Title.fish,
            background:Imgs.fish, 
       },
       AnimalsSpec:AnimalsFunctions.getSpec('peixe')
    })
})
