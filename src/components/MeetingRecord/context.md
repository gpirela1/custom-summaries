## Component Interface
- **MeetingRecordProps**
  - `time: string` - Required. Represents the meeting time.
  - `title: string` - Required. Title of the meeting.
  - `status?: 'processing' | 'completed' | 'failed'` - Optional. Current status of the meeting, defaults to 'processing'.
  - `participants: Participant[]` - Required. An array of participants in the meeting.
  - `isVideoEnabled?: boolean` - Optional. Indicate if video is enabled, defaults to false.
  - `isRecordingEnabled?: boolean` - Optional. Indicate if recording is enabled, defaults to false.
  - `onToggleRecording?: () => void` - Optional. Callback when recording toggle changes.
  - `onToggleVideo?: () => void` - Optional. Callback when video toggle is activated.
  - `'data-id'?: string` - Optional. Custom data attribute for testing.

## Exported Components
- `MeetingRecord`

## Usage Examples
```jsx
import React from 'react';
import { MeetingRecord } from './src/MeetingRecord';

const SAMPLE_PARTICIPANTS = [
  { name: "Pargles Dall'Oglio", avatarUrl: 'https://example.com/avatar1.jpg' },
  { name: 'John Doe' },
  { name: 'Jane Smith' },
];

const App = () => (
  <MeetingRecord
    time="9:58 AM"
    title="Team Sync"
    status="completed"
    participants={SAMPLE_PARTICIPANTS}
    isVideoEnabled={true}
    isRecordingEnabled={true}
    onToggleRecording={() => console.log('Toggle recording')}
    onToggleVideo={() => console.log('Toggle video')}
  />
);
```

```jsx
import React from 'react';
import { MeetingRecord } from './src/MeetingRecord';

const App = () => (
  <MeetingRecord
    time="10:00 AM"
    title="Sales Discussion"
    participants={[{ name: 'Alex Johnson' }]}
    isVideoEnabled={false}
    onToggleVideo={() => console.log('Toggle video')}
  />
);
```

## Design Guidelines
- Use a padding of 4 units around components.
- Maintain a light color scheme with contrasting elements.
- Utilize typography that is legible; recommend using sans-serif fonts for clarity.
- Ensure good visual hierarchy by differentiating titles and statuses through font weight and color.
- Follow responsive design principles to ensure components adapt gracefully on different screen sizes.
- Avoid using excessive color combinations; keep it simple and consistent.
- Ensure interactions are accessible (e.g., using proper labels and keyboard navigation support).

## Styling & Behavior
- Key styling props include `isVideoEnabled` and `isRecordingEnabled` for toggling interactive components.
- The component adjusts to different states: loading, error, and success should be elegantly indicated, preferably through visual feedback (like loading spinners or status icons).
- Supports responsiveness through Tailwind CSS classes, adapting to different device sizes.
- Makes use of hover states for buttons to enhance interactivity.
- The component defaults to light mode but should consider support for dark mode if necessary.
- Handle edge cases such as no participants gracefully by displaying a default state.

## Integration Notes
- Ensure CSS variables from Tailwind are included and not deleted from the style imports in `index.css`.
- Integrate context providers where necessary for global states.
- Use the export pattern consistently to ensure maintainability and ease of access for other components within the system.

## Best Practices
- Follow component patterns that encourage reusability; avoid duplicating code as much as possible.
- Watch for common pitfalls like misuse of props or neglecting default values which can lead to errors.
- Optimize performance by memoizing components where suitable.
- Incorporate tests to validate props and check rendering logic, especially for state changes.
- Follow accessibility guidelines to ensure all interactive elements are usable by all users, including keyboard navigation and screen reader support.
