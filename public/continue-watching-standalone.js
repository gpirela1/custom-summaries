// Continue Watching Component Standalone Script
(function() {
  'use strict';

  // Sample data for Continue Watching
  const SAMPLE_ITEMS = [
    {
      id: '1',
      title: 'Jack / Gabe - Biweekly',
      subtitle: 'Gabe Pirela Meetings',
      thumbnailUrl: 'https://chorus.ai/api/meetings/thumbnail/7AFDD87122004816BD4FB6A06BF1E9CB',
      progress: 62,
      timeRemaining: {
        value: 14,
        unit: 'mins'
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
        unit: 'mins'
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
        unit: 'mins'
      },
      lastViewed: 'Jun 25, 2025',
      href: '/meeting/C463EC3694144C6BA2DFF368F590F099',
    }
  ];

  // ContinueWatching React Component
  function ContinueWatching({ items, 'data-id': dataId }) {
    return React.createElement('div', {
      'data-id': dataId,
      className: 'flex flex-col bg-white h-[386px] w-[271.5px] border border-[#D9DDE4] rounded-[10px] p-3 overflow-auto'
    }, [
      React.createElement('h3', {
        key: 'title',
        className: 'text-lg leading-6 font-normal mb-3'
      }, 'Continue Watching'),
      React.createElement('div', {
        key: 'items',
        className: 'flex flex-col gap-3'
      }, items.map(item => 
        React.createElement('a', {
          key: item.id,
          href: item.href,
          className: 'block text-[#010D39] hover:no-underline'
        }, React.createElement('div', {
          className: 'h-[92px] bg-white flex gap-3 border border-[#D9DDE4] rounded-[10px] p-2'
        }, [
          React.createElement('div', {
            key: 'thumbnail-section',
            className: 'flex flex-col gap-1'
          }, [
            React.createElement('img', {
              key: 'thumbnail',
              src: item.thumbnailUrl,
              alt: '',
              className: 'w-[76px] h-[84px] flex-1 bg-[#EDF3FF] rounded-[6px] object-cover'
            }),
            React.createElement('div', {
              key: 'progress-bg',
              className: 'bg-[#E5E7EC] w-[76px] h-1 rounded-lg'
            }, React.createElement('div', {
              className: 'h-1 bg-[#0961FB] rounded-lg',
              style: { width: `${item.progress}%` }
            }))
          ]),
          React.createElement('div', {
            key: 'content-section',
            className: 'flex flex-col justify-between flex-1'
          }, [
            React.createElement('div', {
              key: 'titles',
              className: 'flex flex-col items-start'
            }, [
              React.createElement('div', {
                key: 'title',
                className: 'text-xs leading-[18px] font-medium text-[#010D39]'
              }, item.title),
              React.createElement('div', {
                key: 'subtitle',
                className: 'text-xs leading-[18px] font-medium text-[#546B8F]'
              }, item.subtitle)
            ]),
            React.createElement('div', {
              key: 'footer',
              className: 'flex items-end justify-between'
            }, [
              React.createElement('div', {
                key: 'time-remaining',
                className: 'bg-[#E6EFFF] text-[11px] leading-[18px] text-[#546B8F] rounded-[6px] px-1'
              }, [
                React.createElement('span', { key: 'value' }, item.timeRemaining.value),
                React.createElement('span', { key: 'unit' }, ` ${item.timeRemaining.unit}`),
                ' left'
              ]),
              React.createElement('div', {
                key: 'last-viewed',
                className: 'text-xs leading-[18px] text-[#546B8F]',
                title: 'Date last viewed'
              }, item.lastViewed)
            ])
          ])
        ]))
      ))
    ]);
  }

  // Function to render the component
  function renderContinueWatching() {
    const targetDiv = document.getElementById('continue-watching-container');
    if (targetDiv && typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
      const root = ReactDOM.createRoot ? ReactDOM.createRoot(targetDiv) : null;
      const component = React.createElement(ContinueWatching, {
        items: SAMPLE_ITEMS,
        'data-id': 'continue-watching-main'
      });
      
      if (root) {
        root.render(component);
      } else {
        ReactDOM.render(component, targetDiv);
      }
      
      console.log('ContinueWatching component rendered successfully');
    } else {
      console.error('Failed to render ContinueWatching: Missing target div or React libraries');
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderContinueWatching);
  } else {
    renderContinueWatching();
  }

  // Also try to render after a short delay to ensure React is loaded
  setTimeout(renderContinueWatching, 100);
})();
