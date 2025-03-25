// settimeout

// asynchronous method

function eve(){
    setTimeout(() => {
        console.log("good evening");
    },2500);
    
}
function mor (){
    setTimeout(() => {
        console.log("good morning")
    },1000);
   
}
function nig (){
    setTimeout(() => {
        console.log("good night")
    }, 5000);
    
}
eve();
mor();
nig();