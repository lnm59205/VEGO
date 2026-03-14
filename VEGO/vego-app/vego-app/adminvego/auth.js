/**
 * Authentication Manager for VEGO Dashboard
 * Handles login, logout, and session management
 */

class VegoAuth {
    constructor() {
        this.storageKeys = {
            loggedIn: 'vegoAdminLoggedIn',
            username: 'vegoAdminUsername',
            loginTime: 'vegoLoginTime',
            rememberedUsername: 'vegoRememberedUsername',
            sessionTimeout: 'vegoSessionTimeout'
        };
        
        this.credentials = {
            admin: '123456'
        };
        
        this.sessionTimeout = 24 * 60 * 60 * 1000; // 24 hours
    }

    // Check if user is logged in
    isLoggedIn() {
        const loggedIn = localStorage.getItem(this.storageKeys.loggedIn);
        const loginTime = localStorage.getItem(this.storageKeys.loginTime);
        
        if (!loggedIn || !loginTime) {
            return false;
        }
        
        // Check session timeout
        const now = new Date().getTime();
        const loginTimestamp = new Date(loginTime).getTime();
        
        if (now - loginTimestamp > this.sessionTimeout) {
            this.logout();
            return false;
        }
        
        return true;
    }

    // Login user
    async login(username, password, rememberMe = false) {
        return new Promise((resolve, reject) => {
            // Simulate API call delay
            setTimeout(() => {
                if (this.validateCredentials(username, password)) {
                    // Set login state
                    localStorage.setItem(this.storageKeys.loggedIn, 'true');
                    localStorage.setItem(this.storageKeys.username, username);
                    localStorage.setItem(this.storageKeys.loginTime, new Date().toISOString());
                    
                    // Handle remember me
                    if (rememberMe) {
                        localStorage.setItem(this.storageKeys.rememberedUsername, username);
                    } else {
                        localStorage.removeItem(this.storageKeys.rememberedUsername);
                    }
                    
                    // Log login activity
                    this.logActivity('login', { username, timestamp: new Date().toISOString() });
                    
                    resolve({
                        success: true,
                        message: 'Đăng nhập thành công!',
                        user: { username }
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Tài khoản hoặc mật khẩu không chính xác!'
                    });
                }
            }, 1500);
        });
    }

    // Validate credentials
    validateCredentials(username, password) {
        return this.credentials[username] === password;
    }

    // Logout user
    logout() {
        const username = localStorage.getItem(this.storageKeys.username);
        
        // Log logout activity
        this.logActivity('logout', { username, timestamp: new Date().toISOString() });
        
        // Clear login state
        localStorage.removeItem(this.storageKeys.loggedIn);
        localStorage.removeItem(this.storageKeys.username);
        localStorage.removeItem(this.storageKeys.loginTime);
        
        // Redirect to login
        window.location.href = 'login.html';
    }

    // Get current user
    getCurrentUser() {
        if (!this.isLoggedIn()) {
            return null;
        }
        
        return {
            username: localStorage.getItem(this.storageKeys.username),
            loginTime: localStorage.getItem(this.storageKeys.loginTime)
        };
    }

    // Get remembered username
    getRememberedUsername() {
        return localStorage.getItem(this.storageKeys.rememberedUsername);
    }

    // Extend session
    extendSession() {
        if (this.isLoggedIn()) {
            localStorage.setItem(this.storageKeys.loginTime, new Date().toISOString());
        }
    }

    // Log activity
    logActivity(action, data) {
        const activities = JSON.parse(localStorage.getItem('vegoAuthActivities') || '[]');
        activities.unshift({
            action,
            data,
            timestamp: new Date().toISOString()
        });
        
        // Keep only last 50 activities
        if (activities.length > 50) {
            activities.splice(50);
        }
        
        localStorage.setItem('vegoAuthActivities', JSON.stringify(activities));
    }

    // Get login activities
    getActivities() {
        return JSON.parse(localStorage.getItem('vegoAuthActivities') || '[]');
    }

    // Check session periodically
    startSessionCheck() {
        setInterval(() => {
            if (!this.isLoggedIn() && window.location.pathname !== '/login.html') {
                this.logout();
            }
        }, 60000); // Check every minute
    }

    // Initialize auth system
    init() {
        // Start session checking
        this.startSessionCheck();
        
        // Extend session on user activity
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event => {
            document.addEventListener(event, () => {
                this.extendSession();
            }, { passive: true });
        });
    }
}

// Create global auth instance
window.VegoAuth = new VegoAuth();

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        window.VegoAuth.init();
    });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VegoAuth;
}