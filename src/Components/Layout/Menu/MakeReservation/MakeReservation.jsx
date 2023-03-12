import { Heading, Input } from "../../../Common"

export default function MakeReservation(){

    return <div className="menu__make-reservation">
    <div className="container">
    <Heading title="Make Reservation" />
    <div className="menu__make-reservation__form">
    <Input type="select" placeholder="TEST"/>
    <Input type="select" placeholder="TEST"/>
    <Input type="select" placeholder="TEST"/>
    <Input type="select" placeholder="TEST"/>
    <Input type="select" placeholder="TEST"/>
    </div>
  </div>
  </div>
}