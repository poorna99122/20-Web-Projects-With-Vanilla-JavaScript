function calculate(){

    //already inbuilt in the browser
 

    //Here it runs asynchronously (Kind of in the background ) and it returns a promise 
    //So the way we catch that promise is .then() method 
    //And that .then() method will give a response 
    //And that response we are storing in a arrow function with res name 
    fetch('items.json')
    .then(res => res.json())
    .then(data => document.body.innerHTML = data[0].text);
}

calculate();