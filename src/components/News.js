import React from "react";
import NewsItem from "./NewsItem";
const News=()=>{
    return(
        <div>
            <h1 style={{ textAlign: 'center' }}>Top Headlines</h1>
            <NewsItem title="News Title 1" description="This is a description of news item 1." />
            <NewsItem title="News Title 2" description="This is a description of news item 2." />
            <NewsItem title="News Title 3" description="This is a description of news item 3." />
        </div>

    )
}
export default News;