const Main = ({ xyz, cats }) => {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-head">
          <h2>Pick a category</h2>
          <span className="count">{cats.length} categories</span>
        </div>

        <div className="row" id="category-grid">
          {cats.map((category) => (
            <div className="col-12 col-sm-6 col-lg-4 card-col" key={category.idCategory}>
              <article className="recipe-card">
                <span className="pin" aria-hidden="true"></span>
                <div className="recipe-thumb-wrap">
                  <img className="recipe-thumb" src={category.strCategoryThumb} alt={category.strCategory} loading="lazy" />
                </div>
                <div className="recipe-body">
                  <div className="recipe-id">CAT. {category.idCategory}</div>
                  <h3 className="recipe-title">{category.strCategory}</h3>
                  <p className="recipe-desc">{category.strCategoryDescription}</p>
                  <a href="#" className="recipe-link" data-category={category.strCategory}>
                    View recipes <span className="arrow">&rarr;</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main