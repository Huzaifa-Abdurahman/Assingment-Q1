let user:string[]=["eric","jhon","colly","admin"]

for(const b of user)
{
    if(b==="admin")
    {
        console.log(`hi ${user[3]}  would you like to see status`)
        break
    }
    else
    {
        continue;
        console.log(`hi ${user[index]} would you like to login again`);
        
    }
}