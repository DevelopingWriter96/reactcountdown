import './App.css';

let targetMonth = "March";
let targetDay = "7";
let targetYear = "2025";
let targetTime = "10:30:00";
let targetMessage = "Josalyn's going to get hitched!: ";
let endMessage = "Congradulations on your marriage!";

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
    function handleSubmit(e) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        fetch('/some-api', { method: form.method, body: formData });
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

      }
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
        <p id="message"></p>
        <p id="days"></p>
        <p id="hours"></p>
        <p id="mins"></p>
        <p id="secs"></p>
        <p id="end"></p>
        <form method="post" onSubmit={handleSubmit}>
        <label>
            Date: <input type="date" name="date" defaultValue="" />
        </label>
        <label>
            Time: <input type="time" name="time" defaultValue="" />
        </label>
        <label>
            Header Message: <input name="headermessage" defaultValue="" />
        </label>
        <label>
            End Message: <input name="endmessage" defaultValue="" />
        </label>
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
        </form>
    </>
  );
}

export default App;
