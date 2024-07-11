import React from 'react';
import clsx from 'clsx';
import styles from './CakeShop.module.scss';
function CakeShop() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.product)}></div>
            <div className={clsx(styles.myCart)}></div>
        </div>
    );
}

export default CakeShop;
