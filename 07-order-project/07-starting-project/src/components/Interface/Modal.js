import React, {Fragment} from "react";
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = inter => {
    return <div className={classes.backdrop} onClick={inter.onHideCart}></div>
};

const ModalOverlay = inter => {
    return <div className={classes.modal}>
    <div className={classes.content}>{inter.children}</div>
    </div>
}

const assistPort = document.getElementById('overlays');

const Modal = inter => {
    return <Fragment>
    {ReactDOM.createPortal(<Backdrop onHideCart={inter.onHideCart}/>, assistPort)}
    {ReactDOM.createPortal(<ModalOverlay>{inter.children}</ModalOverlay>, assistPort)}
    </Fragment>
}

export default Modal;