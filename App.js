// App.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Countdown from './src/screens/Countdown';

const App = () => {
  const targetDate = '2024-02-28T17:40:00';

  return (
    <View style={styles.container}>
      <Countdown targetDate={targetDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
