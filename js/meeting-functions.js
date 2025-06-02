// Tab switching functionality
function switchTab(tabName) {
  // Hide all tabs
  document.getElementById('overview-tab').classList.add('hidden');
  document.getElementById('comments-tab').classList.add('hidden');
  document.getElementById('transcript-tab').classList.add('hidden');
  document.getElementById('highlights-tab').classList.add('hidden');
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab and load content if needed
  const targetTab = document.getElementById(tabName + '-tab');
  targetTab.classList.remove('hidden');
  
  // Add active class to clicked button
  event.target.classList.add('active');
  
  // Load content dynamically based on tab
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
    case 'highlights':
      loadHighlightsTab();
      break;
    case 'overview':
      loadOverviewTab();
      break;
  }
}

// Load overview tab content
function loadOverviewTab() {
  const tab = document.getElementById('overview-tab');
  if (tab.dataset.loaded) return;
  
  // Content is already in HTML, just mark as loaded
  tab.dataset.loaded = 'true';
}

// Load highlights/detailed tab content
function loadHighlightsTab() {
  const tab = document.getElementById('highlights-tab');
  if (tab.dataset.loaded) return;
  
  // Check if tab already has Sandler methodology content
  if (tab.innerHTML.trim() && (tab.innerHTML.includes('Pain Development Analysis') || tab.innerHTML.includes('Sandler'))) {
    // Tab already has Sandler content, just mark as loaded
    tab.dataset.loaded = 'true';
    return;
  }
  
  // If no Sandler content, generate panels from data (fallback)
  if (typeof meetingData !== 'undefined' && meetingData.detailedPanels) {
    let html = '';
    
    Object.keys(meetingData.detailedPanels).forEach(panelKey => {
      const panel = meetingData.detailedPanels[panelKey];
      const expandedClass = panel.expanded ? 'expanded' : '';
      const contentExpandedClass = panel.expanded ? 'expanded' : '';
      
      html += `
        <div class="expandable-panel">
          <div class="panel-header ${expandedClass}" onclick="togglePanel('${panelKey}')">
            <div class="panel-title">${panel.title}</div>
            <svg class="panel-chevron ${expandedClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
          <div class="panel-content ${contentExpandedClass}" id="${panelKey}-content">
            <div class="panel-content-inner">
              <button class="copy-button" onclick="copyPanelContent('${panelKey}-content')">
                <svg class="copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </button>
              <div class="space-y-3 text-sm text-gray-700 leading-relaxed">
                ${panel.content.map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    });
    
    tab.innerHTML = html;
  }
  
  tab.dataset.loaded = 'true';
}

// Load comments tab content
function loadCommentsTab() {
  const tab = document.getElementById('comments-tab');
  if (tab.dataset.loaded) return;
  
  let html = '<div class="space-y-4">';
  
  meetingData.comments.forEach(comment => {
    html += `
      <div class="border border-gray-200 rounded-lg p-4">
        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            ${comment.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div class="flex-1">
            <div class="flex items-center space-x-2">
              <span class="font-medium text-gray-900">${comment.author}</span>
              <span class="text-sm text-gray-500">${comment.timestamp}</span>
            </div>
            <p class="mt-1 text-sm text-gray-700">${comment.content}</p>
            
            ${comment.replies.length > 0 ? `
              <div class="mt-3 space-y-2">
                ${comment.replies.map(reply => `
                  <div class="flex items-start space-x-3 ml-4">
                    <div class="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs">
                      ${reply.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center space-x-2">
                        <span class="font-medium text-gray-900 text-sm">${reply.author}</span>
                        <span class="text-xs text-gray-500">${reply.timestamp}</span>
                      </div>
                      <p class="mt-1 text-sm text-gray-600">${reply.content}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  tab.innerHTML = html;
  tab.dataset.loaded = 'true';
}

// Load transcript tab content
function loadTranscriptTab() {
  const tab = document.getElementById('transcript-tab');
  if (tab.dataset.loaded) return;
  
  let html = '<div class="space-y-4">';
  
  meetingData.transcript.forEach(entry => {
    const initials = entry.speaker.split(' ').map(n => n[0]).join('');
    const colors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-red-600', 'bg-yellow-600'];
    const colorIndex = entry.speaker.length % colors.length;
    
    html += `
      <div class="flex items-start space-x-3">
        <div class="w-8 h-8 ${colors[colorIndex]} rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
          ${initials}
        </div>
        <div class="flex-1">
          <div class="flex items-center space-x-2">
            <span class="font-medium text-gray-900">${entry.speaker}</span>
            <span class="text-sm text-gray-500">${entry.timestamp}</span>
          </div>
          <p class="mt-1 text-sm text-gray-700">${entry.content}</p>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  tab.innerHTML = html;
  tab.dataset.loaded = 'true';
}

// Panel toggle functionality
function togglePanel(panelId) {
  const header = event.currentTarget;
  const content = document.getElementById(panelId + '-content');
  const chevron = header.querySelector('.panel-chevron');
  
  // Toggle expanded state
  header.classList.toggle('expanded');
  content.classList.toggle('expanded');
  chevron.classList.toggle('expanded');
}

// Copy panel content functionality
function copyPanelContent(panelId) {
  const panel = document.getElementById(panelId);
  const button = panel.querySelector('.copy-button');
  
  // Get the text content, excluding the copy button
  const contentDiv = panel.querySelector('.space-y-3, .space-y-4');
  const textContent = contentDiv ? contentDiv.innerText : panel.innerText;
  
  // Use the Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textContent).then(() => {
      showCopyFeedback(button);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      fallbackCopyTextToClipboard(textContent, button);
    });
  } else {
    // Fallback for older browsers
    fallbackCopyTextToClipboard(textContent, button);
  }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text, button) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopyFeedback(button);
    }
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }
  
  document.body.removeChild(textArea);
}

// Show visual feedback when content is copied
function showCopyFeedback(button) {
  const originalHTML = button.innerHTML;
  
  // Add copied class and change icon
  button.classList.add('copied');
  button.innerHTML = `
    <svg class="copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  `;
  
  // Reset after 2 seconds
  setTimeout(() => {
    button.classList.remove('copied');
    button.innerHTML = originalHTML;
  }, 2000);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load overview tab by default
  loadOverviewTab();
});
