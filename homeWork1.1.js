/*
if(a % 2) {
    a * b;
}else {
    a + b;
}

console.log(a(5));
 */
calc= () =>{
    ()=> a%2 ? a * b : a + b;
}



console.log(a(5));