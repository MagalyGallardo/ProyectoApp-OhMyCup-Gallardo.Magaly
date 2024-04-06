import { StyleSheet, Text,Image, Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProductByCategory = ({item, navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductDetail", {productId:item.id})} style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode="cover"/>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.brown2,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        marginVertical:10,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    text:{
        width:"60%",
        fontSize:20,
        fontFamily:fonts.PoppinsLightItalic 
    },
    image:{
        minWidth:80,
        minHeight:80,
        borderRadius:10
    }
})