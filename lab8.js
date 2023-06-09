function showDate(){
    let today = new Date();
    let localDateTime = today.toLocaleString();
    let localMessage = "Местная дата и время: " + localDateTime;
    document.getElementById("local-time").innerHTML = localMessage;

    let nyTimeZone = "America/New_York";
    let nyDateTime = today.toLocaleString('en-US', { timeZone: nyTimeZone });
    let nyMessage = "Дата и время в Нью-Йорке: " + nyDateTime;
    document.getElementById("ny-time").innerHTML = nyMessage;

    let londonTimeZone = "Europe/London";
    let londonDateTime = today.toLocaleString('en-GB', { timeZone: londonTimeZone });
    let londonMessage = "Дата и время в Лондоне: " + londonDateTime;
    document.getElementById("london-time").innerHTML = londonMessage;

    let tokyoTimeZone = "Asia/Tokyo";
    let tokyoDateTime = today.toLocaleString('ja-JP', { timeZone: tokyoTimeZone });
    let tokyoMessage = "Дата и время в Токио: " + tokyoDateTime;
    document.getElementById("tokyo-time").innerHTML = tokyoMessage;

    let sydneyTimeZone = "Australia/Sydney";
    let sydneyDateTime = today.toLocaleString('en-AU', { timeZone: sydneyTimeZone });
    let sydneyMessage = "Дата и время в Сиднее: " + sydneyDateTime;
    document.getElementById("sydney-time").innerHTML = sydneyMessage;

    let dubaiTimeZone = "Asia/Dubai";
    let dubaiDateTime = today.toLocaleString('en-AE', { timeZone: dubaiTimeZone });
    let dubaiMessage = "Дата и время в Дубае: " + dubaiDateTime;
    document.getElementById("dubai-time").innerHTML = dubaiMessage;
}
function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = Math.floor((today - birthday) / (1000 * 60 * 60 * 24));
    let showDiv = document.getElementById("show");
    showDiv.innerHTML = "Количество дней: " + daysCount;

    let clearButton = document.getElementById("clearButton");
    clearButton.style.visibility = "visible";
}

function clearDaysCount() {
    let showDiv = document.getElementById("show");
    showDiv.innerHTML = "";

    let clearButton = document.getElementById("clearButton");
    clearButton.style.visibility = "hidden";
}
function ShowTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-Ru');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval (ShowTime, 1000);