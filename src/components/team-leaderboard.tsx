import { Trophy } from "lucide-react";

// Mock data for team leaderboard
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Brahmjot Singh Kohli",
    initials: "BS",
    calls: 4,
    color: "#00BCD4"
  }
];

export function TeamLeaderboard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-medium mb-2">Darrell Grissen's Team Leaderboard</h2>
      <p className="text-sm text-gray-500 mb-4">Calls During Last 7 Days</p>
      
      <div className="space-y-4">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={member.id} className="flex items-center">
            <div className="flex-shrink-0 mr-3 text-gray-500 font-medium">
              #{index + 1}
            </div>
            
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
              style={{ backgroundColor: member.color }}
            >
              {member.initials}
            </div>
            
            <div className="ml-3 flex-1">
              <div className="font-medium">{member.name}</div>
              <div className="text-sm text-gray-500">{member.calls} calls</div>
            </div>
          </div>
        ))}
      </div>
      
      {TEAM_MEMBERS.length < 2 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center py-2">
            <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
            <p className="text-sm text-gray-500">
              Make more calls to appear on the leaderboard
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
