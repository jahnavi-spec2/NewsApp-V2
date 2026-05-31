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
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
            })}

        </div>
      </div>
    </div>
  );
};

export default News;