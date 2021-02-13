import React, { useState } from 'react';

type CounterProps = {
    count: number;
    increment: () => void;
    decrement: () => void;

}

const Counter = (props: CounterProps) => {
    return (
        <div>
            {props.count}
            <button onClick={props.increment}>increment</button>
            <button onClick={props.decrement}>decrement</button>
        </div>
    );
}

export default Counter;