let celsius =document.getElementById("celsius");
let fahrenheit = document.getElementById("fahernheit");
function celToFar(){
    let output=((celsius.value)* 9/5)+32;
    fahrenheit.value = parseFloat(output.toFixed());
    
}
function farToCel(){
    let output=(parseFloat(fahrenheit.value)-32)
    *5/9;
    celsius.value=parseFloat(output.toFixed(2));
    console.log(output);
}