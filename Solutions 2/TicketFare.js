const age = 9;
const isStudent = true;

if(age < 10){
    ticketPrice = 0;
}
else if(isStudent){
    ticketPrice = 800 * 0.5;
}
else if(age>=60){
    ticketPrice = 800 - (800*0.15);
}
else{
    ticketPrice = 800;
}

console.log(ticketPrice);