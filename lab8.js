function showDate(){
    let today = new Date();
    var localDateTime = today.toLocaleString();
    var localMessage = "Местная дата и время: " + localDateTime;
    document.getElementById("local-time").innerHTML = localMessage;

    var nyTimeZone = "America/New_York";
    var nyDateTime = today.toLocaleString('en-US', { timeZone: nyTimeZone });
    var nyMessage = "Дата и время в Нью-Йорке: " + nyDateTime;
    document.getElementById("ny-time").innerHTML = nyMessage;

    var londonTimeZone = "Europe/London";
    var londonDateTime = today.toLocaleString('en-GB', { timeZone: londonTimeZone });
    var londonMessage = "Дата и время в Лондоне: " + londonDateTime;
    document.getElementById("london-time").innerHTML = londonMessage;

    var tokyoTimeZone = "Asia/Tokyo";
    var tokyoDateTime = today.toLocaleString('ja-JP', { timeZone: tokyoTimeZone });
    var tokyoMessage = "Дата и время в Токио: " + tokyoDateTime;
    document.getElementById("tokyo-time").innerHTML = tokyoMessage;

    var sydneyTimeZone = "Australia/Sydney";
    var sydneyDateTime = today.toLocaleString('en-AU', { timeZone: sydneyTimeZone });
    var sydneyMessage = "Дата и время в Сиднее: " + sydneyDateTime;
    document.getElementById("sydney-time").innerHTML = sydneyMessage;

    var dubaiTimeZone = "Asia/Dubai";
    var dubaiDateTime = today.toLocaleString('en-AE', { timeZone: dubaiTimeZone });
    var dubaiMessage = "Дата и время в Дубае: " + dubaiDateTime;
    document.getElementById("dubai-time").innerHTML = dubaiMessage;
}