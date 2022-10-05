import { FC } from 'react';
import { IAnalytics } from '../../../../models/IAnalytics';
import styles from './index.module.css';

interface ICardsItemProps {
  data: IAnalytics;
}

export const CardsItem: FC<ICardsItemProps> = ({ data }) => {
  const { color, title, count, price } = data;

  const formatPrice = Number(price).toLocaleString('ru', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });

  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ backgroundColor: color }}></div>

      <div className={styles.info}>
        <p className={styles.title} style={{ color }}>
          {title}
        </p>
        <p className={styles.count}>
          {count}{' '}
          {price && (
            <span className={styles.price}>
              <b>|</b> {formatPrice}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
