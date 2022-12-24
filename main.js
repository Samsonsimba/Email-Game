const menuToggler = document.getElementById("nav-btn");
const packToggler = document.getElementById("pack-btn");
const leftContainer = document.getElementById("left-container");
const rightContainer = document.getElementById("right-container");

menuToggler.addEventListener("click",function(){
  leftContainer.classList.toggle("active");
});

packToggler.addEventListener("click",function(){
  rightContainer.classList.toggle("active");
});

function appendToDiv(div_name, data){
  document.getElementById(div_name).innerText+=data;
}

document.getElementById("add-data").addEventListener('click', function(){
  var e_input = document.getElementById("e_input");
  var value = e_input.value.trim();
  if(!value){
    alert("input field can't be empty!");
  }else{
    appendToDiv("mydata", value+"\n");
  }
  e_input.value="";
  
});
  