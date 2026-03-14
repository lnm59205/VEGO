import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../constants';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  textStyle,
  ...props
}) {
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    
    // Variant styles
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryButton);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryButton);
        break;
      case 'outline':
        baseStyle.push(styles.outlineButton);
        break;
      case 'ghost':
        baseStyle.push(styles.ghostButton);
        break;
      default:
        baseStyle.push(styles.primaryButton);
    }
    
    // Size styles
    switch (size) {
      case 'sm':
        baseStyle.push(styles.smallButton);
        break;
      case 'lg':
        baseStyle.push(styles.largeButton);
        break;
      default:
        baseStyle.push(styles.mediumButton);
    }
    
    // Disabled style
    if (disabled) {
      baseStyle.push(styles.disabledButton);
    }
    
    // Custom style
    if (style) {
      baseStyle.push(style);
    }
    
    return baseStyle;
  };
  
  const getTextStyle = () => {
    const baseStyle = [styles.buttonText];
    
    // Variant text styles
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryButtonText);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryButtonText);
        break;
      case 'outline':
        baseStyle.push(styles.outlineButtonText);
        break;
      case 'ghost':
        baseStyle.push(styles.ghostButtonText);
        break;
      default:
        baseStyle.push(styles.primaryButtonText);
    }
    
    // Size text styles
    switch (size) {
      case 'sm':
        baseStyle.push(styles.smallButtonText);
        break;
      case 'lg':
        baseStyle.push(styles.largeButtonText);
        break;
      default:
        baseStyle.push(styles.mediumButtonText);
    }
    
    // Disabled text style
    if (disabled) {
      baseStyle.push(styles.disabledButtonText);
    }
    
    // Custom text style
    if (textStyle) {
      baseStyle.push(textStyle);
    }
    
    return baseStyle;
  };
  
  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: Sizes.radiusMd,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Variant styles
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  
  // Size styles
  smallButton: {
    height: Sizes.buttonSm,
    paddingHorizontal: Sizes.md,
  },
  mediumButton: {
    height: Sizes.buttonMd,
    paddingHorizontal: Sizes.lg,
  },
  largeButton: {
    height: Sizes.buttonLg,
    paddingHorizontal: Sizes.xl,
  },
  
  // Disabled style
  disabledButton: {
    backgroundColor: Colors.gray,
    opacity: 0.6,
  },
  
  // Text styles
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // Variant text styles
  primaryButtonText: {
    color: Colors.white,
  },
  secondaryButtonText: {
    color: Colors.white,
  },
  outlineButtonText: {
    color: Colors.primary,
  },
  ghostButtonText: {
    color: Colors.primary,
  },
  
  // Size text styles
  smallButtonText: {
    fontSize: Sizes.fontSm,
  },
  mediumButtonText: {
    fontSize: Sizes.fontMd,
  },
  largeButtonText: {
    fontSize: Sizes.fontLg,
  },
  
  // Disabled text style
  disabledButtonText: {
    color: Colors.textSecondary,
  },
});