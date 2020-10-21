
const GENERA = document.querySelector('#genera');

const PRICEPERKM = 0.21;

const RESET = document.querySelector('#reset');


var userName = document.querySelector('input[name="name"]');
var distance = document.querySelector('input[name="km"]');


GENERA.addEventListener('click' , function(){
  if (userName.value != ""  &&  distance.value != "" ){
    let ticketCost = distance.value * PRICEPERKM;
    let age = document.querySelector('input[name="eta"]:checked').value;

    if (age === "minorenne"){
      ticketCost = (ticketCost / 100 ) * 80;
    }else if (age === "over 65"){
      ticketCost= (ticketCost / 100 ) * 60;
    }

    let seatNum = Math.floor(Math.random() * 999);
    let codeCp = 100000 + Math.floor(Math.random() * 900000);

    document.getElementById('ticketname').innerHTML = userName.value;
    document.getElementById('discount').innerHTML = age;
    document.getElementById('seat').innerHTML = seatNum;
    document.getElementById('cpcode').innerHTML = codeCp;
    document.getElementById('ticketcost').innerHTML = ticketCost.toFixed(2) + " Euro";
    document.getElementById('ticketcontainer').style.display ="block";
    userName.value ="";
    distance.value="";
  }
})


RESET.addEventListener('click',function(){
  document.getElementById('ticketcontainer').style.display ="none";
})
