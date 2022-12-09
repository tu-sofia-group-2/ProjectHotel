import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=Sofia,Varna,Plovdiv");

  console.log(data)

  return (
    <div className="featured">
        {loading ? ("Loading please wait") :
        ( 
        <>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/656117.jpg?k=4b052185c300d280604b2e82096b7fa9bdb6b7a14ccdf3a48f977cc128dbdfd2&o=" alt="" className="featuredImg"/>            <div className="featuredTitles">
                <h1>София</h1>
                <h2>{data[0]} обекта</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/971483.jpg?k=236c2d16047171b2e3fa0396362b4456609b6e48f118d5b002232ffe2aca9240&o=" alt="" className="featuredImg"/>            <div className="featuredTitles">
                <h1>Пловдив</h1>
                <h2>{data[1]} обекта</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/971497.jpg?k=22ae6a497ee1caf85531cf871b4b175c571a4c24a1d40b7f43e714fa073bb734&o=" alt="" className="featuredImg"/>            <div className="featuredTitles">
                <h1>Варна</h1>
                <h2>{data[2]} обекта</h2>
            </div>
        </div>
        </>
        )}
    </div>
  );
};

export default Featured