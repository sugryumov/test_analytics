import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { ANALYTICS_DROPDOWN_LIST } from '../../constants/analyticsDropdown';
import { TAnalyticsTypes } from '../../models/IAnalytics';
import { Dropdown } from '../../common/Dropdown';
import { Filter } from '../Filter';
import { analyticsStore } from '../../store/analytics';
import styles from './index.module.css';

export const Header: FC = observer(() => {
  const onChangeDropdown = (value: string) => {
    const filterDate = analyticsStore.analyticFilter;

    analyticsStore.setAnalyticType(value as TAnalyticsTypes);
    analyticsStore.fetchAnalytics(value as TAnalyticsTypes, filterDate);
  };

  return (
    <header className={styles.header}>
      <Dropdown
        value={analyticsStore.analyticType}
        dropdownList={ANALYTICS_DROPDOWN_LIST}
        onChangeDropdown={onChangeDropdown}
      />

      <Filter />
    </header>
  );
});
