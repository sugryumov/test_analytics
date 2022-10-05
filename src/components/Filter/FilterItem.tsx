import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { TAnalyticsFilter } from '../../models/IAnalytics';
import { IDictionaries } from '../../models/IDictionaries';
import { analyticsStore } from '../../store/analytics';
import styles from './index.module.css';

interface IFilterProps {
  data: IDictionaries<TAnalyticsFilter>;
}

export const FilterItem: FC<IFilterProps> = observer(({ data }) => {
  const handleClickActiveFilter = (filter: TAnalyticsFilter) => () => {
    const type = analyticsStore.analyticType;

    analyticsStore.setAnalyticFilter(filter);
    analyticsStore.fetchAnalytics(type, filter);
  };

  return (
    <li
      className={
        analyticsStore.analyticFilter === data.name
          ? `${styles.active} ${styles.item}`
          : styles.item
      }
      onClick={handleClickActiveFilter(data.name)}
    >
      {data.name}
    </li>
  );
});
