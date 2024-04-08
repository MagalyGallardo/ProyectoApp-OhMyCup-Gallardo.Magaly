import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile'

const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data:locationFormatted} = useGetUserLocationQuery(localId)
    const {data} = useGetImageQuery(localId)

    const imageUri = data ? { uri: data.image } : require("../../assets/user.png");
    const address = locationFormatted ? locationFormatted.address : '';
  return (
    <View style={styles.container}>
        <Image
            source={imageUri}
            style={styles.image}
            resizeMode='cover'
        />
         <Text style={styles.text}>{address}</Text>
        <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
        <AddButton title={"Agregar Direccion"} onPress={()=> navigation.navigate("LocationSelector")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200,
        borderRadius: 100
    },
    text:{
        fontSize:16,
        marginVertical:10
    }
})