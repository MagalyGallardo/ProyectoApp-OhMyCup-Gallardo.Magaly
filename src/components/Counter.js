import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlice';
import colors from '../utils/globals/colors';

const Counter = ({ initialValue, textButton, product }) => {
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();

  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem({ ...product, quantity }));
    setCount(1);
  };

  return (
    <View style={styles.counterContainer}>
      <Pressable
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Text style={styles.text}>{count}</Text>
      <Pressable
        style={styles.button}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Pressable
        style={styles.addButton}
        onPress={() => handlerAddCartItem(count)}
      >
        <Text style={styles.buttonText}>{textButton}</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  text: {
    width: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.brown1
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.brown2
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
