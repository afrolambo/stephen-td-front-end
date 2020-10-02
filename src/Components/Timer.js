import React, {useState, setState} from 'react'
import {Redirect} from 'react-router-dom'

function Timer(props) {
    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount(prevCount => prevCount === 0 ? 0 : prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (

        <> 
        {props.user ? 
            <>
                <h1>Welcome {props.user.username} !</h1>
                <h2><span>{count}</span></h2>
                <button onClick={decrementCount}>-</button>
                <button onClick={incrementCount}>+</button>
            </>

        :
            <Redirect to="/" />
        }
       </>
    )
}

export default Timer;