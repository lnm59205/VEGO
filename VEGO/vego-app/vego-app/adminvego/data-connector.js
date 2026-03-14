/**
 * Data Connector for Ve Chai Connect Admin Panel
 * Connects admin panel with main VEGO app data
 */

class VegoDataConnector {
    constructor() {
        this.storageKeys = {
            orders: 'vegoOrders',
            walletBalance: 'vegoWalletBalance',
            commissionRate: 'vegoCommissionRate',
            userProfile: 'vegoUserProfile',
            transactions: 'vegoTransactions'
        };
    }

    // Get all orders
    getOrders() {
        return JSON.parse(localStorage.getItem(this.storageKeys.orders) || '[]');
    }

    // Add new order
    addOrder(orderData) {
        const orders = this.getOrders();
        const newOrder = {
            id: Date.now(),
            ...orderData,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };
        orders.push(newOrder);
        localStorage.setItem(this.storageKeys.orders, JSON.stringify(orders));
        return newOrder;
    }

    // Update order status
    updateOrderStatus(orderId, status) {
        const orders = this.getOrders();
        const orderIndex = orders.findIndex(order => order.id === orderId);
        if (orderIndex !== -1) {
            orders[orderIndex].status = status;
            orders[orderIndex].updatedAt = new Date().toISOString();
            localStorage.setItem(this.storageKeys.orders, JSON.stringify(orders));
            return orders[orderIndex];
        }
        return null;
    }

    // Get wallet balance
    getWalletBalance() {
        return parseInt(localStorage.getItem(this.storageKeys.walletBalance) || '250000');
    }

    // Update wallet balance
    updateWalletBalance(amount) {
        localStorage.setItem(this.storageKeys.walletBalance, amount.toString());
        
        // Also update transaction history
        this.addTransaction({
            type: 'commission_deduction',
            amount: -Math.abs(amount),
            description: 'Phí sàn cho đơn hàng',
            balance: amount
        });
    }

    // Get commission rate
    getCommissionRate() {
        return parseInt(localStorage.getItem(this.storageKeys.commissionRate) || '10');
    }

    // Update commission rate
    updateCommissionRate(rate) {
        localStorage.setItem(this.storageKeys.commissionRate, rate.toString());
    }

    // Get user profile
    getUserProfile() {
        return JSON.parse(localStorage.getItem(this.storageKeys.userProfile) || '{}');
    }

    // Update user profile
    updateUserProfile(profileData) {
        const currentProfile = this.getUserProfile();
        const updatedProfile = { ...currentProfile, ...profileData };
        localStorage.setItem(this.storageKeys.userProfile, JSON.stringify(updatedProfile));
        return updatedProfile;
    }

    // Get transactions
    getTransactions() {
        return JSON.parse(localStorage.getItem(this.storageKeys.transactions) || '[]');
    }

    // Add transaction
    addTransaction(transactionData) {
        const transactions = this.getTransactions();
        const newTransaction = {
            id: Date.now(),
            ...transactionData,
            timestamp: new Date().toISOString()
        };
        transactions.unshift(newTransaction); // Add to beginning
        
        // Keep only last 100 transactions
        if (transactions.length > 100) {
            transactions.splice(100);
        }
        
        localStorage.setItem(this.storageKeys.transactions, JSON.stringify(transactions));
        return newTransaction;
    }

    // Calculate earnings statistics
    getEarningsStats() {
        const orders = this.getOrders();
        const completedOrders = orders.filter(order => order.status === 'completed');
        
        const totalOrders = completedOrders.length;
        const totalRevenue = completedOrders.reduce((sum, order) => sum + (order.estimatedValue || 0), 0);
        const totalCommission = completedOrders.reduce((sum, order) => sum + (order.commissionFee || 0), 0);
        const totalEarnings = completedOrders.reduce((sum, order) => sum + (order.actualIncome || 0), 0);
        
        return {
            totalOrders,
            totalRevenue,
            totalCommission,
            totalEarnings,
            averageOrderValue: totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0
        };
    }

    // Export data for backup
    exportData() {
        return {
            orders: this.getOrders(),
            walletBalance: this.getWalletBalance(),
            commissionRate: this.getCommissionRate(),
            userProfile: this.getUserProfile(),
            transactions: this.getTransactions(),
            exportDate: new Date().toISOString()
        };
    }

    // Import data from backup
    importData(data) {
        try {
            if (data.orders) localStorage.setItem(this.storageKeys.orders, JSON.stringify(data.orders));
            if (data.walletBalance) localStorage.setItem(this.storageKeys.walletBalance, data.walletBalance.toString());
            if (data.commissionRate) localStorage.setItem(this.storageKeys.commissionRate, data.commissionRate.toString());
            if (data.userProfile) localStorage.setItem(this.storageKeys.userProfile, JSON.stringify(data.userProfile));
            if (data.transactions) localStorage.setItem(this.storageKeys.transactions, JSON.stringify(data.transactions));
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }

    // Clear all data
    clearAllData() {
        Object.values(this.storageKeys).forEach(key => {
            localStorage.removeItem(key);
        });
    }

    // Sync with main app (simulate API calls)
    syncWithMainApp() {
        // This would typically make API calls to sync data
        // For now, we'll just trigger storage events
        window.dispatchEvent(new StorageEvent('storage', {
            key: this.storageKeys.orders,
            newValue: localStorage.getItem(this.storageKeys.orders)
        }));
    }
}

// Initialize global data connector
window.VegoData = new VegoDataConnector();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VegoDataConnector;
}