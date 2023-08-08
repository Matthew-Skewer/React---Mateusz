import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [removal, setRemoval] = React.useState(false)
    const warningHandler = () => {
        setRemoval(true);
    }
    const proceeder = () => {
        setRemoval(false);
    }
    return (
      <div>
        {removal ? <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceeder}>Proceed</button>
        </div> : ''}
        <button onClick={warningHandler}>Delete</button>
      </div>    
    );
}