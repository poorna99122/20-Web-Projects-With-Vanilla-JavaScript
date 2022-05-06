const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

/* Fetch random user and add money */
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}


//Doubles everyones money
function doubleMoney(){
    data = data.map((user) => {
        return { ...user, money: user.money * 2 }
    });
    updateDOM();
}

/* Add new Obj to data Array */
function addData(obj) {
  data.push(obj);
  updateDOM();
}


/*Update DOM
Here in updateDOM function we are not passing any arguments So, if we are not passing any arguments 
Them it will take default as data array */
function updateDOM(providedData = data){
                //Clear the main div
                main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

                providedData.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('person');
                    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
                    main.appendChild(element);
                });
}


/* Format number as money */
function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


//Event Listeners
addUserBtn.addEventListener('click',getRandomUser)
doubleBtn.addEventListener('click',doubleMoney)
