'use strict';


//generate error for try catch fail
function makeError(){
    let errorMsg = new Error("ERROR HIT !")
    throw errorMsg;
}


//generate simple message
function makeMsg(){
    let msg = "one message !"
    console.log(msg)
    return msg;
}


//function just generate message

async function runTest(){
    try {
        await makeError(); // will enter into the catch

        //this line will never call because makeError enter into the catch 
        await makeMsg();

    } catch (err) {
        console.log(err) //display information (line etc)
        console.log(`CATCH TRIGGERRRRR ${err.message} `)
    
    }
   
    return "run did his job !"; 
}


runTest()

