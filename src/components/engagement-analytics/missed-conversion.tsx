export function MissedConversion() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Missed Conversion
        </h3>
        
        {/* Large number display */}
        <div className="text-4xl font-bold text-gray-900 mb-3">
          16
        </div>
        
        {/* Description text */}
        <p className="text-gray-600 mb-4">
          Acting on 16 unactioned target accounts could increase your conversion
        </p>
        
        {/* Action button */}
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View Unactioned Accounts
        </button>
      </div>
    </div>
  );
}
