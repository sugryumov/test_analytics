import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Empty } from '../../../components/Empty';
import { Spinner } from '../../../components/Spinner';
import { analyticsStore } from '../../../store/Analytics';

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
    <div>
      {analyticsStore.analytics.map((el) => (
        <p key={el.id}>
          {el.title} {el.createAt}
        </p>
      ))}
    </div>
  );
});
