import React from 'react';
import clsx from 'clsx';
import styles from './Product.module.scss';

function Product({
    title,
    type,
    price,
    image,
    quantity,
    exitsOfProductOrder,
    ...props
}) {
    var handleOrderUpdate = typeUpdate => {
        typeUpdate === 'inc' ? quantity++ : quantity--;

        props.setProductOrders(prev => {
            const idProduct = [...prev].findIndex(item => item.name === title);
            if (quantity === 0)
                return [...prev].filter(item => item.name !== title);

            if (idProduct >= 0) {
                [...prev][idProduct].quantity = quantity;
                return [...prev];
            }
        });
    };
    var handleOrderNew = () => {
        props.setProductOrders(prev => {
            const products = {
                image,
                type,
                name: title,
                price,
                quantity: 1,
            };

            return [...prev, products];
        });
    };

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.image)}>
                <img
                    src={image}
                    alt="NoImage"
                    style={
                        true && exitsOfProductOrder
                            ? { border: '2px solid hsl(14, 86%, 42%)' }
                            : { border: 'none' }
                    }
                />
                {true && exitsOfProductOrder ? (
                    <div className={clsx(styles.productSelected)}>
                        <button
                            className={clsx(styles.decButton)}
                            onClick={e => {
                                e.preventDefault();
                                handleOrderUpdate('dec');
                            }}
                        ></button>
                        {quantity}
                        <button
                            className={clsx(styles.incButton)}
                            onClick={e => {
                                e.preventDefault();

                                handleOrderUpdate('inc');
                            }}
                        ></button>
                    </div>
                ) : (
                    <button
                        className={clsx(styles.productNoSelected)}
                        onClick={e => {
                            e.preventDefault();

                            handleOrderNew();
                        }}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
            <p className={clsx(styles.type)}>{type}</p>
            <p className={clsx(styles.title)}>{title}</p>
            <p className={clsx(styles.price)}>${price}</p>
        </div>
    );
}

export default Product;
