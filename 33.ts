let numbers:number[]=[1,2,3,4,5,6,7,8,9];
let count=0;
for(const number of numbers){
    var ordinal;
    if(number===1){
        ordinal='st';
    }
    else if(number===2)
    {
        ordinal='nd'
    }
    else if(number===3)
    {
        ordinal='rd'
    }
    else{
        ordinal='th'
    
    }


console.log(`${numbers[count]}${ordinal}`);
count=count+1;

}