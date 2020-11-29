function windChill(fah, speed) {
    var total = 0;
    if (fah <= 50 && speed > 3) {
        var chill = 35.74 + (0.6215 * fah) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * fah * Math.pow(speed, 0.16));
        total = Math.round(chill * 10) / 10 + " °F";
    }
    return total;
}