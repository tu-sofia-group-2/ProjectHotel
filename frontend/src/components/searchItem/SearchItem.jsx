import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m от центъра</span>
        <span className="siTaxiOp">Безплатно такси до летището</span>
        <span className="siSubtitle">
          Студио апартамент с климатик
        </span>
        <span className="siFeatures">
        Цяло студио • 1 баня • 21 м² 1 пълно легло
        </span>
        <span className="siCancelOp">Безплатно анулиране </span>
        <span className="siCancelOpSubtitle">
        Можете да анулирате по-късно, така че вземете тази страхотна цена днес!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Отлично</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">112лв.</span>
          <span className="siTaxOp">Включва данъци и такси</span>
          <button className="siCheckButton">Вижте наличността</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
