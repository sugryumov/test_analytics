export type TAnalyticsTypes = 'All Pipelines' | 'Sales' | 'Marketing' | 'Partners';

export interface IAnalytics {
  id: number;
  title: string;
  count: number;
  price: string | null;
  type: TAnalyticsTypes;
  createAt: string;
}
