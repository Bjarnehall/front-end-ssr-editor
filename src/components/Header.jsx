import {useState, useEffect } from "react";

const colorCat = "limegreen";
const colorEye = "yellow";

function Cat ({ viewBox }) {
    const [eyeColor, setColor] = useState(colorEye);
    useEffect(() => {
        const interval = setInterval(() => {
            setColor(colorCat);
            setTimeout(() => setColor(colorEye), 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg width="100%" height="100%" viewBox={viewBox}>
            <circle r="12" cx="40" cy="40" fill={colorCat}/>
            <circle r="8" cx="40" cy="22" fill={colorCat}/>
            <circle r="2.5" cx="43.5" cy="21" fill={eyeColor} />
            <circle r="2.5" cx="36.5" cy="21" fill={eyeColor} />
            <polygon points="34,10 33,20 38,15" fill={colorCat} />
            <polygon points="46,10 48,20 42,15" fill={colorCat} />
            <text x="60" y="40" fill={colorCat} font-size="30" font-family="sans-serif">LOST IN REACT</text>
            <text x="200" y="55" fill="white" font-size="15" font-family="sans-serif">The Editor</text>
        </svg>
    );
}

function Header() {
    const [viewBox] = useState("0 0 1000 60");
    return (
        <div className="header">
            <Cat viewBox={viewBox}/>
        </div>
    )
}
export default Header