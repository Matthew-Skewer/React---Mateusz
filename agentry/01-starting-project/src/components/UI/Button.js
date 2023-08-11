import styles from './Button.module.css';
import React from 'react';

const Button = inter => {
    return(
        <button type={inter.type || 'button'} className={styles.button} onClick={inter.onClick}>
            {inter.children}
        </button>
    )
}

export default Button;