
export default function Footer() {

	return <div className="footer">
		<div className="container">
			<div className="row footer__menu">
				<div className="col-8">
					<div className="row ">
						<div className="col-3">
							<h6 className="footer__menu__title">Top Products</h6>
							<div className="footer__menu__item">Managed Website</div>
							<div className="footer__menu__item">Manage Reputation</div>
							<div className="footer__menu__item">Power Tools</div>
							<div className="footer__menu__item">Marketing Service</div>
						</div>
						<div className="col-3">
							<h6 className="footer__menu__title">Quick Links</h6>
							<div className="footer__menu__item">Jobs</div>
							<div className="footer__menu__item">Brand Assets</div>
							<div className="footer__menu__item">Investor Relations</div>
							<div className="footer__menu__item">Terms of Service</div>
						</div>
						<div className="col-3">
							<h6 className="footer__menu__title">Features</h6>
							<div className="footer__menu__item">Jobs</div>
							<div className="footer__menu__item">Brand Assets</div>
							<div className="footer__menu__item">Investor Relations</div>
							<div className="footer__menu__item">Terms of Service</div>
						</div>
						<div className="col-3">
							<h6 className="footer__menu__title">Resources</h6>
							<div className="footer__menu__item">Guides</div>
							<div className="footer__menu__item">Research</div>
							<div className="footer__menu__item">Experts</div>
							<div className="footer__menu__item">Agencies</div>
						</div>
					</div>
				</div>
				<div className="col-4">
					<h6 className="footer__menu__title">Newsletter</h6>
					<p>Stay updated with our latest trends</p>
					<div className="footer__menu__email">
						<input className="footer__menu__email__input" type="email" placeholder="Email Address"/><button className="footer__menu__email__send">Submit</button>
					</div>
				</div>
			</div>
			<div className="footer__info">
					<div>This template is made by <a className="footer__info__author" href="https://www.facebook.com/huy.nt.it98">Huy Tuan Nguyen</a></div>
					<div>Design from colorlib.com</div>
			</div>
		</div>
	</div>
}