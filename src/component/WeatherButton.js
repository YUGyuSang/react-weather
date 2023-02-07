import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities,setCity,handleCityChange,}) => {
    console.log("cities?", cities)
  return (
    <div  class="menu-container">
      <Button variant="warning" onClick={()=>handleCityChange("current")}>Current Loaction</Button>
      
      {cities.map((item)=>(
        <Button variant={`${setCity == item ? "outline-warning" : "warning"}`} onClick={()=>setCity(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
