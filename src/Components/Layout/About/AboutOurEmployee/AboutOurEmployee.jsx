import React from "react"
import imageEmployee from '../../../../Assets/Images/About/testi-1.jpg.webp'

export default function AboutOurEmployee() {
	return <div className="about__employee">
		<div className="container">
			<div className="row">
				<div className="col-4">
					<img src={imageEmployee} alt="image employee" />
				</div>
				<div className="col-8">
					<div className="about__employee__testi">
						<h4>Filipino Gomez</h4>
						<h5>Web Developer, Google</h5>
						<p>“Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
					</div>
				</div>
			</div>
		</div>
	</div>
}
