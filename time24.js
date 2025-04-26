function Clock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock1').innerHTML = timeString;
}

// Update the clock every second
setInterval(Clock, 1000);

// Initialize the clock immediately
Clock();