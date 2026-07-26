import { createContext, useState } from 'react'

const VibeProductContext = createContext()

const VibeProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Black Marker', qty: 10 },
    { id: 2, name: 'Display Material', qty: 5 },
    { id: 3, name: 'Flower pots', qty: 7 },
  ])

  const fetchProducts = () => {
    return products
  }

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        id: Math.floor(Math.random() * 1000000),
        name: product.name?.trim() ?? '',
        qty: Number(product.qty) || 0,
      },
    ])
  }

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
  }

  return (
    <VibeProductContext.Provider
      value={{ products, fetchProducts, addProduct, deleteProduct }}
    >
      {children}
    </VibeProductContext.Provider>
  )
}

export { VibeProductContext, VibeProductProvider }
