let ordinal_numbers:number[]=[1,2,3,4,5,6,7,8,9]
for(let num of ordinal_numbers){
  
  let stuff:string
    if(num===1){
        stuff="st"
        
    }
    else if(num===2)  {
        stuff="nd"
    }
    else if(num===3){stuff="rd"}
        
    else {stuff="th"}
console.log(`${num}${stuff}`);
}

