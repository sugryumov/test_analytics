import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Spinner } from '../../common/Spinner';
import analytic from '../../store/analytics';

export const Analytics: FC = observer(() => {
  useEffect(() => {
    analytic.fetchAnalytics();
  }, []);

  if (analytic.analyticsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {analytic.analytics.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
});
