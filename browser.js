// Browser State
const browserState = {
    history: ['https://example.com'],
    currentIndex: 0,
    currentUrl: 'https://example.com'
};

// DOM Elements
const addressBar = document.getElementById('addressBar');
const goBtn = document.getElementById('goBtn');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const refreshBtn = document.getElementById('refreshBtn');
const homeBtn = document.getElementById('homeBtn');
const browserFrame = document.getElementById('browserFrame');
const statusText = document.getElementById('statusText');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorModal = document.getElementById('errorModal');
const errorMessage = document.getElementById('errorMessage');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPage(browserState.currentUrl);
    updateNavButtons();
});

// Event Listeners
goBtn.addEventListener('click', navigateTo);
addressBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') navigateTo();
});

backBtn.addEventListener('click', goBack);
forwardBtn.addEventListener('click', goForward);
refreshBtn.addEventListener('click', refresh);
homeBtn.addEventListener('click', goHome);

// Navigation Functions
function navigateTo() {
    let url = addressBar.value.trim();
    
    if (!url) {
        showError('Please enter a URL');
        return;
    }
    
    // Add protocol if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    addressBar.value = url;
    
    // Add to history if different from current
    if (url !== browserState.currentUrl) {
        browserState.history = browserState.history.slice(0, browserState.currentIndex + 1);
        browserState.history.push(url);
        browserState.currentIndex = browserState.history.length - 1;
    }
    
    loadPage(url);
}

function goBack() {
    if (browserState.currentIndex > 0) {
        browserState.currentIndex--;
        const url = browserState.history[browserState.currentIndex];
        addressBar.value = url;
        loadPage(url);
    }
}

function goForward() {
    if (browserState.currentIndex < browserState.history.length - 1) {
        browserState.currentIndex++;
        const url = browserState.history[browserState.currentIndex];
        addressBar.value = url;
        loadPage(url);
    }
}

function refresh() {
    loadPage(browserState.currentUrl);
}

function goHome() {
    const homeUrl = 'https://example.com';
    addressBar.value = homeUrl;
    navigateTo();
}

// Load Page
function loadPage(url) {
    browserState.currentUrl = url;
    addressBar.value = url;
    
    showLoading(true);
    updateNavButtons();
    
    // Fetch the URL
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        // Create a data URI to load the HTML
        const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
        browserFrame.src = dataUri;
        statusText.textContent = `Loaded: ${url}`;
        showLoading(false);
    })
    .catch(error => {
        showLoading(false);
        statusText.textContent = 'Failed to load page';
        
        // Try to fetch as plain text
        if (error.message.includes('CORS') || error.message.includes('Failed')) {
            showCORSError(url, error);
        } else {
            showError(`Error loading page: ${error.message}`);
        }
    });
}

// CORS Error Handler
function showCORSError(url, error) {
    const errorHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 40px;
                background: #f5f5f5;
            }
            .error-container {
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                max-width: 600px;
                margin: 0 auto;
            }
            h1 { color: #e74c3c; }
            p { color: #555; line-height: 1.6; }
            .details {
                background: #ecf0f1;
                padding: 15px;
                border-radius: 4px;
                font-family: monospace;
                margin: 15px 0;
                word-break: break-all;
            }
            .tip {
                background: #d5f4e6;
                padding: 15px;
                border-left: 4px solid #27ae60;
                margin: 15px 0;
            }
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1>❌ Cannot Load Page</h1>
            <p><strong>URL:</strong></p>
            <div class="details">${escapeHtml(url)}</div>
            
            <p><strong>Reason:</strong></p>
            <div class="details">${escapeHtml(error.message)}</div>
            
            <div class="tip">
                <strong>💡 Tip:</strong> This browser has CORS restrictions. Some websites may not load due to security policies.
                Try:
                <ul>
                    <li>Using a different website</li>
                    <li>Checking if the URL is correct</li>
                    <li>Ensuring you have an internet connection</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
    `;
    
    const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(errorHtml);
    browserFrame.src = dataUri;
}

// Utility Functions
function updateNavButtons() {
    backBtn.disabled = browserState.currentIndex <= 0;
    forwardBtn.disabled = browserState.currentIndex >= browserState.history.length - 1;
}

function showLoading(show) {
    loadingSpinner.style.display = show ? 'inline' : 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorModal.style.display = 'flex';
}

function closeErrorModal() {
    errorModal.style.display = 'none';
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Close modal when clicking outside
errorModal.addEventListener('click', (e) => {
    if (e.target === errorModal) {
        closeErrorModal();
    }
});