import React, {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    const [Style, toggleStyle] = React.useState(true);
    const controlStyle = () => {
        if(Style){
         toggleStyle(false);
        }
        else{
        toggleStyle(true);
        }
    }
    return (
        <div>
            <p style = {{color: Style ? 'white': 'red'}}>Style me!</p>
            <button onClick={controlStyle}>Toggle style</button>
        </div>
    );
}
