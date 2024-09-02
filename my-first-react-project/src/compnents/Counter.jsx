import { useState } from "react";
const Counter = (props) => {
    const [count, setCount] = useState(1);
    const clickHandler = () => {
        setCount(count+1)
    }
    return (<>
        <h1>{count}</h1>
        <h2>{props.itemName}</h2>
    <button onClick={clickHandler}>Increment</button>
        <button onClick={() => {
            setCount(count-1)
    }}>Decrement</button>
    </>)
}
export default Counter;