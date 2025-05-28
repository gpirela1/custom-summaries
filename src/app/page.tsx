import Link from "next/link";
import { ChorusHeader } from "@/components/header";
import { CalendarView } from "@/components/calendar-view";
import { ContinueWatching } from "@/components/continue-watching";
import { TeamLeaderboard } from "@/components/team-leaderboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ChorusHeader />
      
      <div className="flex flex-1 p-4">
        <div className="flex-1 mr-4">
          <CalendarView />
        </div>
        
        <div className="w-80 space-y-6">
          <ContinueWatching />
          <TeamLeaderboard />
        </div>
      </div>
    </div>
  );
}
