import React from 'react';
import clsx from 'clsx';
import styles from './OrderItem.module.scss';
function OrderItem({ name, quantity, price, image, ...props }) {
    var handleRemove = () => {
        props.setProductOrders(prev => {
            return [...prev].filter(item => item.name !== name);
        });
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.box)}>
                {props.submitOrder && (
                    <img
                        src={image}
                        alt="noImage"
                        className={clsx(styles.image)}
                    />
                )}

                <div className={clsx(styles.item__detail)}>
                    <p className={clsx(styles.item__title)}>{name}</p>
                    <div className={clsx(styles.item__quantity)}>
                        <p className={clsx(styles['item__quantity-detail'])}>
                            {quantity}x
                        </p>
                        <p className={clsx(styles['item__quantity-price'])}>
                            @ ${price}
                        </p>
                        {!props.submitOrder && (
                            <p
                                className={clsx(
                                    styles['item__quantity-priceTotal']
                                )}
                            >
                                ${(Number(quantity) * Number(price)).toFixed(2)}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {true && props.submitOrder ? (
                <p
                    style={{
                        display: 'inline-block',
                        fontSize: '16px',
                        color: 'hsl(14, 65%, 9%)',
                        fontWeight: '700',
                    }}
                >
                    ${(Number(quantity) * Number(price)).toFixed(2)}
                </p>
            ) : (
                <div
                    className={clsx(styles.item__remove)}
                    onClick={handleRemove}
                ></div>
            )}
        </div>
    );
}

export default OrderItem;
