// Countdown.js
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const Countdown = ({targetDate}) => {
  const [timeRemaining, setTimeRemaining] = useState(moment.duration());

  useEffect(() => {}, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const endDate = moment(targetDate);
      const duration = moment.duration(endDate.diff(now));
      setTimeRemaining(duration);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = time => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(timeRemaining.days())}d :{' '}
        {formatTime(timeRemaining.hours())}h :{' '}
        {formatTime(timeRemaining.minutes())}m :{' '}
        {formatTime(timeRemaining.seconds())}s
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Countdown;
