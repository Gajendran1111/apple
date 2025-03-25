// promise 
// syntax 

// return new Promise((resolve, reject) => {})


    function go (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shop =true
                if(shop){
                    resolve("going to the shope")
                }
                else{
                    reject("not going to the shop")
                }
               
            }, 5000);
            
        })
    }
    function buy(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let product=false
                if(product){
                    resolve("buy the product")
                }
                else{
                    reject("did not buy the product")
                }
            }, 1000);
            
        })
    }
    function get (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let change =true
                if(change){
                    resolve ("get the change back")
                }
                else {
                    reject("dit not get the change back")
                }
            }, 2000);
            
        })
    }
    // go()
    // .catch(val => {console.log(val); return buy()})
    // .then(val2 => {console.log(val2);return get()})
    // .catch(val3 => {console.log(val3);console.log("work done")})

    async function out() {
        try {
            const a=await go();
            console.log(a);
            const b = await buy ();
            console.log(b);
            const c = await get();
            console.log(c); 
        } catch (error) {
            console.log(error);
            
        }
        
    }
    out();