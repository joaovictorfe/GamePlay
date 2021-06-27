import React from 'react';

import {
  View,
  ActivityIndicator
} from 'react-native';

import { style } from './style';
import { theme } from '../../global/styles/theme';

export function Load(){
  return (
    <View style={style.container}>
      <ActivityIndicator 
        size="large"
        color={theme.colors.primary}
      />
    </View>
  );
}