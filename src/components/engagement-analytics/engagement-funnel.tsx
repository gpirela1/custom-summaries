"use client";

import { useState } from "react";
import { Info } from "lucide-react";

export function EngagementFunnel() {
  const [activeView, setActiveView] = useState<"accounts" | "signals">("accounts");

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Engagement Funnel - Target Accounts
          </h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Info className="w-4 h-4" />
          </button>
        </div>
        
        {/* Toggle buttons */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveView("accounts")}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-colors
              ${activeView === "accounts"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
              }
            `}
          >
            Accounts
          </button>
          <button
            onClick={() => setActiveView("signals")}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-colors
              ${activeView === "signals"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
              }
            `}
          >
            Signals
          </button>
        </div>
      </div>
      
      {/* Content area - blank as requested */}
      <div className="h-64 flex items-center justify-center text-gray-400">
        <p>Chart content area</p>
      </div>
    </div>
  );
}
