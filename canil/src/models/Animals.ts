import { it } from "node:test"


type Animals = {
     home:string,
     dogs:string,
     cat:string
     fish:string
}
type AnimalsInfo = {
      img:string,
      name:string,
      color:string,
      genre:string
      especie:string
}
export const Title : Animals = {
     home:'Todos os Animais',
     dogs:'Cachorros',
     cat:'Gatos',
     fish:'Peixes'
}

export const Imgs : Animals = {
     home:'allanimals.jpg',
     dogs:'banner_dog.jpg',
     cat:'banner_cat.jpg',
     fish:'banner_fish.jpg'
}

export const AnimalsSpec : AnimalsInfo[]= [

      {img:'images/pastor-alemao.jpg',name:'Pastor-alemão',color:'Amarelo e Preto',genre:'Masculino',especie:'cachorro'},
      {img:'images/labrador.jpg',name:'Labrador-retriever',color:'Branco',genre:'Masculino',especie:'cachorro'},
      {img:'images/zwergspitz.jpg',name:'Zwergspitz',color:'Amarelo',genre:'Feminino',especie:'cachorro'},
      {img:'images/husky.jpg',name:'Husky Siberiano',color:'Branco e Preto',genre:'Masculino',especie:'cachorro'},
      {img:'images/golden.jpg',name:'Golden Retriever',color:'Amarelo',genre:'Masculino',especie:'cachorro'},
      {img:'images/poodle.jpg',name:'Poodle',color:'Branco',genre:'Feminino',especie:'cachorro'},
      {img:'images/bulldog.jpg',name:'Bulldog',color:'Branco e Amarelo',genre:'Masculino',especie:'cachorro'},
      {img:'images/persa.jpg',name:'Persa',color:'Amarelo',genre:'Masculino',especie:'gato'},
      {img:'images/mainecoon.jpg',name:'Maine Coon',color:'Preto e Branco',genre:'Masculino',especie:'gato'},
      {img:'images/bengal.jpg',name:'Bengal',color:'Branco, Preto e Amarelo',genre:'Feminino',especie:'gato'},
      {img:'images/siames.jpg',name:'Siamês',color:'Amarelo e Preto',genre:'Amarelo e Preto',especie:'gato'},
      {img:'images/sphynx.jpg',name:'Sphynx',color:'Branco',genre:'Masculino',especie:'gato'},
      {img:'images/neon.jpg',name:'Tetra Neon',color:'Vermelho e Azul',genre:'Masculino',especie:'peixe'},
      {img:'images/matogrosso.jpg',name:'Mato Grosso',color:'Laranja',genre:'Masculino',especie:'peixe'},
      {img:'images/limpavidro.jpg',name:'Limpa Vidro',color:'Verde e Branco',genre:'Masculino',especie:'peixe'},
      {img:'images/tanictis.jpg',name:'Tanictis',color:'Vermelho',genre:'Masculino',especie:'peixe'},
      {img:'images/acara.jpg',name:'Acará Bandeira',color:'Preto',genre:'Masculino',especie:'peixe'},

]



export const AnimalsFunctions = {
     getAll : ():AnimalsInfo[] =>{
         return AnimalsSpec
     },
     getSpec:(p:string):AnimalsInfo[]=>{
         let manipulation:AnimalsInfo[] = AnimalsSpec.filter((item)=>item.especie === p)
         return manipulation
      
     },
     filterInput:(p:string) =>{
          let filterSearch  = AnimalsSpec.map((item)=> {if(item.name.toLowerCase().includes(p.toLowerCase())){return item}}).filter((justResult)=> justResult !== undefined)
          return filterSearch
     }
}



