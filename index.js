
function receivesAFunction(callback) {

  callback();
}

function returnsANamedFunction() {
  
  function namedFunction() {
    console.log("This is a named function.");
  }
  
  return namedFunction;
}


function returnsAnAnonymousFunction() {
  
  return function() {
    console.log("This is an anonymous function.");
  };
}

function callbackFunction() {
  console.log("Callback function called.");
}

receivesAFunction(callbackFunction);

const namedFunc = returnsANamedFunction();
namedFunc();


const anonFunc = returnsAnAnonymousFunction();
anonFunc();
