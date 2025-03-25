// call back 


// function hi (callback){
//     setTimeout(() => {
//         console.log("chennai")
//         callback();
//     }, 5000);
// }
// function hello(callback){
//     setTimeout(() => {
//         console.log("mumbai")
//     }, 2000);
   
// }
// hi(hello);


// callback hell 

function ac (callback){
    setTimeout(() => {
        console.log("switch on the ac")
        callback();
    }, 5000);
}
function light (callback){
    setTimeout(() => {
        console.log("turn on the light ")
        callback();
    }, 2000);
   
}
function tv (callback){
    setTimeout(() => {
        console.log("off the tv")
        callback();
    }, 1000);
}
function charge (callback){
    setTimeout(() => {
        console.log("put the mobile on the charger")
      
    }, 500);
}

ac(()=>{
    light(()=>{
        tv(()=>{
            charge(()=>{})
        })
    })
})


