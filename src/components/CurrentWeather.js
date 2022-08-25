import React from "react"
import cloudyday from "./images/cloudyday.jpg"
import clearday from "./images/clearday.jpg"
import rain from "./images/rain.jpg"
import snow from "./images/snow.jpg"
import thunder from "./images/thunder.jpg"


export default function CurrentWeather(props) {

    let background = ""

    if (props.main === "Clear") background = clearday
    else if (props.main === "Snow") background = snow
    else if (props.main === "Rain") background = rain
    else if (props.main === "Drizzle") background = rain
    else if (props.main === "Thunderstorm") background = thunder
    else background = cloudyday

    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    }

    return (
        <div className="current">
            <img src={background} alt = ""/>
            <div className="curTitle">
                <h1 className="city">{props.city}</h1>
            </div>
            <p className="temp">{props.temp}°C</p>
            <h1 className="desc">{titleCase(props.desc)}</h1>
            <h2 className="humidity">Humidity: {props.humidity}%</h2>
        </div>
    )
}