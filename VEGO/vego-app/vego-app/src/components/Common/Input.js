import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../constants';

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          error && styles.errorInput,
          multiline && styles.multilineInput,
          inputStyle,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={Colors.textSecondary}
        {...props}
      />
      
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Sizes.md,
  },
  label: {
    fontSize: Sizes.fontSm,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Sizes.xs,
  },
  input: {
    height: Sizes.inputMd,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Sizes.radiusMd,
    paddingHorizontal: Sizes.md,
    fontSize: Sizes.fontMd,
    color: Colors.textPrimary,
    backgroundColor: Colors.white,
  },
  focusedInput: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  errorInput: {
    borderColor: Colors.error,
  },
  multilineInput: {
    height: 'auto',
    minHeight: Sizes.inputLg,
    paddingVertical: Sizes.sm,
    textAlignVertical: 'top',
  },
  errorText: {
    fontSize: Sizes.fontXs,
    color: Colors.error,
    marginTop: Sizes.xs,
  },
});