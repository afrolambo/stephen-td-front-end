import React, { Component, useState, useEffect } from 'react';
import ZodiacContainer from '../Container/ZodiacContainer'
import Login from './Login'
import Signup from './Signup';

function Home ({user}) {
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
            <>
                {user ? 
                <>
                    <div className="App">{windowWidth}</div>
                    <h1>Welcome {user.username} !</h1>
                
                    <ZodiacContainer />
                </>
                : 
                    <>
                    <p>Welcome! Please Sign in!</p> 
                    <button> Login </button>
                    <p>New User?</p>
                    <button> Sign Up </button>
                    <ZodiacContainer />

                    </>
                
                }
            </>
        );
    
}

export default Home;


