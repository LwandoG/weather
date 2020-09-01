import React, { useReducer } from 'react'
import WeatherReducer from './WeatherReducer'
import { GET_WEATHER, FETCH_ERROR } from '../../types'

const WeatherState = () => {
    const initialState = {
        weather: {},
    }

    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    const getWeather = async () => {
        try {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.9249&lon=18.4241&
          exclude=hourly&appid=b1e5771f1fee9ff805922dc8fa240460&units=metric`)
    
          dispatch({
            type: GET_WEATHER,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: FETCH_ERROR,
            payload: err
          });
        }
      };
    return (
        <ContactContext.Provider
            value={{
                weather: state.weather,
                getWeather
            }}
            >
            {props.children}
        </ContactContext.Provider>
    )
}

export default WeatherState
