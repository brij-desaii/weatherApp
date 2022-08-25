import React from "react"

export default function TodayWeather(props){
    
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    }
    
    return(
        <div className="today">
            <h1>Today in {props.city}</h1>
            <div className="hourly">
                <p>{parseInt((props.data[0].dt_txt).slice(11,13))>12 ? (parseInt((props.data[0].dt_txt).slice(11,13))%12).toString()+":00 pm" : parseInt((props.data[0].dt_txt).slice(11,13)) === 12 ? (parseInt((props.data[0].dt_txt).slice(11,13))).toString()+":00 pm" : parseInt((props.data[0].dt_txt).slice(11,13)) === 0 ? (parseInt((props.data[0].dt_txt).slice(11,13))+12).toString()+":00 am" : (parseInt((props.data[0].dt_txt).slice(11,13))).toString()+":00 am" } </p>
                <img src={`https://openweathermap.org/img/wn/${props.data[0].weather[0].icon}@2x.png`} alt="" />
                <p>{Math.round(props.data[0].main.temp-273)}°C</p>
                <p>{titleCase(props.data[0].weather[0].description)}</p>
            </div>
            <div className="hourly">
                <p>{parseInt((props.data[1].dt_txt).slice(11,13))>12 ? (parseInt((props.data[1].dt_txt).slice(11,13))%12).toString()+":00 pm" : parseInt((props.data[1].dt_txt).slice(11,13)) === 12 ? (parseInt((props.data[1].dt_txt).slice(11,13))).toString()+":00 pm" : parseInt((props.data[1].dt_txt).slice(11,13)) === 0 ? (parseInt((props.data[1].dt_txt).slice(11,13))+12).toString()+":00 am" : (parseInt((props.data[1].dt_txt).slice(11,13))).toString()+":00 am" } </p>
                <img src={`https://openweathermap.org/img/wn/${props.data[1].weather[0].icon}@2x.png`} alt="" />
                <p>{Math.round(props.data[1].main.temp-273)}°C</p>
                <p>{titleCase(props.data[1].weather[0].description)}</p>
            </div>
            <div className="hourly">
                <p>{parseInt((props.data[2].dt_txt).slice(11,13))>12 ? (parseInt((props.data[2].dt_txt).slice(11,13))%12).toString()+":00 pm" : parseInt((props.data[2].dt_txt).slice(11,13)) === 12 ? (parseInt((props.data[2].dt_txt).slice(11,13))).toString()+":00 pm" : parseInt((props.data[2].dt_txt).slice(11,13)) === 0 ? (parseInt((props.data[2].dt_txt).slice(11,13))+12).toString()+":00 am" : (parseInt((props.data[2].dt_txt).slice(11,13))).toString()+":00 am" } </p>
                <img src={`https://openweathermap.org/img/wn/${props.data[2].weather[0].icon}@2x.png`} alt="" />
                <p>{Math.round(props.data[2].main.temp-273)}°C</p>
                <p>{titleCase(props.data[2].weather[0].description)}</p>
            </div>
            <div className="hourly">
                <p>{parseInt((props.data[3].dt_txt).slice(11,13))>12 ? (parseInt((props.data[3].dt_txt).slice(11,13))%12).toString()+":00 pm" : parseInt((props.data[3].dt_txt).slice(11,13)) === 12 ? (parseInt((props.data[3].dt_txt).slice(11,13))).toString()+":00 pm" : parseInt((props.data[3].dt_txt).slice(11,13)) === 0 ? (parseInt((props.data[3].dt_txt).slice(11,13))+12).toString()+":00 am" : (parseInt((props.data[3].dt_txt).slice(11,13))).toString()+":00 am" } </p>
                <img src={`https://openweathermap.org/img/wn/${props.data[3].weather[0].icon}@2x.png`} alt="" />
                <p>{Math.round(props.data[3].main.temp-273)}°C</p>
                <p>{titleCase(props.data[3].weather[0].description)}</p>
            </div>
            <div className="hourly" id="lasthourly">
                <p>{parseInt((props.data[4].dt_txt).slice(11,13))>12 ? (parseInt((props.data[4].dt_txt).slice(11,13))%12).toString()+":00 pm" : parseInt((props.data[4].dt_txt).slice(11,13)) === 12 ? (parseInt((props.data[4].dt_txt).slice(11,13))).toString()+":00 pm" : parseInt((props.data[4].dt_txt).slice(11,13)) === 0 ? (parseInt((props.data[4].dt_txt).slice(11,13))+12).toString()+":00 am" : (parseInt((props.data[4].dt_txt).slice(11,13))).toString()+":00 am" } </p>
                <img src={`https://openweathermap.org/img/wn/${props.data[4].weather[0].icon}@2x.png`} alt="" />
                <p>{Math.round(props.data[4].main.temp-273)}°C</p>
                <p>{titleCase(props.data[4].weather[0].description)}</p>
            </div>
        </div>
    )
}