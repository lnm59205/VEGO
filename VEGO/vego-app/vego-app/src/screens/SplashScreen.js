import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  const [progress] = useState(new Animated.Value(0));
  const [loadingText, setLoadingText] = useState('0%');

  useEffect(() => {
    // Start the loading animation
    const animation = Animated.timing(progress, {
      toValue: 100,
      duration: 3000, // 3 seconds loading time
      useNativeDriver: false,
    });

    // Listen to animation progress
    const listener = progress.addListener(({ value }) => {
      setLoadingText(`${Math.round(value)}%`);
    });

    // Start animation
    animation.start(() => {
      // Animation completed, navigate to Login
      setTimeout(() => {
        navigation.replace('Login');
      }, 500); // Small delay before navigation
    });

    // Cleanup
    return () => {
      progress.removeListener(listener);
    };
  }, [navigation, progress]);

  // Calculate progress bar width
  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [0, width - 120], // 60px margin on each side
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* App Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          {/* Recycle symbol using Unicode */}
          <Text style={styles.recycleIcon}>♻</Text>
          <View style={styles.locationPin}>
            <Text style={styles.pinIcon}>📍</Text>
          </View>
        </View>
      </View>

      {/* App Name */}
      <Text style={styles.appName}>
        Ve<Text style={styles.appNameGreen}>Go</Text>
      </Text>

      {/* Tagline */}
      <Text style={styles.tagline}>Ve Chai Công Nghệ</Text>

      {/* Loading Section */}
      <View style={styles.loadingContainer}>
        <View style={styles.loadingHeader}>
          <Text style={styles.loadingText}>LOADING</Text>
          <Text style={styles.percentageText}>{loadingText}</Text>
        </View>
        
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <Animated.View 
            style={[
              styles.progressBar,
              { width: progressWidth }
            ]} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  iconContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 120,
    height: 120,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  recycleIcon: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
  },
  locationPin: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 32,
    height: 32,
    backgroundColor: '#FF5722',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  pinIcon: {
    fontSize: 18,
    color: 'white',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  appNameGreen: {
    color: '#4CAF50',
  },
  tagline: {
    fontSize: 18,
    color: '#999999',
    marginBottom: 100,
    textAlign: 'center',
  },
  loadingContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 100,
  },
  loadingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 14,
    color: '#999999',
    fontWeight: '600',
    letterSpacing: 2,
  },
  percentageText: {
    fontSize: 14,
    color: '#999999',
    fontWeight: '600',
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },
});