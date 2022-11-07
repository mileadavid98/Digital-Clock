function setClock(){
    // Get current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Calculate rotate values for the clock hands(using current time, acordding to 360deg)
    hrValue = (hours * 30) + (minutes * 6) / 12;
    minValue = minutes * 6;
    secValue = seconds * 6;
    
    // Add calculate rotate values to the clock hand elements
    document.querySelector(".hour-hand").style.transform = "rotate(" + hrValue + "deg)";
    document.querySelector(".min-hand").style.transform = "rotate(" + minValue + "deg)";
    document.querySelector(".sec-hand").style.transform = "rotate(" + secValue + "deg)";
}

setInterval(setClock, 1000)