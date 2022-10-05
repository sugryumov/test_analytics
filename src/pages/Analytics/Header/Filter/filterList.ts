import { EAnalyticsFilterName } from '../../../../enums/analyticsFilter';
import { TAnalyticsFilter } from '../../../../models/IAnalytics';
import { IDictionaries } from '../../../../models/IDictionaries';

export const FILTER_LIST: IDictionaries<TAnalyticsFilter>[] = [
  {
    id: 1,
    name: EAnalyticsFilterName.MONTH,
  },
  {
    id: 2,
    name: EAnalyticsFilterName.WEEK,
  },
  {
    id: 3,
    name: EAnalyticsFilterName.YESTERDAY,
  },
  {
    id: 4,
    name: EAnalyticsFilterName.TODAY,
  },
];
