const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');

const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');




//This function fetchs the exchange rates and updates the DOM
function calculate(){

    //already inbuilt in the browser
    //Here it runs asynchronously (Kind of in the background ) and it returns a promise 
    //So the way we catch that promise is .then() method 
    //And that .then() method will give a response 
    //And that response we are storing in a arrow function with res name 
    // fetch('items.json')
    // .then(res => res.json())
    // .then(data => document.body.innerHTML = data[0].text);

    //Getting the currency values 
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;


    fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        //Setting the amount
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

    })



}


//Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);  




swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
  });

calculate();