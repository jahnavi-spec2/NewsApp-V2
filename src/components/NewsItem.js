import react from "react";

const NewsItem = ({ title, description,newsUrl,imageUrl,mode }) => {
  return (
   <div className="card"
    style={{ 
      backgroundColor: mode === "dark" ? "#004d8c" : "white",
      color: mode === "dark" ? "#dbd7d7" : "black",
      width: '18rem', marginBottom:'20px' }}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{!title ? "No title available" : title.slice(0, 100)}...</h5>
    <p className="card-text">{!description ? "No description available" : description.slice(0, 200)}...</p>
    <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
      Read More
    </a>
  </div>
</div>
  );
};

export default NewsItem;