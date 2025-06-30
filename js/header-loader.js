// Header component loader utility
(function() {
  // Function to load header component
  function loadHeader() {
    // Determine the correct path to the header component based on current location
    const currentPath = window.location.pathname;
    const isInSubdir = currentPath.includes('/settings/') || currentPath.includes('/public/');
    const headerPath = isInSubdir ? '../components/header.html' : 'components/header.html';
    
    // Find the header placeholder
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) {
      console.error('Header placeholder not found. Add <div id="header-placeholder"></div> to your HTML.');
      return;
    }
    
    // Fetch and load the header component
    fetch(headerPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load header: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        headerPlaceholder.innerHTML = html;
        
        // Execute any scripts in the loaded content
        const scripts = headerPlaceholder.querySelectorAll('script');
        scripts.forEach(script => {
          if (script.src) {
            // External script
            const newScript = document.createElement('script');
            newScript.src = script.src;
            document.head.appendChild(newScript);
          } else {
            // Inline script - execute immediately
            try {
              eval(script.textContent);
            } catch (error) {
              console.error('Error executing header script:', error);
            }
          }
          script.remove(); // Remove the original script tag
        });
        
        // Initialize header functionality after component is loaded
        initializeHeaderFunctionality();
      })
      .catch(error => {
        console.error('Error loading header component:', error);
        // Fallback: show a basic header
        headerPlaceholder.innerHTML = `
          <header class="border-b border-gray-200 bg-white">
            <div class="flex items-center justify-between px-4 py-2">
              <div class="flex items-center">
                <a href="${isInSubdir ? '../' : ''}index.html" class="flex items-center mr-8">
                  <span class="ml-2 text-xl font-semibold" style="color: #1976D2;">Chorus</span>
                </a>
              </div>
            </div>
          </header>
        `;
      });
  }
  
  // Initialize header functionality after component is loaded
  function initializeHeaderFunctionality() {
    // User dropdown toggle functionality
    const userMenuButton = document.getElementById('user-menu-button');
    const userDropdown = document.getElementById('user-dropdown');
    
    if (userMenuButton && userDropdown) {
      // Toggle dropdown when clicking the user menu button
      userMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
          userDropdown.classList.remove('active');
        }
      });
    }

    // Set active navigation state based on current page
    setActiveNavigation();
    
    // Fix paths based on current page location
    fixPaths();
  }

  function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove active class from all links
    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
      link.classList.add('text-gray-600', 'hover:text-blue-600');
    });
    
    // Set active state based on current page
    let activePage = 'home'; // default
    
    if (currentPath.includes('meeting')) {
      activePage = 'engagements';
    } else if (currentPath.includes('deals')) {
      activePage = 'deals';
    } else if (currentPath.includes('playlists')) {
      activePage = 'playlists';
    }
    
    // Apply active styles to current page
    const activeLink = document.querySelector(`[data-page="${activePage}"]`);
    if (activeLink) {
      activeLink.classList.remove('text-gray-600', 'hover:text-blue-600');
      activeLink.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
    }
  }

  function fixPaths() {
    const currentPath = window.location.pathname;
    const logoLink = document.getElementById('logo-link');
    const logoImg = document.getElementById('logo-img');
    const settingsLink = document.getElementById('settings-link');
    
    // Determine if we're in a subdirectory
    const isInSubdir = currentPath.includes('/settings/') || currentPath.includes('/public/');
    const pathPrefix = isInSubdir ? '../' : '';
    
    // Fix logo link
    if (logoLink) {
      logoLink.href = pathPrefix + 'index.html';
    }
    
    // Fix logo image source
    if (logoImg) {
      logoImg.src = pathPrefix + 'chorus-logo.svg';
    }
    
    // Fix settings link
    if (settingsLink) {
      settingsLink.href = pathPrefix + 'public/settings/personal-settings.html';
    }
    
    // Fix home navigation link
    const homeLink = document.querySelector('[data-page="home"]');
    if (homeLink) {
      homeLink.href = pathPrefix + 'index.html';
    }
  }
  
  // Load header when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
  } else {
    loadHeader();
  }
})();
