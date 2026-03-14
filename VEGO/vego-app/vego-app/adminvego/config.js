/**
 * Configuration file for Ve Chai Connect Admin Panel
 * Contains settings and data mappings for integration with main VEGO app
 */

const VegoConfig = {
    // App settings
    app: {
        name: 'Ve Chai Connect',
        version: '1.0.0',
        environment: 'development'
    },

    // API endpoints (for future backend integration)
    api: {
        baseUrl: 'https://api.vechaiconnect.com',
        endpoints: {
            orders: '/api/orders',
            wallet: '/api/wallet',
            users: '/api/users',
            transactions: '/api/transactions'
        }
    },

    // Default values
    defaults: {
        walletBalance: 250000,
        commissionRate: 10,
        currency: 'VND',
        currencySymbol: '₫'
    },

    // Waste types and their base prices (VND per kg)
    wasteTypes: {
        'Chai nhựa': {
            basePrice: 3000,
            icon: '🍶',
            category: 'plastic'
        },
        'Lon nhôm': {
            basePrice: 15000,
            icon: '🥤',
            category: 'metal'
        },
        'Giấy báo cũ': {
            basePrice: 2000,
            icon: '📰',
            category: 'paper'
        },
        'Sắt vụn': {
            basePrice: 8000,
            icon: '🔩',
            category: 'metal'
        },
        'Vỏ lon bia': {
            basePrice: 12000,
            icon: '🍺',
            category: 'metal'
        },
        'Nhựa cứng': {
            basePrice: 4000,
            icon: '🧴',
            category: 'plastic'
        },
        'Carton': {
            basePrice: 2500,
            icon: '📦',
            category: 'paper'
        }
    },

    // Commission rate limits
    commission: {
        min: 1,
        max: 50,
        default: 10
    },

    // Distance calculation settings
    distance: {
        maxRadius: 10, // km
        priceMultiplier: {
            '0-1': 1.0,
            '1-3': 0.9,
            '3-5': 0.8,
            '5+': 0.7
        }
    },

    // UI settings
    ui: {
        theme: {
            primary: '#4CAF50',
            secondary: '#45a049',
            success: '#4CAF50',
            error: '#ff4444',
            warning: '#ff9800',
            info: '#2196F3'
        },
        animations: {
            duration: 300,
            easing: 'ease'
        }
    },

    // Storage keys for localStorage
    storage: {
        prefix: 'vego_',
        keys: {
            orders: 'vegoOrders',
            wallet: 'vegoWalletBalance',
            commission: 'vegoCommissionRate',
            profile: 'vegoUserProfile',
            transactions: 'vegoTransactions',
            settings: 'vegoSettings'
        }
    },

    // Sample data for development
    sampleData: {
        orders: [
            {
                id: 1,
                wasteType: 'Chai nhựa + Lon nhôm',
                estimatedValue: 45000,
                distance: '1.2km',
                address: '123 Nguyễn Văn Cừ, Quận 5, TP.HCM',
                status: 'available'
            },
            {
                id: 2,
                wasteType: 'Giấy báo cũ',
                estimatedValue: 25000,
                distance: '0.8km',
                address: '456 Lê Văn Sỹ, Quận 3, TP.HCM',
                status: 'available'
            },
            {
                id: 3,
                wasteType: 'Sắt vụn',
                estimatedValue: 80000,
                distance: '2.1km',
                address: '789 Võ Văn Tần, Quận 1, TP.HCM',
                status: 'available'
            },
            {
                id: 4,
                wasteType: 'Vỏ lon bia',
                estimatedValue: 35000,
                distance: '1.5km',
                address: '321 Pasteur, Quận 1, TP.HCM',
                status: 'available'
            }
        ],
        
        userProfile: {
            name: 'Nguyễn Minh Tuấn',
            phone: '0901234567',
            email: 'tuannguyen@vechaiconnect.com',
            address: 'TP. Hồ Chí Minh',
            joinDate: '2024-01-01',
            rating: 4.8,
            totalOrders: 156
        }
    },

    // Utility functions
    utils: {
        formatCurrency: (amount) => {
            return `${VegoConfig.defaults.currencySymbol} ${amount.toLocaleString()}`;
        },
        
        calculateCommission: (amount, rate) => {
            return Math.round(amount * rate / 100);
        },
        
        calculateDistance: (lat1, lon1, lat2, lon2) => {
            // Haversine formula for distance calculation
            const R = 6371; // Earth's radius in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                     Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        },
        
        generateOrderId: () => {
            return Date.now() + Math.random().toString(36).substr(2, 9);
        },
        
        validateCommissionRate: (rate) => {
            return rate >= VegoConfig.commission.min && rate <= VegoConfig.commission.max;
        }
    }
};

// Initialize sample data if not exists
if (typeof window !== 'undefined') {
    // Check if running in browser
    const initSampleData = () => {
        const orders = localStorage.getItem(VegoConfig.storage.keys.orders);
        if (!orders) {
            localStorage.setItem(VegoConfig.storage.keys.orders, JSON.stringify(VegoConfig.sampleData.orders));
        }
        
        const profile = localStorage.getItem(VegoConfig.storage.keys.profile);
        if (!profile) {
            localStorage.setItem(VegoConfig.storage.keys.profile, JSON.stringify(VegoConfig.sampleData.userProfile));
        }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSampleData);
    } else {
        initSampleData();
    }
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VegoConfig;
} else if (typeof window !== 'undefined') {
    window.VegoConfig = VegoConfig;
}