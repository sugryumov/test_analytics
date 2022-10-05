import { makeAutoObservable } from "mobx";
import { IAnalytics, TAnalyticsTypes } from "../models/IAnalytics";
import AnalyticsService from "../services/AnalyticsService";

class Analytics {
  analytics: IAnalytics[] = [];
  analyticsLoading: boolean = false;
  analyticType: TAnalyticsTypes = "All Pipelines";

  constructor() {
    makeAutoObservable(this);
  }

  setAnalyticType(type: TAnalyticsTypes) {
    this.analyticType = type;
  }

  setAnalytics(analytics: IAnalytics[]) {
    this.analytics = analytics;
  }

  setAnalyticsLoading(loading: boolean) {
    this.analyticsLoading = loading;
  }

  async fetchAnalytics(type: TAnalyticsTypes = "All Pipelines") {
    this.setAnalyticsLoading(true);
    try {
      const response = await AnalyticsService.fetchAnalytics(type);

      console.log("response", response);

      this.setAnalytics(response);
    } catch (err) {
      console.log(err);
    } finally {
      this.setAnalyticsLoading(false);
    }
  }
}

export default new Analytics();
