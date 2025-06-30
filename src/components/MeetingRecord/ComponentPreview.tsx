'use client'

import React, { Component } from 'react'
import { MeetingRecord } from './MeetingRecord'

const SAMPLE_PARTICIPANTS = [
  {
    name: "Pargles Dall'Oglio",
    avatarUrl: 'https://example.com/avatar1.jpg',
  },
  {
    name: 'John Doe',
  },
  {
    name: 'Jane Smith',
  },
  // ... more participants
]

export function ComponentPreview() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <MeetingRecord
        time="9:58 AM"
        title="Record"
        status="processing"
        participants={SAMPLE_PARTICIPANTS}
        isVideoEnabled={false}
        isRecordingEnabled={false}
        onToggleRecording={() => console.log('Toggle recording')}
        onToggleVideo={() => console.log('Toggle video')}
      />
    </div>
  )
}
