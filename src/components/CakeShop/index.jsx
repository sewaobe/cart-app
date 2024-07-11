import React from 'react';
import clsx from 'clsx';
import styles from './CakeShop.module.scss';
import Product from '../Product';
const productItems = require('~/assets/data/data.json');
function CakeShop() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.product)}>
                <header>Desserts</header>
                <div className={clsx(styles.container__product)}>
                    {productItems.map((item, index) => {
                        return (
                            <Product
                                key={index}
                                title={item.name}
                                type={item.category}
                                price={item.price}
                                image={item.image.desktop}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={clsx(styles.myCart)}></div>
        </div>
    );
}

export default CakeShop;
