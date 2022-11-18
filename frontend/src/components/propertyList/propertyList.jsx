import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Хотели</h1>
                <h2>914 599 хотела</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Апартаменти</h1>
                <h2>850 875 апартамент</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Хотелски комплекси</h1>
                <h2>17 889 хотелски комплекса</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Вили</h1>
                <h2>458 346 вили</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Къщи за гости</h1>
                <h2>95 262 къщи за гости</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList