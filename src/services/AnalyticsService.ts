import { IAnalytics, TAnalyticsTypes } from "../models/IAnalytics";

const data: IAnalytics[] = [
  {
    id: 1,
    title: "Total Leads and Deals",
    count: 1600,
    price: "132000999",
    type: "Sales",
    createAt: "05.10.2022",
  },
  {
    id: 2,
    title: "Total tasks",
    count: 269,
    price: null,
    type: "Sales",
    createAt: "05.10.2022",
  },
  {
    id: 3,
    title: "Won",
    count: 45,
    price: "108000",
    type: "Marketing",
    createAt: "04.10.2022",
  },
  {
    id: 4,
    title: "Completed tasks",
    count: 115,
    price: null,
    type: "Marketing",
    createAt: "04.10.2022",
  },
  {
    id: 5,
    title: "Lost",
    count: 15,
    price: "24000",
    type: "Partners",
    createAt: "01.10.2022",
  },
  {
    id: 6,
    title: "Expired tasks",
    count: 45,
    price: null,
    type: "Partners",
    createAt: "01.10.2022",
  },
  {
    id: 7,
    title: "New leads",
    count: 115,
    price: null,
    type: "Sales",
    createAt: "07.09.2022",
  },
  {
    id: 8,
    title: "No tasks",
    count: 10,
    price: null,
    type: "Sales",
    createAt: "07.09.2022",
  },
];

export default class AnalyticsService {
  static async fetchAnalytics(type: TAnalyticsTypes): Promise<IAnalytics[]> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            type === "All Pipelines"
              ? data
              : data.filter((el) => el.type === type)
          ),
        2000
      );
    });
  }
}
