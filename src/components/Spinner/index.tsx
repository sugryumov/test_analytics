import { FC } from 'react';
import { Spinner as SVGSpin } from '../SVGIcons';
import styles from './index.module.css';

export const Spinner: FC = () => (
  <div className={styles.spinner}>
    <SVGSpin />
  </div>
);
