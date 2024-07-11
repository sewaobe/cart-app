import React from 'react';
import clsx from 'clsx';
import styles from './Product.module.scss';
function Product({ title, type, price, image }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.image)}>
                <img src={image}></img>
                <button>Add to Cart</button>
            </div>
            <p className={clsx(styles.type)}>{type}</p>
            <p className={clsx(styles.title)}>{title}</p>
            <p className={clsx(styles.price)}>{price}</p>
        </div>
    );
}

export default Product;
