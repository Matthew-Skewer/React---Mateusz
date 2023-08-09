import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [csClass, switchCsClass] = React.useState(false);
        const switchClass = () => {
            if(!csClass){
            switchCsClass(true);
            }
            else{
                switchCsClass(false);
            }
        }
        
    return (
    
        <div >
            <p className={`${csClass ? 'active' : ''}`}>Style me!</p>
            <button onClick={switchClass}>Toggle style</button>
        </div>
    );
}
