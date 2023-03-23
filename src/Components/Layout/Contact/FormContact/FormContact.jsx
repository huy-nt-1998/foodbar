import { Input, LinkButton } from "../../../Common";
import { Home, Phone, Mail } from "react-feather";

export default function FormContact() {
  const color = "#f42f2c"
  const size = "18px"
  return <div className="form-contact">
    <div className="container">
      <div className="row">
        <div className="col-4">
        {/* <Icon type="home" color="" size="10"> */}
        <div className="form-contact__info">
          <Home color={color} size={size}/>
          <div className="form-contact__detail">Nha Trang, Vietnam</div>
        </div>
        <div className="form-contact__info">
          <Phone color={color} size={size}/>
          <div className="form-contact__detail">00 (440) 9865 562</div>
        </div>
        <div className="form-contact__info">
          <Mail color={color} size={size}/>
          <div className="form-contact__detail">support@gmail.com</div>
        </div>
        </div>
        <div className="col-4">
          <Input type="select" placeholder="Enter your name" />
          <Input type="select" placeholder="Enter email address" />
          <Input type="select" placeholder="Enter Subject" />
        </div>
        <div className="col-4">
          <Input type="select" placeholder="Enter Message" />
          <LinkButton content="Send Message"/>
          </div>
      </div>
    </div>
  </div>
}