// call function

let newObject = {
    firstName: "Ram",
    pokeMone: function(a, b){
        console.log("My name is "+a+" "+b);
    }
}

// external function using call 
function newFunc(a, b){
    this.pokeMone(a, b);
}

// call
newFunc.call(newObject, "Pika", "Chu"); // call function take always first arg a Object and second from take multiple argument as seperately

// apply
newFunc.apply(newObject, ["Ram", "Jadhaw"]); // apply function take always first arg a Object and second argument take as array.

// bind
let bindfun =  newFunc.bind(newObject,"Rowmio", "Star"); //bind function's return value is a function and store that function in a variable and call that function as well as bind function take first argument a object and second from take multiple argument as seperately. bind function's are multiple uses as you can define in a variable and call multiple time as well as argument.
bindfun();
