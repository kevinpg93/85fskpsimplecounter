import React from "react";
import PropTypes from "prop-types";
//include images into your bundle


//create your first component

function SimpleCounter(props) {

    return (
        <>
            <div className="counter-display">
                <div className="clock">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                </div>
                <div className="counterOne">{props.fourthDigit}</div>
                <div className="counterTwo">{props.thirdDigit}</div>
                <div className="counterThree">{props.secondDigit}</div>
                <div className="counterFour">{props.firstDigit}</div>
            </div >

        </>

    )
}
SimpleCounter.PropTypes = {
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number,
}
export default SimpleCounter;
