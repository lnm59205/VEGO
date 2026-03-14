import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapViewComponent from './MapViewComponent';

export default function HomeScreen({ navigation }) {
  const handleSellNow = () => {
    // TODO: Navigate to sell product screen
    console.log('Bán ngay pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vego - Rau sạch gần bạn</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <MapViewComponent />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sellButton} onPress={handleSellNow}>
          <Text style={styles.sellButtonText}>🥬 Bán ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  mapContainer: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
  },
  sellButton: {
    backgroundColor: '#FF6B35',
    padding: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sellButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});