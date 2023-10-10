let magicans:string[]=["harry","jhon","woltermode"];
 function print_magicans(...magicans:string[]){
    for(let r=0;r<magicans.length;r++)
    {
        console.log(`${magicans[r]} \n`)
    }
 }
print_magicans("harry","jhon","woltermode");

export{magicans}