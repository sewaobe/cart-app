import React, { useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './CakeShop.module.scss';
import Product from '../Product';
import OrderItems from '../OrderItems';
const productItems = require('~/assets/data/data.json');

function CakeShop() {
    const [productOrders, setProductOrders] = useState([]);
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
                                setProductOrders={setProductOrders}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={clsx(styles.myCart)}>
                <header>Your Cart</header>
                <OrderItems productOrders={productOrders} />
                <div className={clsx(styles.container__myCart)}></div>
                <div className={clsx(styles.des__myCart)}></div>
            </div>
        </div>
    );
}

export default CakeShop;
