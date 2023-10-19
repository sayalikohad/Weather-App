import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <h1 className='app-title'>Weather App</h1>

            <input className='search-bar' type='text' placeholder='Enter City...'/>
        </div>
    )
}

export default Home