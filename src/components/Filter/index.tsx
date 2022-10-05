import { FC } from 'react';
import { ANALYTICS_FILTER_LIST } from '../../constants/analyticsFilter';
import { FilterItem } from './FilterItem';
import styles from './index.module.css';

export const Filter: FC = () => (
  <ul className={styles.list}>
    {ANALYTICS_FILTER_LIST.map((item) => {
      return <FilterItem key={item.id} data={item} />;
    })}
  </ul>
);
