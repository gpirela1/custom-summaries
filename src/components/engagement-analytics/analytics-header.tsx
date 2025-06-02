import { FileDown } from "lucide-react";

export function AnalyticsHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Title and sync info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-semibold text-gray-900">
                ZoomInfo Copilot Analytics
              </h1>
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                Beta
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Last Sync: May 29th 2025, 1:34 PM UTC
            </div>
          </div>
          
          {/* Right side - Export button */}
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FileDown className="w-4 h-4 mr-2" />
            Export to PDF
          </button>
        </div>
      </div>
    </div>
  );
}
