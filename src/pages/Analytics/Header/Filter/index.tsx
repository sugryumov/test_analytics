import { FC } from 'react';
import { FILTER_LIST } from './filterList';
import { FilterItem } from './FilterItem';
import styles from './index.module.css';

export const Filter: FC = () => (
  <ul className={styles.list}>
    {FILTER_LIST.map((item) => {
      return <FilterItem key={item.id} data={item} />;
    })}
  </ul>
);
