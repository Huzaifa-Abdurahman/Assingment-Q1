let frind:string[]=["ali","zaki","mustafa","saad","zohaib"];
console.log(frind)
console.log("soory now i want to invite only two friends");
let index=frind.length;
for(let a=0;a<=frind.length;a++)
{
    if(index>2)
    {
        console.log(`soory i not invited to dinner ${frind[0]} `)
        frind.splice(0,1)
    }
}
console.log(`i invite only ${frind}`)
frind.pop()
frind.pop()
