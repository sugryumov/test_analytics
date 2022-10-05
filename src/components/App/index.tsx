import { FC } from 'react';
import { Analytics } from '../../pages/Analytics';
import styles from './index.module.css';

export const App: FC = () => (
  <div className={styles.container}>
    <Analytics />
  </div>
);
