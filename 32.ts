let current_users:string[]=["jhon","juli","james"];
let new_users:string[]=["ali","zaki","musatfa","juli"];

for(let c=0;c<new_users.length;c++)
{
    if(new_users[c]==="jhon"&&new_users[c]==="JHON"||
    new_users[c]==="juli"&&new_users[c]==="JULI"||
    new_users[c]==="james"&&new_users[c]==="JAMES"){
        console.log("enter a new username")
        break
    }
    else{
        console.log("username is avaible")
        break
    }
}