// Standalone React component for the HTML page
const { useState, createElement: h } = React;

// MeetingRecord Component
function MeetingRecord({ 
  time, 
  title, 
  status = 'processing', 
  participants = [], 
  isVideoEnabled = false, 
  isRecordingEnabled = false, 
  onToggleRecording, 
  onToggleVideo,
  onClick,
  'data-id': dataId 
}) {
  return h('div', {
    'data-id': dataId,
    className: "grid grid-cols-10 gap-6 p-4 bg-gray-50 border border-gray-200 hover:border-blue-500 rounded-lg my-3 h-[72px] cursor-pointer w-full hover:shadow-sm transition-all",
    onClick: onClick
  }, [
    // Time
    h('div', { className: "flex items-center pl-8", key: 'time' }, [
      h('p', { className: "text-gray-600 text-sm" }, time)
    ]),
    
    // Title & Status
    h('div', { className: "col-span-3 flex items-center", key: 'title' }, [
      h('div', { className: "flex-1 min-w-0" }, [
        h('p', { className: "text-gray-400 font-medium text-sm truncate" }, title),
        h('p', { className: "text-gray-400 text-sm truncate" }, [
          h('span', { className: "bg-gray-100 px-2 py-0.5 rounded mr-1 lowercase" }, status),
          h('span', {}, "Engagement Team: Standup")
        ])
      ])
    ]),
    
    // Meeting Brief
    h('div', { className: "col-span-2 flex items-center", key: 'brief' }, [
      h('div', { className: "flex items-center gap-2 text-blue-600" }, [
        h('p', { className: "text-sm" }, "Meeting Brief"),
        h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }, [
          h('path', { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
          h('polyline', { points: "14,2 14,8 20,8" }),
          h('line', { x1: "16", y1: "13", x2: "8", y2: "13" }),
          h('line', { x1: "16", y1: "17", x2: "8", y2: "17" }),
          h('polyline', { points: "10,9 9,9 8,9" })
        ])
      ])
    ]),
    
    // Participants
    h('div', { className: "col-span-2 flex items-center", key: 'participants' }, [
      h('div', { className: "flex items-center" }, [
        h('div', { className: "relative h-[30px] w-[30px] mr-1" }, [
          participants[0]?.avatarUrl ? 
            h('img', {
              src: participants[0].avatarUrl,
              alt: participants[0].name,
              className: "h-[28px] w-[28px] rounded-full border border-white"
            }) :
            h('div', { className: "h-[30px] w-[30px] bg-purple-500 rounded-full flex items-center justify-center" }, [
              h('svg', {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "text-white"
              }, [
                h('path', { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                h('circle', { cx: "12", cy: "7", r: "4" })
              ])
            ])
        ]),
        h('div', { className: "min-w-0 flex-1" }, [
          h('p', { className: "text-gray-900 text-sm truncate" }, participants[0]?.name || 'Unknown')
        ]),
        participants.length > 1 && h('span', { 
          className: "ml-1 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded" 
        }, `+${participants.length - 1}`)
      ])
    ]),
    
    // Controls
    h('div', { className: "col-span-2 flex items-center gap-4", key: 'controls' }, [
      h('label', { 
        className: "relative inline-flex items-center cursor-pointer",
        onClick: (e) => e.stopPropagation() // Prevent row click when toggling
      }, [
        h('input', {
          type: "checkbox",
          checked: isRecordingEnabled,
          onChange: (e) => {
            e.stopPropagation();
            onToggleRecording && onToggleRecording();
          },
          className: "sr-only peer"
        }),
        h('div', { 
          className: "w-10 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600" 
        })
      ]),
      h('button', {
        onClick: (e) => {
          e.stopPropagation();
          onToggleVideo && onToggleVideo();
        },
        className: "text-gray-500 hover:text-gray-700"
      }, [
        h('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          width: "22",
          height: "22",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }, [
          h('polygon', { points: "23 7 16 12 23 17 23 7" }),
          h('rect', { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" })
        ])
      ])
    ])
  ]);
}

// Meeting data for all meetings
const meetingsData = [
  {
    id: 'meeting1',
    time: "9:00 AM",
    title: "Salesforce Discovery Call - Data Quality Initiative",
    status: "processing",
    participants: [
      { name: "Sarah Martinez" },
      { name: "John Smith" },
      { name: "Mike Johnson" },
      { name: "Lisa Chen" },
      { name: "David Wilson" }
    ],
    isVideoEnabled: false,
    isRecordingEnabled: true
  },
  {
    id: 'meeting2',
    time: "11:30 AM",
    title: "HubSpot Demo: Intent Data & Lead Scoring",
    status: "completed",
    participants: [
      { name: "Mike Johnson" },
      { name: "Jennifer Walsh" },
      { name: "Tom Anderson" }
    ],
    isVideoEnabled: true,
    isRecordingEnabled: false
  },
  {
    id: 'meeting3',
    time: "1:00 PM",
    title: "Microsoft Contract Negotiation - Enterprise Package",
    status: "processing",
    participants: [
      { name: "Amanda Chen" },
      { name: "Robert Kim" },
      { name: "Sarah Martinez" },
      { name: "David Liu" }
    ],
    isVideoEnabled: false,
    isRecordingEnabled: true
  },
  {
    id: 'meeting4',
    time: "2:30 PM",
    title: "Zoom Expansion Discussion - Marketing Intelligence Add-on",
    status: "completed",
    participants: [
      { name: "David Liu" },
      { name: "Michael Chen" },
      { name: "Lisa Park" }
    ],
    isVideoEnabled: true,
    isRecordingEnabled: true
  },
  {
    id: 'meeting5',
    time: "4:00 PM",
    title: "Stripe Initial Outreach - Sales Intelligence Platform",
    status: "processing",
    participants: [
      { name: "Rachel Kim" },
      { name: "Alex Johnson" }
    ],
    isVideoEnabled: false,
    isRecordingEnabled: false
  },
  {
    id: 'meeting6',
    time: "5:30 PM",
    title: "Internal: Q2 Pipeline Review & Account Strategy",
    status: "completed",
    participants: [
      { name: "Jennifer Walsh" },
      { name: "Mark Thompson" },
      { name: "Sarah Martinez" },
      { name: "David Liu" },
      { name: "Amanda Chen" },
      { name: "Mike Johnson" }
    ],
    isVideoEnabled: false,
    isRecordingEnabled: false
  }
];

// Navigation function
function navigateToMeeting(meetingId) {
  console.log(`Opening meeting: ${meetingId}`);
  window.location.href = 'meeting.html';
}

// Toggle functions
function handleToggleRecording(meetingId) {
  console.log(`Toggle recording for ${meetingId}`);
}

function handleToggleVideo(meetingId) {
  console.log(`Toggle video for ${meetingId}`);
}

// Mount all meeting components
function mountMeetingRecords() {
  meetingsData.forEach(meeting => {
    const container = document.getElementById(`react-meeting-${meeting.id}`);
    if (container) {
      const root = ReactDOM.createRoot(container);
      root.render(h(MeetingRecord, {
        ...meeting,
        onToggleRecording: () => handleToggleRecording(meeting.id),
        onToggleVideo: () => handleToggleVideo(meeting.id),
        onClick: () => navigateToMeeting(meeting.id),
        'data-id': meeting.id
      }));
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountMeetingRecords);
} else {
  mountMeetingRecords();
}
