/**
 * Google Analytics Component Structure in UIPress
 * Based on decompiled JS from UIPress Pro
 */

// Analytics component handling pattern
{
    props: {
      // Common props for analytics components
      block: { type: Object, default: {} },
      contextualData: { type: Object, default: {} }
    },
    
    data() {
      return {
        loading: true,
        error: false,
        errorMessage: "",
        currentRequest: {
          success: false,
          data: [],
          totalStats: { 
            users: 0, pageviews: 0, sessions: 0, 
            change: { users: 0, pageviews: 0, sessions: 0 } 
          },
          topContent: [],
          topSources: []
        },
        apiLoaded: false,
        // Other component data
      }
    },
    
    computed: {
      // Whether the API is ready for use
      isApiReady() {
        return this.hasNestedPath(this.uipApp, "googleAnalytics", "ready");
      }
    },
    
    watch: {
      // Watch for changes to analytics data
      "uipApp.googleAnalytics.ready": {
        handler(e, t) {
          this.getAnalytics();
        },
        deep: true
      },
      
      // Watch for account changes
      "uiTemplate.globalSettings.options.analytics.saveAccountToUser": {
        handler(e, t) {
          this.refreshAnalytics();
        }
      }
    },
    
    mounted() {
      // Listen for date range changes
      document.addEventListener("uipress/app/daterange/change", this.handleDateChange);
    },
    
    beforeUnmount() {
      // Clean up event listeners
      document.removeEventListener("uipress/app/daterange/change", this.handleDateChange);
    },
    
    methods: {
      // Handle date changes
      handleDateChange(e) {
        if (e.detail.IDS && Array.isArray(e.detail.IDS) && e.detail.IDS.includes(this.block.uid)) {
          this.groupDate.start = e.detail.groupDate.start;
          this.groupDate.end = e.detail.groupDate.end;
          this.getAnalytics();
        }
      },
      
      // Fetch analytics data
      async getAnalytics() {
        this.loading = true;
        this.error = false;
        this.errorMessage = "";
        
        // Check if Google Analytics is available
        if (!this.isObject(this.uipApp.googleAnalytics)) {
          this.apiLoaded = false;
          return;
        }
        
        if (!("ready" in this.uipApp.googleAnalytics)) {
          this.apiLoaded = false;
          return;
        }
        
        // Analytics fetch logic...
      },
      
      // Refresh analytics connection
      async refreshAnalytics() {
        this.uipApp.googleAnalytics.ready = false;
        await this.uipApp.googleAnalytics.api("refresh");
        this.uipApp.googleAnalytics.ready = true;
        this.getAnalytics();
      },
      
      // Remove account
      async removeAnalyticsAccount() {
        this.uipApp.googleAnalytics.ready = false;
        await this.uipApp.googleAnalytics.api("removeAccount");
        await this.uipApp.googleAnalytics.api("refresh");
        this.uipApp.googleAnalytics.ready = true;
        this.getAnalytics();
      }
    }
  }