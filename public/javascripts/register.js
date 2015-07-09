var RegisterPage = React.createClass({
	render: function() {
		var Grid = ReactBootstrap.Grid; 
		var Row = ReactBootstrap.Row; 
		var Button = ReactBootstrap.Button; 
		return (
			<Grid id="register">
				<Row style={{padding: "20px"}}>
					<h1 className="center underline">Register</h1>
					<h2 className="green-text">New Patient Verification</h2>
					<div className="center">Pre-qualification for new patients is available. This form is secure and will provide all of your current
						information to our database allowing us to provide a quick verification upon your first delivery. Please follow the link below and fill out the information form required.</div>
					<br />
    				<Button bsStyle='success' className="block-center">REGISTER</Button>
					<div className="center bold">YOU CAN ALSO SEND A COPY OF YOUR REC AND ID TO</div>
					<div className="center bold">818-268-4083</div>
					<div className="center bold">BEFORE CALLING TO PLACE AN ORDER</div>
					<br />


					<h2 className="green-text">New Patient Verification</h2>
					<div className="">By contacting KALI HERB COLLECTIVE., you are acknowledging the following:</div>
					<div className="">
I am age 18 or older. I have a written California recommendation for the use of medical cannabis from my 

doctor under Prop 215. I am not a law enforcement officer, nor a postal inspector, or operating under an 

assumed name or in cooperation with any criminal investigation; nor am I seeking out evidence which may 

serve as the basis for any charge of violating federal, state, or local laws. I will not use the medication 

provided for any non-medicinal purposes. Anyone who uses the provided medication for any purposes what so 

ever, will be assuming their own liability, and are responsible for their own actions. Any reimbursement 

requested are only compensation for time, nutrients, electricity costs and other factors involved in the process 

of producing and delivering medical grade marijuana and not toward the sale or purchase of the medicine 

itself. This information is intended for doctor recommended patients in compliance with Prop 215 and S.B. 420, 

California Health and Safety Code Section 11362.5 and 11362.7 et seq. and all local regulations.</div>
				</Row>
			</Grid>
		); 
	}
}); 
 

var KaliherbApp = React.createClass({
	render: function() {
		var Navbar = ReactBootstrap.Navbar; 
		var Nav = ReactBootstrap.Nav;
		var MenuItem = ReactBootstrap.MenuItem; 
		var NavItem = ReactBootstrap.NavItem;
		var DropdownButton = ReactBootstrap.DropdownButton; 
		var Grid = ReactBootstrap.Grid; 
		var Col = ReactBootstrap.Col;
		var Row = ReactBootstrap.Row; 
		return (
			  <div>		
			  			<Row className="header-top">
			  				<Col mdOffset={4} md={2} className="header-menu-item"><a href="/about">About</a></Col>
			  				<Col md={2} className="header-menu-item">Contact Us</Col>
			  				<Col md={2} className="header-menu-item"><a href="/register">Register</a></Col>			  			
			  			</Row>

			  			<Row className="header-bottom">
							<Col sm={4} style={{height: "57px"}}><a href="/"><img src="images/logo2.jpg" className="logo"/></a></Col>
			  				<Col md={8} className="contact-line">
			  					PH: (818) 268-4083 OPEN 10AM - 12AM DAILY 7 DAYS A WEEK
			  				</Col>			  			
			  			</Row>
			  			<Row style={{marginBottom: "1px"}}></Row>

			  			<RegisterPage></RegisterPage>
			  			<Row style={{marginTop: "20px"}}></Row>
						<Row className="green-bar"></Row>	  	  
			  			<Row id="header">
			  				<Col sm={3}><img src="images/logo2.jpg" className="logo-bottom"/></Col>
			  				<Col sm={7} className="footer-text">
			  					WE SERVICE THE ENTIRE SAN FERNANDO VALLEY & SURROUNDING AREAS
			  					<Row>
			  						Calabasas |Canoga Park |Chatsworth Granada Hills Reseda |North Hollywood | Northridge 
			  					</Row>
			  					<Row>
			  						Pacoima Porter Ranch | Santa Clarita |Sherman Oaks | Studio City | Sylmar | Tarzana Van Nuys |Winnetka | Woodland Hills 
			  					</Row>
			  					<Row>
									CONTACT US AT (818) 268-4083 | KALIHERB@GMAIL.COM
			  					</Row>
			  				</Col>
			  			</Row>
			  			<Row className="dashed-border2"></Row>				  		
			  </div>
			  
			);
	}
});

React.render(<KaliherbApp />, document.getElementById('main')); 