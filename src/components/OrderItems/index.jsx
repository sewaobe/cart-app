import React from 'react';
import OrderItem from './OrderItem';

function OrderItems({ productOrders }) {
    return (
        <>
            {productOrders.length
                ? productOrders.map((product, index) => {
                      return (
                          <OrderItem
                              key={index}
                              image={product.children[0].src}
                              name={product.children[1].innerText}
                              quantity="1x"
                              price={product.children[3].innerText}
                          ></OrderItem>
                      );
                  })
                : console.log('No products order')}
        </>
    );
}

export default OrderItems;
