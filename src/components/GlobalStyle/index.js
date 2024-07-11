import React from 'react';
import clsx from 'clsx';
import styles from './GlobalStyle.module.scss';

function GlobalStyle({ children }) {
    return <div className={clsx(styles)}>{children}</div>;
}

export default GlobalStyle;
