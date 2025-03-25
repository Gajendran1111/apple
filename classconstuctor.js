// constuctor 

class Name {
    constructor(amo,scope,mag,model,power) {
        this.amo=amo,
        this.scope=scope,
        this.mag=mag,
        this.model=model,
        this.power=power
        
    }
    output (){console.log(` I need this ${this.amo} amo \n Fix the ${this.scope} scope \n I need ${this.mag} \n I need ${this.model} gun\n The minimum of ${this.power} kmph`)}
}
const Finaloutput = new  Name("7.62","3x","external quick mag","akm","1tone");
Finaloutput.output();


