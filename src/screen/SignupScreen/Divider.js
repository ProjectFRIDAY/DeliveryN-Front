import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '../../constants/Color';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch',
    backgroundColor: Colors.GREY_TERTIARY,
    height: 1,
  },
});

export default Divider;
