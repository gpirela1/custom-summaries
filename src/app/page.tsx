'use client'

import React from 'react'
import { MeetingRecord } from '../components/MeetingRecord'
import { TeamLeaderboard } from '../components/TeamLeaderboard'
import { ContinueWatching } from '../components/ContinueWatching'

const CONTINUE_WATCHING_DATA = [
  {
    id: '1',
    title: 'Jack / Gabe - Biweekly',
    subtitle: 'Gabe Pirela Meetings',
    thumbnailUrl: 'https://chorus.ai/api/meetings/thumbnail/7AFDD87122004816BD4FB6A06BF1E9CB',
    progress: 62,
    timeRemaining: {
      value: 14,
      unit: 'mins' as const
    },
    lastViewed: 'Jun 26, 2025',
    href: '/meeting/7AFDD87122004816BD4FB6A06BF1E9CB',
  },
  {
    id: '2',
    title: 'Gabe Pirela Meetings - 06/24',
    subtitle: 'Gabe Pirela Meetings',
    thumbnailUrl: 'https://chorus.ai/api/meetings/thumbnail/C9E7F89C946146699A878784A5031E1F',
    progress: 37,
    timeRemaining: {
      value: 19,
      unit: 'mins' as const
    },
    lastViewed: 'Jun 26, 2025',
    href: '/meeting/C9E7F89C946146699A878784A5031E1F',
  },
  {
    id: '3',
    title: 'Engagement Team: Standup',
    subtitle: 'Record',
    thumbnailUrl: 'https://chorus.ai/api/meetings/thumbnail/C463EC3694144C6BA2DFF368F590F099',
    progress: 0,
    timeRemaining: {
      value: 13,
      unit: 'mins' as const
    },
    lastViewed: 'Jun 25, 2025',
    href: '/meeting/C463EC3694144C6BA2DFF368F590F099',
  }
]

const MEETING_DATA = [
  {
    time: "9:00 AM",
    title: "Salesforce Discovery Call - Data Quality Initiative",
    status: "processing" as const,
    participants: [
      { name: "Sarah Martinez" },
      { name: "John Smith" },
      { name: "Mike Johnson" },
      { name: "Lisa Chen" },
      { name: "David Wilson" }
    ],
    isVideoEnabled: false,
    isRecordingEnabled: true,
    meetingId: 'meeting1'
  },
  {
    time: "11:30 AM",
    title: "HubSpot Demo: Intent Data & Lead Scoring",
    status: "completed" as const,
    participants: [
      { name: "Mike Johnson" },
      { name: "Jennifer Walsh" },
      { name: "Tom Anderson" }
    ],
    isVideoEnabled: true,
    isRecordingEnabled: false,
    meetingId: 'meeting2'
  },
  {
    time: "1:00 PM",
    title: "Microsoft Contract Negotiation - Enterprise Package",
    status: "processing" as const,
    participants: [
      { name: "Amanda Chen" },
      { name: "Robert Kim" },
      { name: "Sarah Martinez" },
      { name: "David Liu" }
    ],
    isVideoEnabled: false,
    isRecordingEnabled: true,
    meetingId: 'meeting3'
  }
]

export default function HomePage() {
  const handleToggleRecording = (meetingId: string) => {
    console.log(`Toggle recording for ${meetingId}`)
  }

  const handleToggleVideo = (meetingId: string) => {
    console.log(`Toggle video for ${meetingId}`)
  }

  const openMeeting = (meetingId: string) => {
    window.location.href = 'meeting.html'
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-xl">Chorus</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              GP
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Content Area */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Today's Meetings</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                {MEETING_DATA.map((meeting) => (
                  <div key={meeting.meetingId} onClick={() => openMeeting(meeting.meetingId)}>
                    <MeetingRecord
                      time={meeting.time}
                      title={meeting.title}
                      status={meeting.status}
                      participants={meeting.participants}
                      isVideoEnabled={meeting.isVideoEnabled}
                      isRecordingEnabled={meeting.isRecordingEnabled}
                      onToggleRecording={() => handleToggleRecording(meeting.meetingId)}
                      onToggleVideo={() => handleToggleVideo(meeting.meetingId)}
                      data-id={meeting.meetingId}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-80 space-y-6">
            <ContinueWatching
              items={CONTINUE_WATCHING_DATA}
              data-id="continue-watching-main"
            />
            <TeamLeaderboard
              title="Darrell Grissen's Team Leaderboard"
              subtitle="Calls During Last 7 Days"
              members={[
                {
                  id: '1',
                  name: 'Brahmjot Singh Kohli',
                  rank: 1,
                  callCount: 4,
                  initials: 'BS',
                  backgroundColor: '#00BCD4'
                }
              ]}
              onMemberClick={(id) => console.log('Clicked member:', id)}
              className="bg-white rounded-lg shadow-sm p-4"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
