import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [city,setCity] = useState('Nagpur');
    const [temperature, setTemperature] = useState(0)
    
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

            <h1 className='temperature-text'>Temperature: {temperature} °C</h1>
        </div>
    )
}

export default Home