export default GoogleAnalyticsPlugin = (store) => {
  store.subscribeAction((action, state) => {
    if (
      action.payload.analytics &&
      typeof action.payload.analytics === 'object' &&
      action.payload.analytics.action &&
      action.payload.analytics.category) {
      if (action.payload.analytics.action === 'timing_complete') {
         gtag('event', action.payload.analytics.action, {
          'name' : action.payload.analytics.label || action.payload.analytics.name,
          'event_category' : action.payload.analytics.category,
          'value' : action.payload.analytics.value,
      });
      } else {
        gtag('event', action.payload.analytics.action, {
        'event_category': action.payload.analytics.category,
        'event_label': action.payload.analytics.label,
        'value': action.payload.analytics.value
      });
      }
    };
  })
}
