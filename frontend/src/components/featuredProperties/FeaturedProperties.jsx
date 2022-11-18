import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/364880709.webp?k=99c13fa73b7eb277bf63327c7c718ac27e750a3914ba9be574a972b29b4835a2&o=&s=1" alt="" className="fpImg"/>
        <span className="fpName">Бей Хаус Роял хотел</span>
        <span className="fpCity">Велико Търново</span>
        <span className="fpPrice">От 480лв</span>
        <div className="fpRating">
            <button>9.7</button>
            <span>Фантастичен</span>
        </div>
        </div>
        <div className="fpItem">   
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/130663155.webp?k=15343bf1b2eac29c44e6186788564564a702c23ec17b4de92ea9804fa7194ca8&o=&s=1" alt="" className="fpImg"/>
        <span className="fpName">Приморец Гранд хотел</span>
        <span className="fpCity">Бургас</span>
        <span className="fpPrice">От 208лв</span>
        <div className="fpRating">
            <button>9.0</button>
            <span>Превъзходен</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/367996818.webp?k=01dc2d1693fe65e3d46c1b14305b509e7759683ccd00660dd9726341e643c3b9&o=&s=1" alt="" className="fpImg"/>
        <span className="fpName">Кемпински Гранд хотел</span>
        <span className="fpCity">Банско</span>
        <span className="fpPrice">От 585лв</span>
        <div className="fpRating">
            <button>9.3</button>
            <span>Превъзходен</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/220082938.webp?k=3f13ecbf6a0aab1d4e5b1e64a2aa19f23db69f68f0b98113335264faba2fe51b&o=&s=1" alt="" className="fpImg"/>
        <span className="fpName">Спа хотел Рич</span>
        <span className="fpCity">Велинград</span>
        <span className="fpPrice">От 209лв</span>
        <div className="fpRating">
            <button>8.2</button>
            <span>Много добър</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties