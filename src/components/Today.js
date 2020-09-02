import React, { useContext, useState } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import Card from 'react-bootstrap/Card'

const Today = () => {
    const weatherContext = useContext(WeatherContext);
    const [weather, setWeather] = useState({})
    //const {weather, getWeather} = weatherContext;
        //getWeather()

    /*const weather = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=18.4241&
    exclude=hourly,minutely&appid=b1e5771f1fee9ff805922dc8fa240460&units=metric`).then(res => res.json())

    console.log(weather)*/
    const getFiveDayForeCast = () => {

        const request = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=18.4241&
        exclude=hourly,minutely&appid=b1e5771f1fee9ff805922dc8fa240460&units=metric`).then(res => res.json())
        
        return request;
        }

        setWeather(getFiveDayForeCast())
        console.log(weather)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{weather.current.dt.getDate() + '-' +weather.current.dt.getMonth()+ '-' + weather.current.dt.getFullYear()}</Card.Header>
            <Card.Img variant="top" src={`http://openweathermap.org/img/w/${weather.current.weather.icon}.png`} />
             <p>{weather.current.weather.description}</p>
            <Card.Body>
                <Card.Title>Cape Town</Card.Title>
                <Card.Text>
                  <span>HI: {weather.daily[0].temp.max}°</span>
                  <span>LOW: {weather.daily[0].temp.min}°</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Today
