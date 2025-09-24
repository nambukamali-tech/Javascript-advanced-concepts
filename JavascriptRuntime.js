//In Javascript Runtime Concepts, includes Callstack , Callback Queue , Web APIs , Event Loop
//Main Feature of these concepts are : Making the Js Asynchronous Execution
console.log(`Welcome to the Axis Bank`);//Executes first by call stack
function transaction(mode)
{
setTimeout( () =>//Event Loop performed by Web APIs & Callstack queue
{
    if(mode === 'Deposit')
    {
        console.log(`Amount Deposited successfully!!`);
    }
    else if(mode === 'Withdraw')
    {
        console.log(`Amount Withdraw successfully!!`);
    }
    else
        {
        console.log(`Invalid Transaction..`);
    }
},2000);//After 2seconds the Event Loop see the call stack is empty or not if it is empty it push the callstack queue for execution
}
function chooseMode(mode)
{
   console.log(`The selected mode is ${mode}`);
   transaction(mode);
}
function view()
{
    chooseMode('Deposit');
    chooseMode('Withdraw');
    chooseMode('checkbalance');
}
view();//Call stack executes in synchronous mode
//Simply the Callstack means 'Flow of Execution' in Synchronously
//To make the Js Program Asynchronous using Event loop with help of Web API & Callstack Queue.