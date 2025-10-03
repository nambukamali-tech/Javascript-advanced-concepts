//Design Pattern in Javascript -> Helps to solve the multiple problems by the experienced manner
//Several design pattern available in JS 
//Below demo code explains the 'module design pattern' 
//Module design pattern like 'data encapsulation' helps to make privacy for functions and variables
const company = ( function () {//Immediately Invoked Function definition
    let production = 10000;//private variables
    function dispatch(dispatchCount)//private functions
    {
        console.log(`The number of items ${dispatchCount} dispatched successfully!`);
    }
    function goDown(goDownCount){
        console.log(`The number of items ${goDownCount} placed in goDown successfully!`);
    }
    function salary(totalSalary)
    {
        console.log(`Salary provided to employees ${totalSalary}`);
    }
    //public API
    return{
         d:dispatch,
         g:goDown,
         s:salary//Accessing private functions
    };
})();
console.log(`---Company details---`);
company.d(5000);
company.g(2000);
company.s(20000);