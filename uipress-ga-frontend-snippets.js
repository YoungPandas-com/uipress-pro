// Google Analytics Chart Component Registration
// From /uipress-pro/app/dist/assets/index-CFrBb7Rd.js
{
    name: "GA charts",
    moduleName: "uip-google-analytics",
    description: "Outputs your choice of charts and options on what data to display",
    category: "Analytics",
    group: "analytics",
    icon: "bar_chart"
  }
  
  // GA Map Component
  {
    name: "GA map",
    moduleName: "uip-google-analytics-map",
    description: "Outputs your visitor data to a interactive map",
    category: "Analytics",
    group: "analytics",
    icon: "map"
  }
  
  // GA Tables Component
  {
    name: "GA tables",
    moduleName: "uip-google-analytics-tables",
    description: "Outputs your choice of tables and options on what data to display",
    category: "Analytics",
    group: "analytics",
    icon: "table_chart"
  }
  
  // GA Realtime Component
  {
    name: "GA realtime",
    moduleName: "uip-google-realtime",
    description: "Displays live visitor data about your site",
    category: "Analytics",
    group: "analytics",
    icon: "schedule"
  }
  
  // Common analytics function patterns
  getAnalytics() {
    this.loading = true;
    this.error = false;
    this.errorMessage = "";
    // Analytics data fetch logic
  }
  
  refreshAnalytics() {
    // Reset authentication and refresh data
  }
  
  // UI integration - Button replacement pattern
  button.textContent = 'Switch with Analytics Bridge';
  button.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('auth-callback-url', 'uip_analytics_auth', 'width=600,height=700');
  });
  
  // AJAX interception pattern
  if (settings.data.indexOf('action=uip_google_auth_check') !== -1) {
    console.log('Intercepting Google auth check');
    // Handle interception
  }
  else if (settings.data.indexOf('action=uip_build_google_analytics_query') !== -1) {
    console.log('Intercepting Google query build');
    // Handle interception
  }
  
  // Google Analytics integration with UIPress
  window.uip.appData.options.google_analytics = {
    connected: true,
    oauth: true,
    measurement_id: 'G-XXXXXXXXXX'
  };