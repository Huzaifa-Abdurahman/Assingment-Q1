let newfriend=["zohaib","zubair","mohisn"];

console.log(newfriend);
newfriend.splice(1,0,"ali");
newfriend.splice(2,0,"rizwan");
newfriend.push("zaki");
for(let r=0;r<=newfriend.length;r++)
{
    console.log(`i invited to ${newfriend[r]}`);
}
console.log("big dinner with\t",newfriend)