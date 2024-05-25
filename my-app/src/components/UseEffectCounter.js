import React, {useState, useEffect} from 'react'

// refactor the ClassCounter component more elegantly using hooks

function UseEffectCounter() {
    const [count, setCount] =  useState(0);
    useEffect(() => {
        document.title = count;
    });
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
                Increment Count({count})
        </button>
    </div>
  )
}

export default UseEffectCounter