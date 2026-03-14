import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ActivityCard from './ActivityCard';

export default function ActivityScreen() {
  const activities = [
    {
      id: 1,
      type: 'purchase',
      title: 'Mua rau cải xanh',
      description: 'Đã mua 2kg rau cải xanh từ nông trại ABC',
      time: '2 giờ trước',
      amount: '45.000đ',
    },
    {
      id: 2,
      type: 'sell',
      title: 'Bán cà chua',
      description: 'Đã bán 3kg cà chua cho khách hàng XYZ',
      time: '5 giờ trước',
      amount: '75.000đ',
    },
    {
      id: 3,
      type: 'reward',
      title: 'Nhận điểm thưởng',
      description: 'Nhận 50 điểm từ giao dịch thành công',
      time: '1 ngày trước',
      points: '50 điểm',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hoạt động gần đây</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
});