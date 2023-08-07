import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [title, titname] = React.useState('Invalid'); 
    const nameControl = (event)=>{
        const value = event.target.value;
        
        if(value.trim().length<3){
            titname('Invalid');
        }
        else{
            titname('Valid');
            
        }
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={nameControl}/>
            <p>{title} message</p>
        </form>
    );
}
