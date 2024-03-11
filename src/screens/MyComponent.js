// MyComponent.js
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/counterSlice';

const MyComponent = () => {
  const counter = useSelector(state => state.counter.value);
  const [color, setColor] = useState('rgb(246, 82, 88)');
  const dispatch = useDispatch();

  function randomColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Construct the color string in the format "rgb(red, green, blue)"
    var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    setColor(color);
    return color;
  }

  setInterval(function () {
    randomColor();
  }, 10000);
  // Example usage:

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={color} />
      <Text style={{fontSize: 25}}>Counter: {counter}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{flex: 1, margin: 10}}>
          <Button title="Increment" onPress={() => dispatch(increment())} />
        </View>
        <View style={{flex: 1, margin: 10}}>
          <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
      </View>
    </View>
  );
};

export default MyComponent;
