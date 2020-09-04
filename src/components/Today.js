import React, { useContext, useState } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import Card from 'react-bootstrap/Card'

const Today = () => {
    const weatherContext = useContext(WeatherContext);
    const [weather, setWeather] = useState({})
    let tester = require('./weather.json')
    //const {weather, getWeather} = weatherContext;
    //getWeather()
    //console.log(getWeather())

    /*const weather = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=18.4241&
    exclude=hourly,minutely&appid=b1e5771f1fee9ff805922dc8fa240460&units=metric`).then(res => res.json())

    console.log(weather)*/
    /*const getFiveDayForeCast = async () => {

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=18.4241&
        exclude=hourly,minutely&appid=b1e5771f1fee9ff805922dc8fa240460&units=metric`).then(res => res.json()).then(result => setWeather(result));

        let responseJson = await response.json();
        return responseJson;
        }

    const jsonData = () => {getFiveDayForeCast().then( async (data) => await setWeather(data))}
    jsonData()
    getFiveDayForeCast()*/

    //console.log(tester)
    
    //setWeather(getFiveDayForeCast().then((data) => {return data}))
    //console.log(jsonData)
    let date = new Date(tester.list[0].dt*1000)
    console.log(tester)
    const myloop = () => {
        for (let index = 0; index < tester.list.length; index++) {
            return <Card style={{ width: '18rem' }}>
            <Card.Header>{date.getDate() + '-' +date.getMonth()+1+ '-' + date.getFullYear()}</Card.Header>
            <img src={`https://openweathermap.org/img/w/${tester.list[index].weather.icon}@2x.png`} style={{height: '70px', width: '70px'}}  />
             <p>{tester.list[index].weather.description}</p>
            <Card.Body>
                <Card.Title>Cape Town</Card.Title>
                <Card.Text>
                  <span>HI: {tester.list[index].main.temp_max-273,15}°</span>
                  <span>LOW: {tester.list[index].main.temp_min-273,15}°</span>
                </Card.Text>
            </Card.Body>
        </Card>
            
        }
    }
    return (
        myloop()
        
    )
}

export default Today
