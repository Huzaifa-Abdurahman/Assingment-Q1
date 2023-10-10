import {magicans} from "./41.js"
  
let greerting:any[]
let greet_name
function make_greet(greet_name:string[]){

greerting=greet_name.map((value)=>(
    `Greet ${value}`
))
return greerting
}
console.log(make_greet(magicans))
export{greet_name}