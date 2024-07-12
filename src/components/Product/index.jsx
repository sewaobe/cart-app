import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './Product.module.scss';
function Product({ title, type, price, image, ...props }) {
    const [selected, setSelected] = useState(true);
    const [productQuantitySelected, setProductQuantitySelected] = useState(0);
    const productRef = useRef(null);
    var incProduct = () => {
        setProductQuantitySelected(productQuantitySelected + 1);
    };
    var decProduct = () => {
        setProductQuantitySelected(productQuantitySelected - 1);
    };

    useEffect(() => {
        if (productQuantitySelected > 0) {
            props.setProductOrders(prev => {
                return [...prev, productRef.current];
            });
        }
        if (productQuantitySelected === 0) {
            props.setProductOrders(prev => {
                return [...prev].filter(
                    prevItem => prevItem !== productRef.current
                );
            });
            setSelected(true);
            setProductQuantitySelected(0);
        }
    }, [productQuantitySelected]);

    return (
        <div ref={productRef} className={clsx(styles.wrapper)}>
            <div className={clsx(styles.image)}>
                <img
                    src={image}
                    alt="NoImage"
                    style={
                        true && selected
                            ? { border: 'none' }
                            : { border: '2px solid hsl(14, 86%, 42%)' }
                    }
                />
                {true && selected ? (
                    <button
                        className={clsx(styles.productNoSelected)}
                        onClick={() => {
                            setSelected(!selected);
                            setProductQuantitySelected(1);
                        }}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className={clsx(styles.productSelected)}>
                        <button
                            className={clsx(styles.decButton)}
                            onClick={decProduct}
                        ></button>
                        {productQuantitySelected}
                        <button
                            className={clsx(styles.incButton)}
                            onClick={incProduct}
                        ></button>
                    </div>
                )}
            </div>
            <p className={clsx(styles.type)}>{type}</p>
            <p className={clsx(styles.title)}>{title}</p>
            <p className={clsx(styles.price)}>${price}</p>
        </div>
    );
}

export default Product;
