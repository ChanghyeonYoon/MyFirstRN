import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Header = (props) => (
  <TouchableWithoutFeedback onPress={() => alert('hello,world')}>
    <View style={styles.header}>
      <Text>{props.name}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
