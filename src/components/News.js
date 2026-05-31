import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";

const News = () => {
    const [articles, setArticles] = useState([]);

 let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=d126c7cfca814cda83b4da561e7ad390";
 async function getNews(){
    let data= await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    console.log(parsedData);
 }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Top Headlines</h1>

      <div className="container">
        <div className="row">

          {articles.map((article, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage?article.urlToImage:"https://th.bing.com/th/id/OIP.2ncl5Bm4DVw9Lj3YacqaCwHaHa?w=154&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3//www.indiatoday.in/education-today/gk-current-affairs/story/news-brief-5th-september-2023-2429337-2023-09-05"}
                  newsUrl={article.url}
                />
              </div>
            );
            })}

        </div>
        <div className="container d-flex justify-content-between">
        <button  type="button" class="btn btn-dark">Previous</button>
<button type="button" class="btn btn-dark">Next</button>
        </div>
      </div>
    </div>
  );
};

export default News;