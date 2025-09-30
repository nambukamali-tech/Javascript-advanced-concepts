//Error Handling in Javascript structured by try..catch..finally
//Here the demo code explains how the error handling works in 'printing machine'
function selectDocument()
{
    console.log(`Document selected successfully`);
}
function editMargin()
{
    console.log(`Margin edited Successfully`);
}
async function putPaper()
{
    return new Promise( (resolve , reject) =>{
    let paper = false;//if 'true' it returns the paper fitted successfully
    setTimeout( () =>{
        if(!paper)
        {
         reject(new Error(`Paper not setted properly`));
        }
        else
        {
        console.log(`paper fitted Successfully`);
        resolve();
         }
    },1000);
});
}
async function printing()
{
    try{
        selectDocument();
        editMargin();
        await putPaper();//'try block' execution starts here "Execute Risky codes"
    }
    catch(error)
    {
      console.log(`Something went wrong`,error.message);//'catch block' error identified here
    }
    finally{
        console.log(`Close the printer`);//'finally block' it always runs and cleans up
    }
}
printing();//call the main function