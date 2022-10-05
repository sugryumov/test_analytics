import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Empty } from '../../../components/Empty';
import { Spinner } from '../../../components/Spinner';
import { analyticsStore } from '../../../store/Analytics';
import { CardsItem } from './CardsItem';
import styles from './index.module.css';

export const Cards: FC = observer(() => {
  useEffect(() => {
    const type = analyticsStore.analyticType;
    const dateFilter = analyticsStore.analyticFilter;

    analyticsStore.fetchAnalytics(type, dateFilter);
  }, []);

  if (analyticsStore.analyticsLoading) {
    return <Spinner />;
  }

  if (analyticsStore.analytics.length === 0) {
    return <Empty />;
  }

  return (
    <div className={styles.cards}>
      {analyticsStore.analytics.map((card) => (
        <CardsItem key={card.id} data={card} />
      ))}
    </div>
  );
});
