// Sidebar toggle functionality
function toggleSidebar() {
  const layout = document.querySelector('.meeting-layout');
  const isExpanded = layout.classList.contains('sidebar-expanded');
  
  if (isExpanded) {
    layout.classList.remove('sidebar-expanded');
    localStorage.setItem('sidebarExpanded', 'false');
  } else {
    layout.classList.add('sidebar-expanded');
    localStorage.setItem('sidebarExpanded', 'true');
  }
}

// Tab switching functionality
function switchTab(tabName) {
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Hide all tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Add active class to clicked button
  event.target.classList.add('active');
  
  // Show selected tab panel
  const targetPanel = document.getElementById(tabName + '-tab');
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
  
  // Load content if needed
  loadTabContent(tabName);
}

// Load content for specific tabs
function loadTabContent(tabName) {
  switch(tabName) {
    case 'comments':
      loadCommentsTab();
      break;
    case 'transcript':
      loadTranscriptTab();
      break;
    case 'detailed':
      // Content is already in HTML
      break;
    case 'overview':
      // Content is already in HTML
      break;
  }
}

// Load comments tab content
function loadCommentsTab() {
  const tab = document.getElementById('comments-tab');
  if (tab.dataset.loaded) return;
  
  // Check if meetingData exists and has comments
  if (typeof meetingData !== 'undefined' && meetingData.comments) {
    let html = '<div class="content-section">';
    
    meetingData.comments.forEach(comment => {
      const initials = comment.author.split(' ').map(n => n[0]).join('');
      html += `
        <div class="comment-item">
          <div class="comment-header">
            <div class="comment-avatar">${initials}</div>
            <div class="comment-meta">
              <span class="comment-author">${comment.author}</span>
              <span class="comment-time">${comment.timestamp}</span>
            </div>
          </div>
          <p class="comment-content">${comment.content}</p>
        </div>
      `;
    });
    
    html += '</div>';
    tab.innerHTML = html;
  } else {
    // Fallback content
    tab.innerHTML = `
      <div class="content-section">
        <div class="comment-item">
          <div class="comment-header">
            <div class="comment-avatar">SM</div>
            <div class="comment-meta">
              <span class="comment-author">Sarah Martinez</span>
              <span class="comment-time">2 hours ago</span>
            </div>
          </div>
          <p class="comment-content">Great discussion on data quality challenges. Looking forward to the technical demo next week.</p>
        </div>
        <div class="comment-item">
          <div class="comment-header">
            <div class="comment-avatar">GP</div>
            <div class="comment-meta">
              <span class="comment-author">Gabe Pirela</span>
              <span class="comment-time">1 hour ago</span>
            </div>
          </div>
          <p class="comment-content">Thanks Sarah! I'll prepare a focused demo on the Salesforce integration capabilities we discussed.</p>
        </div>
      </div>
    `;
  }
  
  tab.dataset.loaded = 'true';
}

// Load transcript tab content
function loadTranscriptTab() {
  const tab = document.getElementById('transcript-tab');
  if (tab.dataset.loaded) return;
  
  // Check if meetingData exists and has transcript
  if (typeof meetingData !== 'undefined' && meetingData.transcript) {
    let html = '<div class="content-section">';
    
    meetingData.transcript.forEach(entry => {
      const initials = entry.speaker.split(' ').map(n => n[0]).join('');
      html += `
        <div class="transcript-entry">
          <div class="transcript-header">
            <div class="transcript-avatar">${initials}</div>
            <div class="transcript-meta">
              <span class="transcript-speaker">${entry.speaker}</span>
              <span class="transcript-time">${entry.timestamp}</span>
            </div>
          </div>
          <p class="transcript-content">${entry.content}</p>
        </div>
      `;
    });
    
    html += '</div>';
    tab.innerHTML = html;
  } else {
    // Fallback content
    tab.innerHTML = `
      <div class="content-section">
        <div class="transcript-entry">
          <div class="transcript-header">
            <div class="transcript-avatar">SM</div>
            <div class="transcript-meta">
              <span class="transcript-speaker">Sarah Martinez</span>
              <span class="transcript-time">00:02:15</span>
            </div>
          </div>
          <p class="transcript-content">Thanks for taking the time to meet with us today, Gabe. We're really excited to learn more about ZoomInfo's capabilities.</p>
        </div>
        <div class="transcript-entry">
          <div class="transcript-header">
            <div class="transcript-avatar">GP</div>
            <div class="transcript-meta">
              <span class="transcript-speaker">Gabe Pirela</span>
              <span class="transcript-time">00:02:28</span>
            </div>
          </div>
          <p class="transcript-content">Absolutely, Sarah. I'm looking forward to understanding your current data challenges and how we can help improve your sales team's efficiency.</p>
        </div>
        <div class="transcript-entry">
          <div class="transcript-header">
            <div class="transcript-avatar">SM</div>
            <div class="transcript-meta">
              <span class="transcript-speaker">Sarah Martinez</span>
              <span class="transcript-time">00:02:45</span>
            </div>
          </div>
          <p class="transcript-content">Great. So our main pain point right now is data quality. We're seeing about a 30% decay rate in our contact database, and it's really impacting our lead scoring accuracy.</p>
        </div>
      </div>
    `;
  }
  
  tab.dataset.loaded = 'true';
}

// Initialize sidebar state from localStorage
function initializeSidebar() {
  const layout = document.querySelector('.meeting-layout');
  const savedState = localStorage.getItem('sidebarExpanded');
  
  // Default to collapsed
  if (savedState === 'true') {
    layout.classList.add('sidebar-expanded');
  } else {
    layout.classList.remove('sidebar-expanded');
  }
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(event) {
  // Toggle sidebar with Ctrl/Cmd + B
  if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
    event.preventDefault();
    toggleSidebar();
  }
  
  // Close sidebar with Escape key (only if expanded)
  if (event.key === 'Escape') {
    const layout = document.querySelector('.meeting-layout');
    if (layout.classList.contains('sidebar-expanded')) {
      layout.classList.remove('sidebar-expanded');
      localStorage.setItem('sidebarExpanded', 'false');
    }
  }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize sidebar state
  initializeSidebar();
  
  // Add keyboard event listeners
  document.addEventListener('keydown', handleKeyboardShortcuts);
  
  // Ensure overview tab is active by default
  const overviewTab = document.getElementById('overview-tab');
  if (overviewTab) {
    overviewTab.classList.add('active');
  }
});

// Add CSS styles for dynamic content
const dynamicStyles = `
<style>
.comment-item, .transcript-entry {
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.comment-item:last-child, .transcript-entry:last-child {
  border-bottom: none;
}

.comment-header, .transcript-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.comment-avatar, .transcript-avatar {
  width: 32px;
  height: 32px;
  background: #1976d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
}

.comment-meta, .transcript-meta {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.comment-author, .transcript-speaker {
  font-weight: 500;
  color: #111827;
  font-size: 0.875rem;
}

.comment-time, .transcript-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.comment-content, .transcript-content {
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.5;
  margin: 0;
  padding-left: 2.5rem;
}
</style>
`;

// Inject dynamic styles
document.head.insertAdjacentHTML('beforeend', dynamicStyles);
