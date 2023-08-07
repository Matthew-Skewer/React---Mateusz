import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [count,clickCount] = React.useState(0);
    let countUp = () => {
    
        clickCount(prevstate => prevstate+1);
    }
    return (
      <div>
        <p id="counter">{count}</p>
        <button onClick={countUp}>Increment</button>
      </div>
    );
}
