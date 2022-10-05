import { EAnalyticsFilterName } from '../constants/analyticsFilter';

const dateToString = (day: number) => {
  const today = new Date();
  today.setDate(today.getDate() - day);

  return today.toDateString();
};

export const convertNameToDate = (value: string) => {
  switch (value) {
    case EAnalyticsFilterName.YESTERDAY: {
      return dateToString(1);
    }

    case EAnalyticsFilterName.WEEK: {
      return dateToString(7);
    }

    case EAnalyticsFilterName.MONTH: {
      return dateToString(30);
    }

    default:
      return dateToString(0);
  }
};
