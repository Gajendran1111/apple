// map 
// reduce 
// filter  

// map 
// syntax 
// variable name .map ((value , index , acctualarray)=> )
let a = [10,20,30,40,50]
let b=a.map ((val,ind,acc)=>acc+2)
console.log(b);

// filter 
// syntax 
// variable name .map ((value , index , acctualarray)=> )

let fil = [10,2,3,40,55,222,725,4,85,32,2,21,52,3,6,9669,31,564,241,3]
let ter = fil.filter((a,b,c) => c>10)
console.log(ter);

// reduce 
// syntax 
// variable name .reduce ((accumulator,currentvalue)=>)


    let red = [100,3,5,55,40,60]
    let ce = red.reduce((d,f)=>d+f)
    console.log(ce);
    
