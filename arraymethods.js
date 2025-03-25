// array methods 

// .push ()

let pu = [10,20,30,40,50]
pu.push(60)
console.log(pu);

// pop
let po = [10,20,30,40,50,60]
po.pop()
console.log(po);

// shift 

let shi = [10,20,30,40,50]
shi.shift()
console.log(shi);

// unshift 
 
let un = [20,30,40,50]
un.unshift(10)
console.log(un);


// sort 
let so = [1,5,7,3,2,5,4,6]
console.log(so.sort());

// reverse

let rev = "hsenid"
console.log(rev.split("").reverse().join(""));


// splice 
// syntax 
// variable name .splice(index,splice,values)


let days = ["sunday","tuesday","tuesday","wednesday","thuresday","friday","saturday"]
days.splice(1,0,"monday")
console.log(days);







