import React from "react"
import CurrentWeather from "./components/CurrentWeather"
import magnify from "./components/images/magnify.svg"
import TodayWeather from "./components/TodayWeather"

export default function App() {
    const [formData, setFormData] = React.useState(
        {search: ""}
    )

    const [curData, setCurData] = React.useState({
        name: "Location",
        main: {
            temp: 25,
            humidity: 70
        },
        weather: [{description: "Cloudy"}]
    }
    )

    const [fuData, setFuData] = React.useState({
        city: {name: "Bangalore"},
        list: [{weather: [{icon: '10d', description: 'Cloudy'}], main: {temp: "25"}, dt_txt: "2022-08-24 15:00:00"}, {weather: [{icon: '10d', description: 'Cloudy'}], main: {temp: "25"}, dt_txt: "2022-08-24 15:00:00"}, {weather: [{icon: '10d', description: 'Cloudy'}], main: {temp: "25"}, dt_txt: "2022-08-24 15:00:00"}, {weather: [{icon: '10d', description: 'Cloudy'}], main: {temp: "25"}, dt_txt: "2022-08-24 15:00:00"}, {weather: [{icon: '10d', description: 'Cloudy'}], main: {temp: "25"}, dt_txt: "2022-08-24 15:00:00"}, {weather: [{icon: '10d', description: 'Cloudy'}], main: {temp: "25"}, dt_txt: "2022-08-24 15:00:00"}]
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    React.useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=bangalore&APPID=210e3811278841ca68b6fb26fcfa39b9`, {mode: 'cors'})
        .then(function(response) {
          return response.json()
        })
        .then(function(response) {
            setCurData(response)
        })
        
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=bangalore&APPID=210e3811278841ca68b6fb26fcfa39b9`, {mode: 'cors'})
        .then(function(response1) {
          return response1.json()
        })
        .then(function(response1) {
            setFuData(response1)
        })
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formData.search}&APPID=210e3811278841ca68b6fb26fcfa39b9`, {mode: 'cors'})
        .then(function(response) {
          return response.json()
        })
        .then(function(response) {
            setCurData(response)
        })
        
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${formData.search}&APPID=210e3811278841ca68b6fb26fcfa39b9`, {mode: 'cors'})
        .then(function(response1) {
          return response1.json()
        })
        .then(function(response1) {
            setFuData(response1)
        })
    }
    
    return (
        <div>
            <header className="header">
                <h1>Weather.ly</h1>
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input
                            type = "text"
                            placeholder="Enter City or Postcode"
                            onChange={handleChange}
                            name = "search"
                            value = {formData.search}
                            id = "search"
                        />
                    </form>
                    <img src={magnify} alt ="" />
                </div>
            </header>
            
            <div className="main">
                <CurrentWeather main = {curData.weather[0].main} city = {curData.name} temp = {Math.round(curData.main.temp-273)} desc = {curData.weather[0].description} humidity = {curData.main.humidity}/>
                <TodayWeather data = {fuData.list} city = {fuData.city.name}/>
            </div>

        </div>
    )
}