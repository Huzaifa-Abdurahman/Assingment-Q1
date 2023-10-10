let friend : string[] =["ali","umer","musab"];
for(let i=0;i<=2;i++)
{
    if(friend[i]=="musab")
    {
        console.log("musab will not come");
        friend.splice(0,1,"huzaifa");
    }
    else{
        console.log(`i invited to ${friend[i]}`);
    }
}
   console.log(friend)

