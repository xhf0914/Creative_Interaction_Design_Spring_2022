  document.write("Hello, world!");

function sayhello(){
  var response = prompt("What's your name?")
  alert("Hello "+ response+". Have a nice day!");
}

function mul(a,b){
  return a * b;
}
console.log(mul(100000,2));
console.log(mul(374384592,342353245));


function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize="25px";
  x.style.color="purple";

}
