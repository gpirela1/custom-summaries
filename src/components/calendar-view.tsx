"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Filter, Mic } from "lucide-react";
import { format, addDays, startOfWeek } from "date-fns";

// Mock data for meetings
const MEETINGS = [
  {
    id: 1,
    time: "9:56 AM",
    title: "Record Demos + Sprint planning + kick off",
    type: "Meeting Recap",
    participant: "Pargles Da Costa",
    participantInitials: "PD",
    duration: "36 Mins",
    attendees: 13
  },
  {
    id: 2,
    time: "12:00 PM",
    title: "AI Emailer Intro",
    type: "",
    participant: "Chris Dalia",
    participantInitials: "CD",
    duration: "",
    attendees: 3
  },
  {
    id: 3,
    time: "12:58 PM",
    title: "Adobe Systems",
    subtitle: "no show Zoominfo/Adobe Systems",
    type: "Meeting Brief",
    participant: "Donny Thomas",
    participantInitials: "DT",
    duration: "",
    attendees: 5
  },
  {
    id: 4,
    time: "2:00 PM",
    title: "Copilot CI E2E Eng & Integrations Sync",
    type: "",
    participant: "Arelai Ephraim",
    participantInitials: "AE",
    duration: "",
    attendees: 9
  }
];

export function CalendarView() {
  const [currentDate] = useState(new Date(2025, 4, 27)); // May 27, 2025
  
  // Generate week days starting from Sunday
  const weekStart = startOfWeek(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </button>
          <h2 className="mx-4 text-lg font-medium">May, 2025</h2>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </button>
          <button className="ml-4 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md">
            TODAY
          </button>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-2">
            <div className="flex items-center border rounded-md px-3 py-1.5">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Gabe Pirela"
                className="ml-2 outline-none text-sm w-32"
              />
              <button className="ml-1 text-gray-400">
                ✕
              </button>
            </div>
          </div>
          
          <button className="p-1 rounded-md hover:bg-gray-100">
            <Filter className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 px-4 pb-2">
        {weekDays.map((day, index) => {
          const dayNum = day.getDate();
          const isToday = dayNum === 27; // May 27 is today
          const isActive = dayNum === 27; // May 27 is selected
          
          return (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-500 mb-1">
                {format(day, "EEEE")}
              </div>
              <div 
                className={`chorus-calendar-day ${isToday ? 'today' : ''} ${isActive ? 'active' : ''}`}
              >
                {dayNum}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="border-t mt-2">
        <div className="p-4">
          <div className="space-y-3">
            {MEETINGS.map((meeting) => (
              <div key={meeting.id} className="chorus-meeting-item">
                <div className="flex">
                  <div className="w-16 text-gray-500 font-medium">
                    {meeting.time}
                    <div className="text-xs mt-1">
                      {meeting.time.includes("AM") ? "AM" : "PM"}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{meeting.title}</h4>
                        {meeting.subtitle && (
                          <p className="text-sm text-gray-500">{meeting.subtitle}</p>
                        )}
                      </div>
                      
                      {meeting.duration && (
                        <div className="text-sm text-gray-500">
                          {meeting.duration}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center mt-2">
                      {meeting.type && (
                        <div className="flex items-center mr-3">
                          <Mic className="h-4 w-4 text-blue-600 mr-1" />
                          <span className="text-xs text-blue-600">{meeting.type}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white`}>
                          {meeting.participantInitials}
                        </div>
                        <span className="ml-2 text-sm">{meeting.participant}</span>
                        
                        {meeting.attendees > 0 && (
                          <span className="ml-2 text-xs text-blue-600">+{meeting.attendees}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
