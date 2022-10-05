import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Dropdown } from "../../common/Dropdown";
import { ANALYTICS_DROPDOWN_LIST } from "../../constants/analyticsDropdown";
import { TAnalyticsTypes } from "../../models/IAnalytics";
import analytic from "../../store/analytics";
import styles from "./index.module.css";

export const Header: FC = observer(() => {
  const onChangeDropdown = (value: string) => {
    analytic.fetchAnalytics(value as TAnalyticsTypes);
  };

  return (
    <header className={styles.header}>
      <Dropdown
        value={analytic.analyticType}
        dropdownList={ANALYTICS_DROPDOWN_LIST}
        onChangeDropdown={onChangeDropdown}
      />
    </header>
  );
});
