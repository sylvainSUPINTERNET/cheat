'use strict';

function getMessage(){
    return new Promise(function(resolve, reject){
        resolve("its a message !")  //accessible via getMessage().then( . . .)

        reject("error getMessage() promise rejected ") //accesible via getMessage().then(...).catch(err ...)
    })
}

async function testAsync(){
    let the_message = await getMessage()
    return the_message;
}


testAsync()
.then(function(theMessage){
    console.log(theMessage)
})
.catch(function(err){
    console.log(err.message)
})