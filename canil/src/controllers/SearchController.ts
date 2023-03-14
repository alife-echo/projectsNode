import { Request,Response } from "express";
import { AnimalsFunctions } from "../models/Animals";
export const search = ((req:Request,res:Response)=>{
     let getNameSearchAnimal : string = req.query.q as string
     res.render('pages/search',{
         filterInput: AnimalsFunctions.filterInput(getNameSearchAnimal)
     })
})