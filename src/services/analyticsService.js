class AnalyticsService {
  constructor() {
    this.metrics = new Map();
  }
  
  trackEvent(eventName, data) {
    const timestamp = Date.now();
    if (!this.metrics.has(eventName)) {
      this.metrics.set(eventName, []);
    }
    this.metrics.get(eventName).push({ ...data, timestamp });
  }
  
  getMetrics(eventName, startDate, endDate) {
    const events = this.metrics.get(eventName) || [];
    return events.filter(e => 
      e.timestamp >= startDate && e.timestamp <= endDate
    );
  }
  
  getSummary() {
    const summary = {};
    for (const [eventName, events] of this.metrics.entries()) {
      summary[eventName] = {
        count: events.length,
        lastEvent: events[events.length - 1]?.timestamp
      };
    }
    return summary;
  }
}

module.exports = new AnalyticsService();
