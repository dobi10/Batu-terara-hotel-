function book(){
let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let room=document.getElementById("room").value;
let date=document.getElementById("date").value;
let days=document.getElementById("days").value;

if(!name||!phone||!date||!days){
document.getElementById("result").innerText="Fill all fields";
return;
}

let price=50;
if(room==="Deluxe Room") price=80;
if(room==="Luxury Suite") price=150;

let total=price*days;

document.getElementById("result").innerHTML=
"Booking Done ✔️ Total: $"+total;
}

function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234"){
document.getElementById("panel").style.display="block";
}else{
alert("Wrong login");
}
  }
