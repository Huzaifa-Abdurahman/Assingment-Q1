export let users : string[]=["user1","user2","useer3"];
 
if(users.length===0)
{
    console.log("users list is not empty");
}
else {
    users=[];
    console.log("all the users have been removed");
}

if(users.length===0)
{
    console.log("we need to find some users");
}
else{
    console.log("current list of users"+users.join(", "))
}