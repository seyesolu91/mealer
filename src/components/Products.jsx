// To display an image inside src
import xyz from '../assets/hero.png'

const Products = ({Products}) => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Products Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {
              Products.map(function(pro){
                return (
              <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>
               <img src={xyz} alt="chopchop logo" style={{ maxwidth: "20px" }} />
              </td>
            </tr>
                )
              })
            }
            
            <tr>
              <td>2</td>
              <td>Mango Sauce</td>
              <td>3000</td>
              <td>
                <img src={xyz} alt="an logo" style={{ maxWidth: '50px' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products