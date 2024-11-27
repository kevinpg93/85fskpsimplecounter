
import { useEffect, useState } from "react";
import SimpleCounter from "./simpleCounter";
import React from "react";


function App() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [counter])

    function calculateSeconds(counter, placeValue) {
        return Math.floor (counter / placeValue)%10
    }


    return (
        <>
            <SimpleCounter
                fourthDigit={calculateSeconds(counter , 1000)}
                thirdDigit={calculateSeconds(counter , 100)}
                secondDigit={calculateSeconds(counter , 10)}
                firstDigit={calculateSeconds (counter, 1)}
            />

        </>

    )
}
export default App;