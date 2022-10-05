import { makeAutoObservable } from 'mobx';
import { EAnalyticsDropdownName } from '../enums/analyticsDropdown';
import { EAnalyticsFilterName } from '../enums/analyticsFilter';
import { IAnalytics, TAnalyticsFilter, TAnalyticsTypes } from '../models/IAnalytics';
import AnalyticsService from '../services/AnalyticsService';

class Analytics {
  analytics: IAnalytics[] | null = null;
  analyticsLoading: boolean = false;
  analyticType: TAnalyticsTypes = EAnalyticsDropdownName.ALL_PIPELINES;
  analyticFilter: TAnalyticsFilter = EAnalyticsFilterName.MONTH;

  constructor() {
    makeAutoObservable(this);
  }

  setAnalyticType(type: TAnalyticsTypes) {
    this.analyticType = type;
  }

  setAnalyticFilter(filter: TAnalyticsFilter) {
    this.analyticFilter = filter;
  }

  setAnalytics(analytics: IAnalytics[]) {
    this.analytics = analytics;
  }

  setAnalyticsLoading(loading: boolean) {
    this.analyticsLoading = loading;
  }

  async fetchAnalytics(type: TAnalyticsTypes, filter: TAnalyticsFilter) {
    this.setAnalyticsLoading(true);
    try {
      const response = await AnalyticsService.fetchAnalytics(type, filter);

      this.setAnalytics(response);
    } catch (err) {
      console.log(err);
    } finally {
      this.setAnalyticsLoading(false);
    }
  }
}

export const analyticsStore = new Analytics();
