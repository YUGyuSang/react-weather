import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div> {/*weather가 참이면 name 값을 보여준다.*/}
      <h2>{weather?.main.temp}C / {weather?.main.temp*1.8+32}</h2>
      <h2>humidity: {weather?.main.humidity}도</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
