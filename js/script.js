
//BUTTONS

const GENERA = document.querySelector('#genera');

const RESET = document.querySelector('#reset');

//COST PER KM

const PRICEPERKM = 0.21;

//USER INPUT

var userName = document.querySelector('input[name="name"]');
var distance = document.querySelector('input[name="km"]');

//TICKET GENERATOR FUNCTION

GENERA.addEventListener('click' , function(){
  if (userName.value != ""  &&  distance.value != "" ){
    let ticketCost = distance.value * PRICEPERKM;
    let age = document.querySelector('input[name="eta"]:checked').value;
    //APPLY DISCOUNT
    if (age === "minorenne"){
      ticketCost = (ticketCost / 100 ) * 80;
    }else if (age === "over 65"){
      ticketCost= (ticketCost / 100 ) * 60;
    }
    //SEAT NUMBER
    let seatNum = Math.floor(Math.random() * 999);
    //CP CODE GENERATOR
    let codeCp = 100000 + Math.floor(Math.random() * 900000);

    //WRITE DATA ON TICKET
    document.getElementById('ticketname').innerHTML = userName.value;
    document.getElementById('discount').innerHTML = age;
    document.getElementById('seat').innerHTML = seatNum;
    document.getElementById('cpcode').innerHTML = codeCp;
    document.getElementById('ticketcost').innerHTML = ticketCost.toFixed(2) + " Euro";
    document.getElementById('ticketcontainer').style.display ="block";
    //RESET INPUT FIELD
    userName.value ="";
    distance.value="";
  };
});

//RESET BUTTON

RESET.addEventListener('click',function(){
  document.getElementById('ticketcontainer').style.display ="none";
})
