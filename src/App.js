import './App.css';


let targetMonth = "October";
let targetDay = "31";
let targetYear = "2024";
let targetTime = "00:00:00";
let targetMessage = "The Scary times are almost upon us";
let endMessage = "Happy Halloween!";

let targetDate = targetMonth + " " + targetDay + " " + targetYear + " " + targetTime;

console.log(targetDate);

const countdownDate = new Date(targetDate).getTime();

setInterval(function() {
    document.getElementById('message').innerHTML = targetMessage;
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;
    
    const days  = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (days === 1) {
    document.getElementById('days').innerHTML = days + " Day,";
    } else {        
    document.getElementById('days').innerHTML = days + " Days,";
    }

    if (hours === 1) {
        document.getElementById('hours').innerHTML = hours + " Hour,";
    } else {
        document.getElementById('hours').innerHTML = hours + " Hours,";
    }

    if (minutes === 1) {
        document.getElementById('mins').innerHTML = minutes + " Minute,";
    } else {
        document.getElementById('mins').innerHTML = minutes + " Minutes,";
    }

    if (seconds === 1) {
        document.getElementById('secs').innerHTML = seconds + " Second";
    } else {
        document.getElementById('secs').innerHTML = seconds + " Seconds";
    }

    if (timeLeft <= 0) {
        document.getElementById('days').innerHTML = "";
        document.getElementById('hours').innerHTML = "";
        document.getElementById('mins').innerHTML = "";
        document.getElementById('secs').innerHTML = "";
        document.getElementById('end').innerHTML = endMessage;
    }
}, 1000)

function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
        <h1 id="message"></h1>
        <p id="days"></p>
        <p id="hours"></p>
        <p id="mins"></p>
        <p id="secs"></p>
        <p id="end"></p>
        <select id="presets">
            <option value="Easter">Easter</option>
            <option value="Halloween">Halloween</option>
            <option value="Thanksgiving">Thanksgiving</option>
            <option value="Christmas">Christmas</option>
        </select>
    </>
  );
}

export default App;
