var AboutPage = React.createClass({
	render: function() {
		var Grid = ReactBootstrap.Grid; 
		var Row = ReactBootstrap.Row; 
		return (
			<Grid id="about">
				<Row style={{padding: "20px"}}>
					<h1 className="center underline">About Us</h1>
					<h2 className="green-text">Kaliherb</h2>
					<div className="center">KaliHerb Collective is a non-profit mutual benefit Medical Cannabis collective, providing legal & discreet
marijuana/cannabis delivery in the San Fernando Valley. We are a member owned and operated collective,
operating in compliance with California Health and safety Code Section 11362 and CA Attorney General's
Guidelines for Medical Cannabis</div>
					<br />

					<div className="center">KaliHerb Collective was founded on the commitment to provide the best in medical marijuana services.
integrity continues to be the mission and objective of our organization. Along with this guiding principle, are a
commitment to be honest, fair, courteous, and respectful of all patients. This foundation for KaliHerb
Collective rests on the basic truth of the golden rule philosophy and its applicability to our collective members,
associates and employees.</div>
					<br />
					<div className="center bold">Hours of Operation:</div>
					<div className="center bold">Mon-Fri 10:00am - 12:00am</div>
					<div className="center bold">Sat 10:00am - 12:00am</div>
					<div className="center bold">Sun 10:00am - 12:00am</div>
					<div className="center bold">Phone - 818-268-4083 | Email - kaliherbla@gmail.com</div>

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

			  			<AboutPage></AboutPage>
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