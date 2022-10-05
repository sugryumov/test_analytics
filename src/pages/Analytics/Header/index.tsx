import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { analyticsStore } from '../../../store/Analytics';
import { TAnalyticsTypes } from '../../../models/IAnalytics';
import { Dropdown } from '../../../components/Dropdown';
import { DROPDOWN_LIST } from './dropdownList';
import { Filter } from './Filter';
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
        dropdownList={DROPDOWN_LIST}
        onChangeDropdown={onChangeDropdown}
      />

      <Filter />
    </header>
  );
});
