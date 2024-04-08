import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlice';
import colors from '../utils/globals/colors';

const CounterCart = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.counterContainer}>
      {/* Botón de suma */}
      <Pressable
        style={styles.button}
        onPress={() => dispatch(addCartItem({ ...item, quantity: item.quantity + 1 }))}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      {/* Texto de cantidad */}
      <Text style={styles.text}>{item.quantity}</Text>
      {/* Botón de resta */}
      <Pressable
        style={styles.button}
        onPress={() => {
          if (item.quantity > 0) {
            dispatch(addCartItem({ ...item, quantity: item.quantity - 1 }));
          }
        }}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

export default CounterCart;

const styles = StyleSheet.create({
  counterContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.brown1
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
