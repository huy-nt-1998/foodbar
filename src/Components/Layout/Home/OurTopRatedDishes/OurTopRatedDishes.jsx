import { Heading } from "../../../Common";
import imageD1 from "../../../../Assets/Images/Home/d1.jpg.webp"
import imageD2 from "../../../../Assets/Images/Home/d2.jpg.webp"
import imageD3 from "../../../../Assets/Images/Home/d3.jpg.webp"
export default function OurTopRatedDishes() {

  return <div className="top-rate">
    <div className="container">
      <Heading title={"Our Top Rated Dishes"} />
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="top-rate__item">
            <div className="top-rate__image"><img src={imageD1} alt="D1" /></div>
            <div className="top-rate__info">
              <h3 className="top-rate__info__title">Bread Fruit Cheese Sandwich</h3>
              <div className="top-rate__info__detail">Bread/Potato/Cheese</div>
              <div className="top-rate__info__cost">$5.59</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="top-rate__item">
            <div className="top-rate__image"><img src={imageD2} alt="D1" /></div>
            <div className="top-rate__info">
              <h3 className="top-rate__info__title">Bread Fruit Cheese Sandwich</h3>
              <div className="top-rate__info__detail">Bread/Potato/Cheese</div>
              <div className="top-rate__info__cost">$5.59</div>
            </div>
          </div></div>
        <div className="col-12 col-md-4">
          <div className="top-rate__item">
            <div className="top-rate__image"><img src={imageD3} alt="D1" /></div>
            <div className="top-rate__info">
              <h3 className="top-rate__info__title">Bread Fruit Cheese Sandwich</h3>
              <div className="top-rate__info__detail">Bread/Potato/Cheese</div>
              <div className="top-rate__info__cost">$5.59</div>
            </div>
          </div></div>
      </div>
    </div>
  </div>
}