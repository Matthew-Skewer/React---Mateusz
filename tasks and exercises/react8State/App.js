import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    
    const [discount, setDiscount] = React.useState('$100');
    
    const deprice = () =>{
    setDiscount('$75');
    console.log(discount)
    };
    
    return (
        <div>
            <p>{discount}</p>
            <button onClick={deprice}>Apply Discount</button>
        </div>
    );
}
