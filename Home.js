import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'

function Home() {
    const [city,setCity] = useState('Nagpur');
    const [temperature, setTemperature] = useState(0)
    const [message, setMessage] = useState('')
    
    async function loadweatherInfo(){
        try{
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c')

            setTemperature((response.data.main.temp -273).toFixed(2))
            setMessage('city Found')
        }
        catch(err){
           setTemperature(0)
           setMessage('city Not Found')
        }
    }

    useEffect(()=>{
        loadweatherInfo()
    }, [city])

    return (
        <div>
            <h1 className='app-title'>Weather For {city}</h1>

            <input
                className='search-bar'
                type='text'
                placeholder='Enter City...'
                value={city}
                onChange={(e)=>{
                    setCity(e.target.value)
                }}
            />
              <p>{message}</p>

            <h1 className='temperature-text'>Temperature: {temperature} °C</h1>
          
        </div>
    )
}

export default Home