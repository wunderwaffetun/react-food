import { Link } from "react-router-dom";

export default function CategoryItem({ category }) {
  const {
    idCategory: id,
    strCategory: title,
    strCategoryThumb: url,
    strCategoryDescription: description,
  } = category;
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt="" />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{description.slice(0, 60)+'...'}</p>
      </div>
      <div className="card-action">
        <Link to={'category/' + title} className="btn">Watch meal</Link>
      </div>
    </div>
  );
}
