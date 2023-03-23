import { Heading, Input } from "../../../Common"
import {LinkButton} from "../../../Common"

export default function MakeReservation() {

  return <div className="menu__make-reservation">
    <div className="container">
      <Heading title="Make Reservation" />
      <div className="menu__make-reservation__form">
        <Input type="select" placeholder="Enter your name" />
        <Input type="select" placeholder="Enter email address" />
        <Input type="select" placeholder="Phone Number" />
        <Input type="select" placeholder="Select date & time" />
        <LinkButton content="Make Reservation"/>
      </div>
    </div>
  </div>
}