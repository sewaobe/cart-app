import React from 'react';
import clsx from 'clsx';
import styles from './OrderItem.module.scss';
function OrderItem({ name, quantity, price, image }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.item__detail)}>
                <p className={clsx(styles.item__title)}>{name}</p>
                <div className={clsx(styles.item__quantity)}>
                    <p className={clsx(styles['item__quantity-detail'])}>
                        {quantity}
                    </p>
                    <p className={clsx(styles['item__quantity-price'])}>
                        @ {price}
                    </p>
                    <p className={clsx(styles['item__quantity-priceTotal'])}>
                        $5.50
                    </p>
                </div>
            </div>
            {true && true ? (
                <div className={clsx(styles.item__remove)}></div>
            ) : (
                <p className={clsx(styles.item__priceTotal)}></p>
            )}
        </div>
    );
}

export default OrderItem;
