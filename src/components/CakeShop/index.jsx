import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './CakeShop.module.scss';
import Product from '../Product';
import OrderItems from '../OrderItems';
const productItems = require('~/assets/data/data.json');

function CakeShop() {
    const [productOrders, setProductOrders] = useState([]);
    const [btnSubmit, setBtnSubmit] = useState(false);

    return (
        <>
            <div
                className={clsx(styles.wrapper)}
                style={
                    true && btnSubmit
                        ? { pointerEvents: 'none' }
                        : { pointerEvents: 'auto' }
                }
            >
                <div className={clsx(styles.product)}>
                    <header>Desserts</header>
                    <div className={clsx(styles.container__product)}>
                        {productItems.map((item, index) => {
                            return (
                                <Product
                                    key={index}
                                    title={item.name}
                                    type={item.category}
                                    price={item.price.toFixed(2)}
                                    image={item.image.desktop}
                                    quantity={
                                        !!productOrders.find(
                                            e => e.name === item.name
                                        )
                                            ? productOrders[
                                                  productOrders.findIndex(
                                                      e => e.name === item.name
                                                  )
                                              ].quantity
                                            : 0
                                    }
                                    exitsOfProductOrder={
                                        !!productOrders.find(
                                            e => e.name === item.name
                                        )
                                    }
                                    setProductOrders={setProductOrders}
                                />
                            );
                        })}
                    </div>
                </div>
                {productOrders.length > 0 ? (
                    <div
                        className={clsx(styles.myCart)}
                        style={{ backgroundImage: 'none' }}
                    >
                        <header>Your Cart ({productOrders.length})</header>

                        <div className={clsx(styles.container__myCart)}>
                            <OrderItems
                                productOrders={productOrders}
                                setProductOrders={setProductOrders}
                                submitOrder={false}
                            />
                        </div>
                        <div className={clsx(styles.des__myCart)}>
                            <p className={clsx(styles['des__myCart--content'])}>
                                This is a <strong>carbon-neutral</strong>{' '}
                                delivery
                            </p>
                        </div>

                        <button
                            className={clsx(styles.btnSubmit__myCart)}
                            onClick={e => {
                                if (productOrders.length > 0) {
                                    setBtnSubmit(!btnSubmit);
                                }
                            }}
                        >
                            Confirm Order
                        </button>
                    </div>
                ) : (
                    <div className={clsx(styles.myCart)}>
                        <header>Your Cart ({productOrders.length})</header>
                        <div className={clsx(styles.container__myCart)}>
                            <p
                                style={{
                                    color: 'hsl(12, 20%, 44%)',
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: '143px',
                                }}
                            >
                                Your added items will appear here
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {btnSubmit && (
                <div className={clsx(styles.toastOrder)}>
                    <h1 className={clsx(styles.toastOrder__header)}>
                        Order Confirmed
                    </h1>
                    <p className={clsx(styles.toastOrder__content)}>
                        We hope you enjoy your food!
                    </p>
                    <div className={clsx(styles.toastOrder__container)}>
                        <OrderItems
                            productOrders={productOrders}
                            setProductOrders={setProductOrders}
                            submitOrder={true}
                        />
                    </div>
                    <button
                        className={clsx(styles.btnSubmit__myCart)}
                        onClick={e => {
                            e.preventDefault();
                            setBtnSubmit(!btnSubmit);
                            setProductOrders([]);
                        }}
                    >
                        Start New Order
                    </button>
                </div>
            )}
        </>
    );
}

export default CakeShop;
