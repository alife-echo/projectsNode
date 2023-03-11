import { Request,Response } from "express";
import { Animals,Title,Imgs } from "../models/Animals";
export const Home = ((req:Request,res:Response)=>{
     res.render('pages/index',{
         AnimalsHomeLink:Animals.home,
         AnimalsDogLink:Animals.dogs,
         AnimalsCatLink:Animals.cat,
         AnimalsFishLink:Animals.fish,
         TitleHome:Title.home,
         ImgsHome:Imgs.home
     })
})
export const dogsPage = ((req:Request,res:Response)=>{
    res.render('pages/dogs',{
        AnimalsHomeLink:Animals.home,
        AnimalsCatLink:Animals.cat,
        AnimalsFishLink:Animals.fish,
        TitleDog:Title.dogs,
        ImgsDog:Imgs.dogs
    })
})
export const catsPage = ((req:Request,res:Response)=>{
    res.render('pages/cats',{
        AnimalsHomeLink:Animals.home,
        AnimalsDogLink:Animals.dogs,
        AnimalsFishLink:Animals.fish,
        TitleCat:Title.cat,
        ImgsCat:Imgs.cat
      
    })
})

export const fishPage = ((req:Request,res:Response)=>{
    res.render('pages/fishs',{
        AnimalsHomeLink:Animals.home,
        AnimalsDogLink:Animals.dogs,
        AnimalsCatLink:Animals.cat,
        TitleFish:Title.fish,
        ImgsFish:Imgs.fish
    })
})
