//import a css file
import "./css/mystyle.css"
import Nav from './components/Nav'
import Hero from './components/Hero'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  const pageVisit = 20

  const categories = [
    {
      idCategory: '1',
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      strCategoryDescription: 'Beef is the culinary name for meat from cattle, prized for its high-quality protein and essential nutrients.',
    },
    {
      idCategory: '3',
      strCategory: 'Dessert',
      strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
      strCategoryDescription: 'Dessert is a course that concludes a meal, often built from ingredients that are more commonly savory.',
    },
    {
      idCategory: '8',
      strCategory: 'Seafood',
      strCategoryThumb: 'https://www.themealdb.com/images/category/seafood.png',
      strCategoryDescription: 'Seafood is any form of sea life regarded as food, from fish to shellfish, prized worldwide.',
    },
  ]

  return (
    <>
      <Nav visits={pageVisit} />
      <Hero />
      <Category categories={categories} />
      <Footer />
    </>
  )
}

export default App