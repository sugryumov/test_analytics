import { EAnalyticsDropdownName } from '../enums/analyticsDropdown';
import { IAnalytics, TAnalyticsFilter, TAnalyticsTypes } from '../models/IAnalytics';
import { convertNameToDate } from '../utils/prepareDate';

const data: IAnalytics[] = [
  {
    id: 1,
    title: 'Total Leads and Deals',
    count: 1600,
    price: '132000999',
    type: 'Sales',
    createAt: '10.05.2022',
  },
  {
    id: 2,
    title: 'Total tasks',
    count: 269,
    price: null,
    type: 'Sales',
    createAt: '10.05.2022',
  },
  {
    id: 3,
    title: 'Won',
    count: 45,
    price: '108000',
    type: 'Marketing',
    createAt: '10.04.2022',
  },
  {
    id: 4,
    title: 'Completed tasks',
    count: 115,
    price: null,
    type: 'Marketing',
    createAt: '10.04.2022',
  },
  {
    id: 5,
    title: 'Lost',
    count: 15,
    price: '24000',
    type: 'Partners',
    createAt: '10.01.2022',
  },
  {
    id: 6,
    title: 'Expired tasks',
    count: 45,
    price: null,
    type: 'Partners',
    createAt: '10.01.2022',
  },
  {
    id: 7,
    title: 'New leads',
    count: 115,
    price: null,
    type: 'Sales',
    createAt: '09.07.2022',
  },
  {
    id: 8,
    title: 'No tasks',
    count: 10,
    price: null,
    type: 'Sales',
    createAt: '09.07.2022',
  },
];

export default class AnalyticsService {
  static async fetchAnalytics(
    type: TAnalyticsTypes,
    filter: TAnalyticsFilter
  ): Promise<IAnalytics[]> {
    return new Promise((resolve) => {
      const requestDate = convertNameToDate(filter);
      const requestDateWithTime = new Date(requestDate);
      const requestMilliseconds = requestDateWithTime.getTime();

      const filteredByDate = data.filter(({ createAt }) => {
        const recordDate = new Date(createAt);
        const recordMilliseconds = recordDate.getTime();

        return recordMilliseconds >= requestMilliseconds;
      });

      setTimeout(
        () =>
          resolve(
            type === EAnalyticsDropdownName.ALL_PIPELINES
              ? filteredByDate
              : filteredByDate.filter((el) => el.type === type)
          ),
        1000
      );
    });
  }
}
