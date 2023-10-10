interface car {
 car_name:string,
 model:number,
}
let car_type:car ={
    car_name:"civic",
    model:1234,
}
function greting(car_type:{color:string,brand:string}):string
{
    return `hello ${car_type.color} ${car_type.brand}`
}
console.log(`${car_type.car_name} \t ${car_type.model}`)
console.log(greting({color:"blue",brand:"honda"}));
