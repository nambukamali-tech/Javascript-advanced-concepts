//Below Code describe the concept of 'Singleton Design pattern' in Javascript
//Singleton design pattern defines one instance -> same behaviour
//If you define how many objects for class but it returns the same value as result
//Helps to avoid of creating and collapsing multiple objects and improves cleaner code and centralize control
class company {
    constructor(){
        if(company.instance){
        return company.instance;//If instance already there then, return it.
        }
        this.companyKey = null;//If instance not already there , it works
        company.instance = this;
    }
    entrance(Key){
        this.companyKey = Key;
        console.log(`Company opens with ${this.companyKey}..`);
        console.log(`Door opened!`);
    }
    exit(){
        console.log(`Company closed with ${this.companyKey}`);
        console.log(`Door closed!`);
    }
    getKey(){
        return this.companyKey;//Using getter method to access the private variable
    }

}
const entranceKey = new company();//First instance for class 'company'
entranceKey.entrance('K1');
const exitKey = new company();//Second instance for class 'company'
exitKey.exit();
console.log(entranceKey === exitKey);//Checking Singleton design pattern if both return same then 'true' otherwise 'false'
//Both return same keys ie) Creating one instance for class no matter how many instances created but it returns same