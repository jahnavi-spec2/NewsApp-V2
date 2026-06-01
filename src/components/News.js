import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";


const News = ( {category, mode}) => {
    const [articles, setArticles] = useState([]);
    const [page,setPage]= useState(1);
    const pageSize=5;
   const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);


  
   

   
 async function getNews(){
    setLoading(true);
   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d126c7cfca814cda83b4da561e7ad390&page=${page}&pageSize=${pageSize}`;
    
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
   
 }

  useEffect(() => {
    getNews();
  }, [page,category]);

  function HandlePreviousClick(){
  
    setPage(page-1);
  
  }

  function HandleNextClick(){
  
    setPage(page+1);

  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Top Headlines</h1>

      <div className="container">
        <div className="row">
          {loading && <Spinner/>}

          {!loading && articles.map((article, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                mode={mode}
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
        <button disabled={page === 1} type="button" className="btn btn-dark" onClick={HandlePreviousClick}>
          Previous
        </button>
        <button disabled={Math.ceil(totalResults / pageSize) <= page} type="button" className="btn btn-dark" onClick={HandleNextClick}>
          Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default News;