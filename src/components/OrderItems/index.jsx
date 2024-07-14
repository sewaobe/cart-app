import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './OrderItems.module.scss';
import OrderItem from './OrderItem';

function OrderItems({ productOrders, submitOrder, ...props }) {
    let valueTotal = 0;

    return (
        <div className={clsx(styles.wrapper)}>
            {productOrders.length
                ? productOrders.map((product, index) => {
                      valueTotal += product.quantity * product.price;

                      return (
                          <OrderItem
                              key={index}
                              image={product.image}
                              name={product.name}
                              quantity={product.quantity}
                              price={product.price}
                              setProductOrders={props.setProductOrders}
                              submitOrder={submitOrder}
                          ></OrderItem>
                      );
                  })
                : console.log('No products order')}

            <div className={clsx(styles.orderTotal)}>
                <p className={clsx(styles.title)} style={{}}>
                    Order Total
                </p>
                <p className={clsx(styles.totalValue)}>
                    ${valueTotal.toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default OrderItems;
