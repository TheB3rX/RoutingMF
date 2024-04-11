import React, { useState } from 'react'
import "./Counter.css"
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className='counter'>
            <h3>Count: {count}</h3>
            <section >
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </section>
        </div>
    )
}

export default Counter
