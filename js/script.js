
const GENERA = document.querySelector('#genera');

const PRICEPERKM = 0.21;


GENERA.addEventListener('click' , function(){
  let name = document.querySelector('input[name="name"]').value;
  let distance = document.querySelector('input[name="km"]').value;
  let age = document.querySelector('input[name="eta"]:checked').value
  let ticketCost = distance * PRICEPERKM;
  if (age === "minor"){
    ticketCost = (ticketCost / 100 ) * 80;
  }else if (age === "over"){
    ticketCost= (ticketCost / 100 ) * 60;
  }

  console.log(name);
  console.log(distance)
  console.log(ticketCost)
})
