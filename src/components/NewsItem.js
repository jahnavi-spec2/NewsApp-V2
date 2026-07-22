import "./NewsItem.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const NewsItem = ({ title, description,newsUrl,imageUrl,mode,article,onFavClick,isFav }) => {
  return (
   <div className="card"
    style={{ 
      backgroundColor: mode === "dark" ? "#004d8c" : "white",
      color: mode === "dark" ? "#dbd7d7" : "black",
      width: '18rem', marginBottom:'20px',
      borderRadius:'10px',
      boxShadow: mode==='light' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 4px 8px rgba(216, 218, 231, 0.27)',
      elevation: '10',
      border: mode === "dark" ? "1px solid #004d8c" : "1px solid #ddd",
    
    }}
   >
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <button
  onClick={() => onFavClick(article)}
  style={{ background: "transparent", border: "none", cursor: "pointer" }}
>
  {isFav ? (
    <FaHeart style={{ color: "red" }} />
  ) : (
    <FaRegHeart />
  )}
</button>
    <h5 className="card-title">{!title ? "No title available" : title.slice(0, 100)}...</h5>
    <p className="card-text">{!description ? "No description available" : description.slice(0, 200)}...</p>
    <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{backgroundColor: mode === "dark" ? "#041c30" : "#007bff", color: "white", border: "none"}}>
      Read More
    </a>
  </div>
</div>
  );
};

export default NewsItem;