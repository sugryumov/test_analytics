import { EAnalyticsDropdownName } from '../enums/analyticsDropdown';
import { EAnalyticsFilterName } from '../enums/analyticsFilter';

export type TAnalyticsTypes = `${EAnalyticsDropdownName}`;
export type TAnalyticsFilter = `${EAnalyticsFilterName}`;

export interface IAnalytics {
  id: number;
  title: string;
  count: number;
  price: string | null;
  type: TAnalyticsTypes;
  createAt: string;
}
