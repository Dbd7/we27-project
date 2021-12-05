import React, { useEffect, useState } from "react"
import { clockBar } from "./clockBar.module.css"

const ClockBar = () => {
    const firstRender = new Date();
    const [time, setTime] = useState(firstRender);
    useEffect(() => {
        const interval = setInterval(getCurrentTime, 1000);
        return () => {
            clearInterval(interval);
        }
    })

    const getCurrentTime = () => {
        const loadTime = new Date();
        setTime(loadTime);
    }


    return (
            <p className={clockBar}>{`${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`}</p>
    )
}

export default ClockBar;