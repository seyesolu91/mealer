import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from './Blogger'
import Counter from './Counter.jsx'
import Invento from "./Invento.jsx"
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from "./Meal"
//import bootstrap css that was installed as a package
//import "bootstrap/dist/css/bootstrap.css"
// const username = 'gentlesammy';

// Using Context api follow this steps
// Create the Context: createContext
export const AppNameContext = createContext();
// Create the Provider
// Wrap a Provider around the root parent or around all the children that want to inherit tha data| function that is to be shared /accessed by the Children components as Value prop
// Go inside the Children component that needs the data and consume the context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Counter /> */}
    {/* <Blogger/> */}
    {/* <ProductProvider>
    <AppNameContext.Provider   value= {{appname:"Inveto App"}} >
    <Invento />
    </AppNameContext.Provider>
    </ProductProvider> */}
    <Meal />
  </StrictMode>,

  //jsx: Elements been rendered must have a parent
  // <div>
  // <h1>This is the beginning of my app, {username} </h1>
  // <p>Welcome to my app! {2+4} </p>
  // </div>
)
