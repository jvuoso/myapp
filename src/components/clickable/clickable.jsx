import { useState } from "react"

const ClickableComponent = () => {
    const [count, setCount] = useState(0);
    const [timestamp, setTimestamp] = useState(new Date());

    function updateCount() {
        setCount(count+1);
        setTimestamp(new Date().toString());
    }

    return (
        <div>
            <span>Clicks: {count}. Ultimo click: {timestamp.toString()}</span>
            <button type="button" onClick={updateCount}>Increment count</button>
        </div>

    );
}
 
export default ClickableComponent;