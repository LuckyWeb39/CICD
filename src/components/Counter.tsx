import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = (value: number) => {
        setCount(value)
    }

    return (
        <div>
            <h3>Counter</h3>
            <div>{count}</div>
            <div>
                <button onClick={() => handleClick(count + 1)}>+</button>
                <button onClick={() => handleClick(count - 1)}>-</button>
            </div>
        </div>
    )
}