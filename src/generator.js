import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = (props) => {
  return (
    <View style={styles.generator}>
      <Button title={'Add Number'} onPress={() => props.add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#2f2f2f',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
