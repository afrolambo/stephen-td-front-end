import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

function Timer(props) {

    const [count, setCount] = useState(() => {
        
    })

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (

        <> 
        {props.user ? 
            <>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </>

        :
            <Redirect to="/" />
        }
       </>
    )
}

export default Timer;