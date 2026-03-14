import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

export default function MapViewComponent() {
  // TODO: Implement actual map with react-native-maps
  // For now, showing placeholder
  
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>
        🗺️ Bản đồ hiển thị các điểm bán rau sạch gần bạn
      </Text>
      <Text style={styles.note}>
        (Cần cài đặt react-native-maps để hiển thị bản đồ thực tế)
      </Text>
    </View>
  );
  
  // Uncomment when react-native-maps is properly configured:
  /*
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 10.8231,
        longitude: 106.6297,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: 10.8231, longitude: 106.6297 }}
        title="Rau sạch ABC"
        description="Rau củ quả tươi ngon"
      />
    </MapView>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 10,
  },
  note: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
  map: {
    flex: 1,
  },
});