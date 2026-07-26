import Nav from "./meal_components/Nav"
import Hero from "./meal_components/Hero"
import Category from "./meal_components/Category"
import Footer from "./meal_components/Footer"
import "./assets/meal.css"
import { useState, useEffect } from "react"

const Meal = () => {
  // we need 3 states:
  // a state to track error | a state to store what we are fetching from the api | a state to track if the app is loading or not
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  function fetchMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        setCategories(data.categories || [])
        setError(false)
        setLoading(false)
      })
      .catch(function (err) {
        setCategories([])
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMeal()
  }, [])
    return (
    <>
      <Nav />
      <Hero />
      <Category loading={loading} error={error} categories={categories} />
      <Footer />
    </>
  )
}

export default Meal