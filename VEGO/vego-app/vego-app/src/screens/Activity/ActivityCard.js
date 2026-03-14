import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityCard({ activity }) {
  const getIcon = (type) => {
    switch (type) {
      case 'purchase':
        return '🛒';
      case 'sell':
        return '💰';
      case 'reward':
        return '🎁';
      default:
        return '📋';
    }
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'purchase':
        return '#2196F3';
      case 'sell':
        return '#4CAF50';
      case 'reward':
        return '#FF9800';
      default:
        return '#666';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{getIcon(activity.type)}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.description}>{activity.description}</Text>
        <Text style={styles.time}>{activity.time}</Text>
      </View>
      
      <View style={styles.amountContainer}>
        {activity.amount && (
          <Text style={[styles.amount, { color: getStatusColor(activity.type) }]}>
            {activity.amount}
          </Text>
        )}
        {activity.points && (
          <Text style={[styles.points, { color: getStatusColor(activity.type) }]}>
            +{activity.points}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  iconContainer: {
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});