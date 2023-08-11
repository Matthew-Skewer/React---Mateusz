import React from 'react';
import ErrorStyle from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
const ErrorModal = inter => {
return <div>
    <div className={ErrorStyle.backdrop} onClick={inter.onConfirm}/>
<Card className = {ErrorStyle.modal}>
    <header className={ErrorStyle.header}>
        <h2>{inter.title}</h2>
    </header>
    <div className={ErrorStyle.content}>
        <p>{inter.message}</p>
    </div>
    <footer className={ErrorStyle.actions}>
        <Button onClick={inter.onConfirm}>Okay</Button>
    </footer>
</Card>
</div> 
}

export default ErrorModal;