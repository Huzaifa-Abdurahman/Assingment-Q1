let album={
    artist:"hamza",
    title:"paint",
}
let album1={
    artist:"huzaifa",
    title:"painting",
}
 function make_album(obj:{artist:string,title:string},track_number:any){
    track(track_number)
    return `${obj.artist} ${obj.title}`
 }
 function track(n:number){
    console.log(`number of tracks ${n}`)
 }
 console.log(make_album(album1,5))
 console.log(make_album(album,4))