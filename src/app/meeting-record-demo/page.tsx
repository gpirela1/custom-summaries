import React from 'react'
import { ComponentPreview } from '../../components/MeetingRecord/ComponentPreview'

export default function MeetingRecordDemo() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          MeetingRecord Component Demo
        </h1>
        <ComponentPreview />
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Component Features:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Displays meeting time, title, and status</li>
            <li>Shows participant information with avatar support</li>
            <li>Interactive recording toggle switch</li>
            <li>Video toggle button</li>
            <li>Meeting brief section with icon</li>
            <li>Responsive grid layout</li>
            <li>Tailwind CSS styling</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
