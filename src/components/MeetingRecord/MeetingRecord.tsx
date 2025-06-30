'use client'

import React from 'react'
import { User, Video, FileText } from 'lucide-react'

interface Participant {
  name: string
  avatarUrl?: string
}

interface MeetingRecordProps {
  time: string
  title: string
  status?: 'processing' | 'completed' | 'failed'
  participants: Participant[]
  isVideoEnabled?: boolean
  isRecordingEnabled?: boolean
  onToggleRecording?: () => void
  onToggleVideo?: () => void
  'data-id'?: string
}

export const MeetingRecord: React.FC<MeetingRecordProps> = ({
  time,
  title,
  status = 'processing',
  participants = [],
  isVideoEnabled = false,
  isRecordingEnabled = false,
  onToggleRecording,
  onToggleVideo,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      className="grid grid-cols-10 gap-6 p-4 bg-gray-50 border border-blue-500 rounded-lg my-3 h-[72px] cursor-pointer w-full"
    >
      {/* Time */}
      <div className="flex items-center pl-8">
        <p className="text-gray-600 text-sm">{time}</p>
      </div>

      {/* Title & Status */}
      <div className="col-span-3 flex items-center">
        <div className="flex-1 min-w-0">
          <p className="text-gray-400 font-medium text-sm truncate">{title}</p>
          <p className="text-gray-400 text-sm truncate">
            <span className="bg-gray-100 px-2 py-0.5 rounded mr-1 lowercase">
              {status}
            </span>
            <span>Engagement Team: Standup</span>
          </p>
        </div>
      </div>

      {/* Meeting Brief */}
      <div className="col-span-2 flex items-center">
        <div className="flex items-center gap-2 text-blue-600">
          <p className="text-sm">Meeting Brief</p>
          <FileText size={16} />
        </div>
      </div>

      {/* Participants */}
      <div className="col-span-2 flex items-center">
        <div className="flex items-center">
          <div className="relative h-[30px] w-[30px] mr-1">
            {participants[0]?.avatarUrl ? (
              <img
                src={participants[0].avatarUrl}
                alt={participants[0].name}
                className="h-[28px] w-[28px] rounded-full border border-white"
              />
            ) : (
              <div className="h-[30px] w-[30px] bg-purple-500 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-900 text-sm truncate">
              {participants[0]?.name || 'Unknown'}
            </p>
          </div>
          {participants.length > 1 && (
            <span className="ml-1 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">
              +{participants.length - 1}
            </span>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="col-span-2 flex items-center gap-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isRecordingEnabled}
            onChange={onToggleRecording}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <button
          onClick={onToggleVideo}
          className="text-gray-500 hover:text-gray-700"
        >
          <Video size={22} />
        </button>
      </div>
    </div>
  )
}
