
import NewsItem from "./NewsItem";

const Favourite=({favourites,toggleFavourite,mode}) => {
    return (
        <div>
<h1 style={{ textAlign: "center", marginBottom: "20px" }}>Favourite News</h1>



<div className="container">
    <div className="row">
        {favourites.length === 0 ? (
            <p style={{ textAlign: "center" }}>No favourite news added yet.</p>
        ) : (
            favourites.map((article,index)=>( 
              <div className="col-md-4" key={index}>
                <NewsItem
                mode={mode}
                title={article.title}
                description={article.description}
                newsUrl={article.url}
                imageUrl={article.urlToImage}
                article={article}
                onFavClick={toggleFavourite}
                isFav={true}
                />
              </div>
            )
        ))}
            
    </div>
        </div>
          </div>
    )};

export default Favourite;