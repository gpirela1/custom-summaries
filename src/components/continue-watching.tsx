import { BarChart2 } from "lucide-react";

export function ContinueWatching() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-medium mb-4">Continue Watching</h2>
      
      <div className="flex justify-center items-center h-40">
        <div className="flex flex-col items-center">
          <div className="flex space-x-1 mb-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={i} 
                className="chorus-audio-bar" 
                style={{ 
                  height: `${Math.max(10, Math.min(40, Math.random() * 40))}px`,
                  backgroundColor: i % 2 === 0 ? '#1976D2' : '#90CAF9'
                }}
              />
            ))}
          </div>
          <BarChart2 className="text-chorus-blue h-6 w-6 mb-2" />
          <p className="text-sm text-gray-500 text-center">
            Your recently watched recordings will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
