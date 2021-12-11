//querySelector returns a single object with the first HTML element that matches the 'selectors'
const container = document.querySelector('.container');
console.log(container.value);



//querySelectorAll() returns an array of objects with all the HTML elements that match the 'selectors'.
const seats = document.querySelectorAll('.row.seats:not(.occupied)');
console.log(seats.value);


const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');



//Initial ticket price
let ticketPrice = parseInt(movieSelect.value);
console.log(typeof ticketPrice);



function updateSelectedCount(){
const selectedSeats = document.querySelectorAll('.row .seat.selected');
// console.log(selectedSeats);

const selectedSeatsCount = selectedSeats.length;
console.log(selectedSeatsCount);


//setting no of seats to the innerText of the span tag with id count
count.innerText = selectedSeatsCount;   
total.innerText = selectedSeatsCount * ticketPrice;



}



//Movie select event
movieSelect.addEventListener('change', (e)=>{
    ticketPrice = parseInt(e.target.value);
    updateSelectedCount();

});




//This is to toggle the class of seat to turn blue when selected if not to normal when we select again
//Seat click event listener
container.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // console.log(e.target);
        e.target.classList.toggle('selected');
    }


    //To update the count when we select or deselect the seat
    updateSelectedCount();
})





