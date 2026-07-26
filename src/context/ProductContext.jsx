import { createContext, useState } from "react";

// create the context

const ProductContext = createContext();

// create a provider
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Black Marker',
      qty: 10,
    },
    {
      id: 2,
      name: 'Display Material',
      qty: 5,
    },
    {
      id: 3,
      name: 'Flower pots',
      qty: 7,
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider }
