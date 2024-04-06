import { StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import colors from '../utils/globals/colors';
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


const MainNavigator = () => {
    
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
      ( async ()=>{
       const session = await fetchSession()
       if(session.rows.length){
          const user = session.rows._array[0]
          dispatch(setUser(user))

       }
      })()
    },[])

  return (
    <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
        {user.idToken ? <TabNavigator/> : <AuthStack/>}
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.brown1, 
      },
})