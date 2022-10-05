import { EAnalyticsDropdownName } from '../../../enums/analyticsDropdown';
import { TAnalyticsTypes } from '../../../models/IAnalytics';
import { IDictionaries } from '../../../models/IDictionaries';

export const DROPDOWN_LIST: IDictionaries<TAnalyticsTypes>[] = [
  {
    id: 1,
    name: EAnalyticsDropdownName.ALL_PIPELINES,
  },
  {
    id: 2,
    name: EAnalyticsDropdownName.SALES,
  },
  {
    id: 3,
    name: EAnalyticsDropdownName.MARKETING,
  },
  {
    id: 4,
    name: EAnalyticsDropdownName.PARTNERS,
  },
];
