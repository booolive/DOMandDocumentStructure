/*
 functions used to read data from dataLoader.js
 follow me on twitter @FromBoone
*/

class InputData {
    constructor(
        time,
        latitude,
        longitude,
        gps_altitude,
        bmp_altitude,
        bmp_pressure,
        bmp_temp,
        dig_temp,
        css_temp,
        css_eCO2,
        css_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magnetX,
        magnetY,
        magnetZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time = time;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmp_altitude = bmp_altitude;
        this.bmp_pressure = bmp_pressure;
        this.bmp_temp = bmp_temp;
        this.dig_temp = dig_temp;
        this.css_temp = css_temp;
        this.css_eCO2 = css_eCO2;
        this.css_TVOC = css_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magnetX = magnetX;
        this.magnetY = magnetY;
        this.magnetZ = magnetZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function dataRow(legend, value, units) {
    var msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " ";
    msg += units;
    msg += "</td>";
    return msg;
}

function updateDisplay() {
    theTime = new Date();
    document.getElementById("timeStamp").innerHTML = "it is currently " + theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds() + " my dude";
}