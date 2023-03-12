import { Heading } from "../../../Common"
import { data } from "./data"

export default function OurFavouriteMenu() {
  return <div className="menu__our-favourite">
    <div className="container">
    <Heading title="Our Favourite Menu" />
    <div className="row">
      {data.map((val, index) =>
        <div key={index} className="col-6">
          <div className="row menu__our-favourite__food">
            <div className="col-6 menu__our-favourite__info">
              <h3>{val.foodName}</h3>
              <div>{val.ingredient}</div>
            </div>
            <div className="col-4">------------------------------------</div>
            <div className="col-2 menu__our-favourite__price">{`$${val.price.toFixed(2)}`}</div>
          </div>
        </div>
      )}
    </div>
  </div>
  </div>
}