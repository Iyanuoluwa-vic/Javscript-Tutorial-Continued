// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function morning(name){
    return `Good Morning ${name}`;
}


function greet(name, callback){
    console.log(`${callback(name)}, my name is  jacks`);
}


greet('jack', morning);