import { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Form = () => {
  const { products, setProducts } = useContext(ProductContext)
  const [product, setProduct] = useState({ name: '', qty: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name.trim() || !product.qty) return

    const newProduct = {
      id: Math.floor(Math.random() * 1000000),
      name: product.name.trim(),
      qty: Number(product.qty),
    }

    setProducts((prev) => [...prev, newProduct])
    setProduct({ name: '', qty: '' })
  }

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="product name"
                value={product.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="qty"
                className="form-control"
                placeholder="Qty"
                value={product.qty}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 text-end">
              <input type="submit" value="Add Product" className="btn btn-primary mine" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
