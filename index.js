

const apiKey =`9813d09c09302e59422d7221529ed81f`;


const endps = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

const endpf = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;


let y = 'https://api.openweathermap.org/data/2.5/weather?q=London, uk&appid=9813d09c09302e59422d7221529ed81f';

fetch('https://api.openweathermap.org/data/2.5/weather?q=London, uk&appid=9813d09c09302e59422d7221529ed81f')
.then(response => response.json())
.then(data => console.log(data));
  //console.log(x)
  
function getLocation() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}


getLocation()
