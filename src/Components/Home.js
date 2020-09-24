import React, { Component, useState, useEffect } from 'react';

function Home () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize) 

        return () => { //this is considered your cleanup code. 
            window.removeEventListener('resize', handleResize)
        }
    }, [])

        return (
            <div className="App">{windowWidth}</div>
        );
    
}

export default Home;


