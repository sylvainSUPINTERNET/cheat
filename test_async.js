'use strict';

function test(){
    let errorMsg = new Error("ERROR HIT !")
    throw errorMsg;
}


async function run(){
    try {
        await test();
    } catch (err) {
        console.log(err.message)
    }
   
    return "run did his job !"; 
}


run()

