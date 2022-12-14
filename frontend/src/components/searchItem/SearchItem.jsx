import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m от центъра</span>
        <span className="siTaxiOp">Безплатно такси до летището</span>
        <span className="siSubtitle">
          Студио апартамент с климатик
        </span>
        <span className="siFeatures">
        {item.desc}
        </span>
        <span className="siCancelOp">Безплатно анулиране </span>
        <span className="siCancelOpSubtitle">
        Можете да анулирате по-късно, така че вземете тази страхотна цена днес!
        </span>
      </div>
      <div className="siDetails">
      { item.rating && <div className="siRating">
          <span>Отлично</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice}лв.</span>
          <span className="siTaxOp">Включва данъци и такси</span>
          <Link to={`/hotels/$item._id`}>
          <button className="siCheckButton">Вижте наличността</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
