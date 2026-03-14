import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function RewardsScreen() {
  const userPoints = 1250;
  
  const rewards = [
    {
      id: 1,
      title: 'Giảm 10% đơn hàng tiếp theo',
      points: 100,
      description: 'Áp dụng cho đơn hàng từ 200.000đ',
      available: true,
    },
    {
      id: 2,
      title: 'Miễn phí vận chuyển',
      points: 200,
      description: 'Miễn phí ship cho đơn hàng bất kỳ',
      available: true,
    },
    {
      id: 3,
      title: 'Voucher 50.000đ',
      points: 500,
      description: 'Voucher giảm giá 50k cho đơn từ 300k',
      available: true,
    },
    {
      id: 4,
      title: 'Rau sạch premium miễn phí',
      points: 1000,
      description: '1kg rau sạch cao cấp miễn phí',
      available: true,
    },
    {
      id: 5,
      title: 'Thành viên VIP 1 tháng',
      points: 2000,
      description: 'Ưu đãi đặc biệt dành cho VIP',
      available: false,
    },
  ];

  const handleRedeem = (reward) => {
    if (userPoints >= reward.points && reward.available) {
      // TODO: Implement redeem logic
      console.log(`Đổi thưởng: ${reward.title}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ưu đãi & Điểm thưởng</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsLabel}>Điểm của bạn:</Text>
          <Text style={styles.pointsValue}>{userPoints.toLocaleString()} điểm</Text>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Đổi điểm lấy ưu đãi</Text>
        
        {rewards.map((reward) => {
          const canRedeem = userPoints >= reward.points && reward.available;
          
          return (
            <View key={reward.id} style={styles.rewardCard}>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardTitle}>{reward.title}</Text>
                <Text style={styles.rewardDescription}>{reward.description}</Text>
                <Text style={styles.rewardPoints}>{reward.points} điểm</Text>
              </View>
              
              <TouchableOpacity
                style={[
                  styles.redeemButton,
                  { backgroundColor: canRedeem ? '#4CAF50' : '#ccc' }
                ]}
                onPress={() => handleRedeem(reward)}
                disabled={!canRedeem}
              >
                <Text style={styles.redeemButtonText}>
                  {canRedeem ? 'Đổi ngay' : 'Chưa đủ điểm'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
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
    backgroundColor: '#FF9800',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  pointsContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  pointsLabel: {
    color: 'white',
    fontSize: 14,
  },
  pointsValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  rewardCard: {
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
  rewardContent: {
    flex: 1,
    marginRight: 15,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  rewardPoints: {
    fontSize: 14,
    color: '#FF9800',
    fontWeight: 'bold',
  },
  redeemButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  redeemButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});