// TeamLeaderboard Standalone Component
(function() {
  'use strict';

  // Check if React is available
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error('React or ReactDOM not found. Please include React before this script.');
    return;
  }

  const { useState, useEffect } = React;

  // TeamLeaderboard Component
  const TeamLeaderboard = ({ title, subtitle, members, onMemberClick, className = '', 'data-id': dataId }) => {
    return React.createElement(
      'div',
      {
        className: `w-full bg-white text-black font-sans ${className}`,
        'data-id': dataId
      },
      React.createElement(
        'div',
        { className: 'p-4 pb-8' },
        React.createElement(
          'div',
          { className: 'px-2 pb-2' },
          React.createElement(
            'h3',
            { className: 'text-[18px] leading-7 font-medium text-[rgba(18,31,51,0.87)] mb-2' },
            title
          ),
          React.createElement(
            'p',
            { className: 'text-sm leading-5 text-[rgba(18,31,51,0.6)]' },
            subtitle
          )
        ),
        React.createElement(
          'div',
          null,
          members.map((member) =>
            React.createElement(
              'div',
              { key: member.id, className: 'relative' },
              React.createElement(
                'a',
                {
                  href: '#',
                  onClick: (e) => {
                    e.preventDefault();
                    if (onMemberClick) onMemberClick(member.id);
                  },
                  className: 'flex items-center p-6 pl-4 border-b border-[rgb(229,231,236)] hover:bg-gray-50 transition-colors'
                },
                React.createElement(
                  'div',
                  { className: 'text-right mr-3 min-w-[32px]' },
                  React.createElement(
                    'h3',
                    { className: 'text-[18px] leading-7 font-normal text-[rgb(82,95,118)]' },
                    `#${member.rank}`
                  )
                ),
                React.createElement(
                  'div',
                  {
                    className: 'w-[42px] h-[42px] rounded-full flex items-center justify-center border border-white',
                    style: {
                      backgroundColor: member.backgroundColor || '#A34C5F'
                    }
                  },
                  member.imageUrl
                    ? React.createElement('img', {
                        src: member.imageUrl,
                        alt: member.name,
                        className: 'w-[40px] h-[40px] rounded-full'
                      })
                    : React.createElement(
                        'span',
                        { className: 'text-white uppercase' },
                        member.initials
                      )
                ),
                React.createElement(
                  'div',
                  { className: 'flex-1 min-w-0 px-4' },
                  React.createElement(
                    'p',
                    { className: 'text-sm font-medium text-[rgb(18,21,26)] truncate m-0' },
                    member.name
                  ),
                  React.createElement(
                    'p',
                    { className: 'text-sm font-normal text-[rgb(82,95,118)] truncate m-0' },
                    `${member.callCount} ${member.callCount === 1 ? 'call' : 'calls'}`
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  // Sample data matching the existing HTML
  const SAMPLE_MEMBERS = [
    {
      id: '1',
      name: 'Brahmjot Singh Kohli',
      rank: 1,
      callCount: 4,
      initials: 'BS',
      backgroundColor: '#00BCD4'
    }
  ];

  // Component with trophy message for single member
  const TeamLeaderboardWithTrophy = () => {
    return React.createElement(
      'div',
      { className: 'bg-white rounded-lg shadow-sm p-4 w-[271.5px]' },
      React.createElement(TeamLeaderboard, {
        title: "Darrell Grissen's Team Leaderboard",
        subtitle: "Calls During Last 7 Days",
        members: SAMPLE_MEMBERS,
        onMemberClick: (id) => {
          console.log('Clicked member:', id);
        }
      }),
      // Trophy section for single member
      SAMPLE_MEMBERS.length < 2 && React.createElement(
        'div',
        { className: 'mt-4 pt-4 border-t border-gray-100' },
        React.createElement(
          'div',
          { className: 'flex items-center justify-center py-2' },
          React.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              className: 'h-5 w-5 text-yellow-500 mr-2',
              fill: 'none',
              viewBox: '0 0 24 24',
              stroke: 'currentColor'
            },
            React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '2',
              d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
            })
          ),
          React.createElement(
            'p',
            { className: 'text-sm text-gray-500' },
            'Make more calls to appear on the leaderboard'
          )
        )
      )
    );
  };

  // Initialize component when DOM is ready
  function initializeTeamLeaderboard() {
    const container = document.getElementById('team-leaderboard-container');
    if (container) {
      ReactDOM.render(React.createElement(TeamLeaderboardWithTrophy), container);
      console.log('TeamLeaderboard component rendered successfully');
    } else {
      console.warn('TeamLeaderboard container not found');
    }
  }

  // Initialize immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTeamLeaderboard);
  } else {
    initializeTeamLeaderboard();
  }

  // Export for global access if needed
  window.TeamLeaderboard = TeamLeaderboard;
})();
