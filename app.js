const weather = new Weather('Toronto', 'CA');
const ui = new UI();
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "spark" && password === "ryerson123") {
        alert("You have successfully logged in.");
        getWeather();
    } else {
        alert("Wrong login information");
    }
});

// Changing location
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  e.preventDefault();
  const city = document.getElementById('city');
  const country = document.getElementById('country');

  weather.changelocation(city.value.replace(" ", '%20'), country.value.replace(" ", '%20'));

  // Get weather and reload weather display
  getWeather();

  // Closing modal
  $('#locModal').modal('hide');
});


function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
