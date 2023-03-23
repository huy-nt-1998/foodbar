import { Input, LinkButton } from "../../Common"
import imgBookATable from '../../../Assets/Images/BookATable/book-table.jpg.webp'
export default function FormBooking() {
  return <div className="booking">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="booking__image"><img src={imgBookATable} alt="book a table" /></div>
        </div>
        <div className=" col-12 col-md-6">
          <div className="booking__form">
            <h2>Book a Table</h2>
            <p>Who are in extremely love with eco friendly system lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <Input type="select" placeholder="Enter your name" />
            <Input type="select" placeholder="Enter email address" />
            <Input type="select" placeholder="Phone Number" />
            <Input type="select" placeholder="Select date & time" />
            <LinkButton content="Make Reservation" />
          </div>
        </div>
      </div>
    </div>
  </div>
}