
const GENERA = document.querySelector('#genera');

const PRICEPERKM = 0.21;

var userName = document.querySelector('input[name="name"]');
var distance = document.querySelector('input[name="km"]');

GENERA.addEventListener('click' , function(){

  let ticketCost = distance.value * PRICEPERKM;
  let age = document.querySelector('input[name="eta"]:checked').value;

  if (age === "minor"){
    ticketCost = (ticketCost / 100 ) * 80;
  }else if (age === "over"){
    ticketCost= (ticketCost / 100 ) * 60;
  }


  console.log(userName.value);
  console.log(distance.value)
  console.log(ticketCost)

})
