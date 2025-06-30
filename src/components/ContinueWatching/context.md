## Component Interface
- **ContinueWatching**: A component that displays a list of items the user can continue watching.
  - **props**:
    - `items`: `ContinueWatchingItem[]` - Array of items to show (required).
    - `data-id`: `string` - Optional data attribute.

**ContinueWatchingItem**:
  - `id`: `string` - Unique identifier for each item.
  - `title`: `string` - Title of the item.
  - `subtitle`: `string` - Subtitle of the item.
  - `thumbnailUrl`: `string` - URL for the item's thumbnail image.
  - `progress`: `number` - Progress percentage (0-100).
  - `timeRemaining`: `{ value: number, unit: 'sec' | 'mins' }` - Time remaining to watch.
  - `lastViewed`: `string` - Date when the item was last viewed.
  - `href`: `string` - URL to the item.

## Exported Components
- **ContinueWatching** - The only exported component from the file.

## Usage Examples
```javascript
import React from 'react';
import { ContinueWatching } from './src/ContinueWatching';

const items = [
  {
    id: '1',
    title: 'Jack / Gabe - Biweekly',
    subtitle: 'Gabe Pirela Meetings',
    thumbnailUrl: 'https://chorus.ai/api/meetings/thumbnail/7AFDD87122004816BD4FB6A06BF1E9CB',
    progress: 62,
    timeRemaining: { value: 14, unit: 'mins' },
    lastViewed: 'Jun 26, 2025',
    href: '/meeting/7AFDD87122004816BD4FB6A06BF1E9CB',
  },
];

function App() {
  return (
    <div>
      <ContinueWatching items={items} data-id="continue-watching-1" />
    </div>
  );
}
```

## Design Guidelines
- **Spacing**: Utilize Tailwind's spacing utilities for consistent padding (e.g., `p-3`).
- **Color Schemes**: Maintain a neutral palette with accent colors for interactions (e.g., `bg-gray-100` and `bg-[#0961FB]`).
- **Typography**: Use Tailwind's typography utilities for headings and body text (e.g., `text-lg`, `font-normal`).
- **Responsive Design**: Ensure components adapt to various screen sizes using utility classes like `flex` and responsive widths/heights.
- **Accessibility**: Include `alt` text for images and ensure sufficient color contrast for legibility.

## Styling & Behavior
- **Key Styling Props**: Utilize Tailwind classes for layout, colors, and spacing. Adjust styles based on different states (e.g., hover effects).
- **Interactive States**: Implement hover effects on links and items to enhance user experience.
- **Responsive Behavior**: Ensure fluid layouts that work on both small and large devices. Elements adjust based on screen size.
- **Dark/Light Mode Considerations**: To be implemented based on parent context styling preferences.
- **Edge Cases**: Handle an empty `items` array gracefully by displaying a message or placeholder.

## Integration Notes
- **CSS Variables**: Ensure to include the necessary Tailwind CSS imports for styles to function properly.
- **Context Providers**: No specific context providers are required for this component.
- **Integration Patterns**: Directly import and use `ContinueWatching` within responsive layouts or other components as needed.

## Best Practices
- **Usage Patterns**: Always provide valid items to avoid rendering issues.
- **Pitfalls to Avoid**: Ensure the `items` array is not undefined or null before rendering.
- **Performance Optimization**: Use React's `memo` if this component receives large datasets to prevent unnecessary re-renders.
- **Testing Recommendations**: Implement unit tests for prop types and rendering behavior.
- **Accessibility Implementation**: Always ensure accessibility attributes are included, like aria-labels for enhanced usability.
