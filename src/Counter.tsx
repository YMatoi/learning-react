import React, { useState } from 'react';

type CounterProps = {
    count: number;
}

const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(props.count)

    function increment() { setCount(count + 1) }
    function decrement() { setCount(count - 1) }

    return (
        <div>
            <button onClick={increment}>increment</button>
            {count}
            <button onClick={decrement}>decrement</button>
        </div>
    );
}

export default Counter;