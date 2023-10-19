import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <h1 className='app-title'>Weather App</h1>

            <input className='search-bar' type='text' placeholder='Enter City...'/>

            <h1 className='temperature-text'>Temperature: </h1>
        </div>
    )
}

export default Home