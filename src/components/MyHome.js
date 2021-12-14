import React, { Component, useEffect, useState } from "react"

function MyHome() {
    const [temperature, setTemperature] = useState('');

    useEffect( () => 
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=5391959&appid=2fe63ed5acac034b1ff321779db9270d&units=metric`).then(res => res.json())
          .then((result) => {
                if(result.cod===200){
                    setTemperature(Math.round(result.main.temp))
                }
                else 
                {
                    setTemperature('')
                }
            },
            (error) => {
              console.log('Failed to fetch weather data')
              setTemperature('')
            }
          )
    })


        return (
            <div >
            <p><img border-radius="90px" height="300" width="200" src="./images/hometown.jpg"/></p>
        My hometown is San Francisco.
        <p>San Francisco is famous for the Golden Gate Bridge and it is also called as the Silicon Valley of the world.</p>
        
        {temperature<=10?(<img src="./images/cold.png"/>):(temperature>10?(temperature<=20?(<img src="./images/mild.png"/>):(<img src="./images/sunny.png"/>)):'')}
        {
            temperature==='' ? 'Weather is not available' : temperature
        } &#176;C       
            </div>
        )
    
}

export default MyHome;