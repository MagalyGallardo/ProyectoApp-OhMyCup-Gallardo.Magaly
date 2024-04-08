import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import EmptyListComponent from '../components/EmptyListComponent'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const {data:products, isError, isLoading, isSuccess, error} = useGetProductsByCategoryQuery (categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  useEffect(()=>{
    setProductsFiltered(products)
    if(keyword) setProductsFiltered(products.filter(product => {
     const productTitleLower = product.title.toLowerCase()
     const keywordLower = keyword.toLowerCase()
     return productTitleLower.includes(keywordLower)
   }))
   },[categorySelected,keyword, products])

   if(isLoading) return <LoadingSpinner/>
   if(isError) return <Error message="¡Ups! Algo salió mal." textButton="Volver" onRetry={()=>navigation.goBack()}/>
   if(isSuccess && products === null) return <EmptyListComponent message="El producto no esta disponible"/>
  
   const handlerKeyword = (k) => {
    setKeyword(k)
  }
 
  return (
    <View style={styles.container}>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory navigation={navigation} item={item}/>}
        />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({

})