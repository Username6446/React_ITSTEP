import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SmartClock.css";

function SmartClock({ 
    bgColors = { morning: "yellow", day: "blue", night: "black" }, 
    showDate = false, 
    fontStyles = { fontFamily: "sans-serif", fontSize: "2rem", color: "white" } 
}) {
    console.log("SmartClock render");

    const [time, setTime] = useState(new Date());



    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const currentHour = time.getHours();
    let timeOfDay = "night";

    if (currentHour >= 6 && currentHour < 12) {
        timeOfDay = "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = "day";
    }

    const backgroundColor = bgColors[timeOfDay];

    return (
        <div 
            className="clock-box" 
            style={{ 
                backgroundColor: backgroundColor,
                fontFamily: fontStyles.fontFamily,
                fontSize: fontStyles.fontSize,
                color: fontStyles.color
            }}
        >
            <div>{time.toLocaleTimeString()}</div>

            {showDate && (
                <div className="clock-date">
                    {time.toLocaleDateString()}
                </div>
            )}
        </div>
    );
}


SmartClock.propTypes = {
    bgColors: PropTypes.shape({
        morning: PropTypes.string,
        day: PropTypes.string,
        night: PropTypes.string
    }),
    showDate: PropTypes.bool,
    fontStyles: PropTypes.shape({
        fontFamily: PropTypes.string,
        fontSize: PropTypes.string,
        color: PropTypes.string
    })
};

export default SmartClock;