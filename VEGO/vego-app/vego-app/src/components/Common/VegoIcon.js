import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function VegoIcon({ size = 120, backgroundColor = '#4CAF50' }) {
  return (
    <View style={[styles.container, { width: size, height: size, backgroundColor }]}>
      {/* Recycle Symbol */}
      <Svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="white">
        <Path d="M5.77 7.15L7.17 4.78C7.45 4.26 8.06 4 8.65 4.08C9.25 4.15 9.73 4.54 9.88 5.11L10.95 8.5L14.87 8.5C15.5 8.5 16 9 16 9.5S15.5 10.5 14.87 10.5L9.12 10.5C8.63 10.5 8.17 10.25 7.88 9.85C7.59 9.45 7.5 8.94 7.64 8.47L8.74 5.05L7.34 7.42C7.06 7.94 6.45 8.2 5.86 8.12C5.26 8.05 4.78 7.66 4.63 7.09L3.56 3.7L2.13 3.7C1.5 3.7 1 3.2 1 2.7S1.5 1.7 2.13 1.7L4.87 1.7C5.36 1.7 5.82 1.95 6.11 2.35C6.4 2.75 6.49 3.26 6.35 3.73L5.25 7.15H5.77Z"/>
        <Path d="M18.23 16.85L16.83 19.22C16.55 19.74 15.94 20 15.35 19.92C14.75 19.85 14.27 19.46 14.12 18.89L13.05 15.5L9.13 15.5C8.5 15.5 8 15 8 14.5S8.5 13.5 9.13 13.5L14.88 13.5C15.37 13.5 15.83 13.75 16.12 14.15C16.41 14.55 16.5 15.06 16.36 15.53L15.26 18.95L16.66 16.58C16.94 16.06 17.55 15.8 18.14 15.88C18.74 15.95 19.22 16.34 19.37 16.91L20.44 20.3L21.87 20.3C22.5 20.3 23 20.8 23 21.3S22.5 22.3 21.87 22.3L19.13 22.3C18.64 22.3 18.18 22.05 17.89 21.65C17.6 21.25 17.51 20.74 17.65 20.27L18.75 16.85H18.23Z"/>
        <Path d="M12 2C12.69 2 13.25 2.56 13.25 3.25V8.75C13.25 9.44 12.69 10 12 10S10.75 9.44 10.75 8.75V3.25C10.75 2.56 11.31 2 12 2Z"/>
      </Svg>
      
      {/* Location Pin */}
      <View style={[styles.locationPin, { width: size * 0.25, height: size * 0.25 }]}>
        <Svg width={size * 0.15} height={size * 0.15} viewBox="0 0 24 24" fill="#FF5722">
          <Path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  locationPin: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});