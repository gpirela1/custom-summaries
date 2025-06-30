import React, { Component } from 'react'
import { ContinueWatching } from './ContinueWatching'

const SAMPLE_ITEMS = [
  {
    id: '1',
    title: 'Jack / Gabe - Biweekly',
    subtitle: 'Gabe Pirela Meetings',
    thumbnailUrl:
      'https://chorus.ai/api/meetings/thumbnail/7AFDD87122004816BD4FB6A06BF1E9CB',
    progress: 62,
    timeRemaining: {
      value: 14,
      unit: 'mins' as const,
    },
    lastViewed: 'Jun 26, 2025',
    href: '/meeting/7AFDD87122004816BD4FB6A06BF1E9CB',
  },
  {
    id: '2',
    title: 'Gabe Pirela Meetings - 06/24',
    subtitle: 'Gabe Pirela Meetings',
    thumbnailUrl:
      'https://chorus.ai/api/meetings/thumbnail/C9E7F89C946146699A878784A5031E1F',
    progress: 37,
    timeRemaining: {
      value: 19,
      unit: 'mins' as const,
    },
    lastViewed: 'Jun 26, 2025',
    href: '/meeting/C9E7F89C946146699A878784A5031E1F',
  },
  {
    id: '3',
    title: 'Engagement Team: Standup',
    subtitle: 'Record',
    thumbnailUrl:
      'https://chorus.ai/api/meetings/thumbnail/C463EC3694144C6BA2DFF368F590F099',
    progress: 0,
    timeRemaining: {
      value: 13,
      unit: 'mins' as const,
    },
    lastViewed: 'Jun 25, 2025',
    href: '/meeting/C463EC3694144C6BA2DFF368F590F099',
  },
]

export function ComponentPreview() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <ContinueWatching items={SAMPLE_ITEMS} />
    </div>
  )
}
