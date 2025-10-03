//Another Design pattern in Javascript named as 'Revealing modules Design pattern'
//It similar to module pattern but it makes the code 'more cleaner' than that.
const company = ( function () {//Immediately Invoked Function definition
    let production = 10000;//private variables
    function dispatch(dispatchCount)//private functions
    {
        production-=dispatchCount;
        console.log(`The number of items ${dispatchCount} dispatched successfully!`);
    }
    function goDown(goDownCount){
        production+=goDownCount;
        console.log(`The number of items ${goDownCount} placed in goDown!`);
    }
    function salary(totalSalary)
    {
        console.log(`Salary provided to employees ${totalSalary}`);
    }
    function getproduction()
    {
       return production;//For accessing private variables using 'getter methods'
    }
    function remaining()
    {
        console.log(`Remaining stock : ${production}`);
    }
    //public API
    return{
         dispatch:dispatch,
         goDown:goDown,
         salary:salary,//Accessing private functions
         getproduction,
         remaining:remaining
    };//In this method of design pattern accessing private functions by same name but in moduledesign pattern we use 'different names'
})();
console.log(`---Company details---`);
console.log(`Total Production in company : ${company.getproduction()}`);
company.dispatch(5000);
company.goDown(2000);
company.salary(20000);
company.remaining();