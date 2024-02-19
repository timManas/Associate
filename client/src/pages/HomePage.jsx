import { useEffect, useState } from 'react'
import axios from 'axios'
import { SimpleGrid } from '@chakra-ui/react'
import ProductCard from '../components/ProductCard.jsx'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [setProducts])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://localhost:5000/product/all')
      console.log(response.data)
      setProducts(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default HomePage
