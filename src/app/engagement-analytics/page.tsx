import { ChorusHeader } from "@/components/header";
import { AnalyticsHeader } from "@/components/engagement-analytics/analytics-header";
import { EngagementFunnel } from "@/components/engagement-analytics/engagement-funnel";
import { MissedConversion } from "@/components/engagement-analytics/missed-conversion";

export default function EngagementAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Navigation Header */}
      <ChorusHeader />
      
      {/* Analytics Page Header */}
      <AnalyticsHeader />
      
      {/* Content Area */}
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Engagement Funnel Section */}
          <EngagementFunnel />
          
          {/* Missed Conversion Section */}
          <MissedConversion />
        </div>
      </main>
    </div>
  );
}
