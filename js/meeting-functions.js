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
  
  // Show selected tab
  document.getElementById(tabName + '-tab').classList.remove('hidden');
  
  // Add active class to clicked button
  event.target.classList.add('active');
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
