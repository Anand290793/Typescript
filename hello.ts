//console.log("Hello Anand");

function hello(string :String){
    console.log("Hello" + string)
}

hello("Mr.Yadav");

 // here : string is used to show the return type of funtion 
function showName() : string {

    return("ironman");
    
}

// here type void is used to not return anything in a function
function showVoid() : void {

    console.log("Void type")
    
}

console.log(showVoid());