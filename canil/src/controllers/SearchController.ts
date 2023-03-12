import { Request,Response } from "express";

export const search = ((req:Request,res:Response)=>{
     let getNameSearchAnimal : string = req.query.q as string
     res.render('pages/search',{
          
     })
})