import React, { FC } from 'react';
import styles from './index.module.css';

export const Empty: FC = () => (
  <div className={styles.empty}>
    <p className={styles.text}>No data, try changing the filter</p>
  </div>
);
