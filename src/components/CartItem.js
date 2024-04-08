import { Pressable, StyleSheet, Text, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem ,addCartItem } from '../features/cart/cartSlice'
import CounterCart from './CounterCart'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...item,quantity}))
      }
  return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <CounterCart item={item} />
                <Text style={styles.text2}>Precio: ${item.price} </Text>
            </View>
            <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color="white"/>
            </Pressable>
            
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.brown2,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:140,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.brown1,
        fontSize:19,
        fontFamily:fonts.PoppinsBold,
    },
    text2:{
        color:colors.brown1,
        fontSize:10,
        fontFamily:fonts.PoppinsBold
    },

})