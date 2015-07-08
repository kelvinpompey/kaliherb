var AboutPage = React.createClass({
	render: function() {
		var Grid = ReactBootstrap.Grid; 
		var Row = ReactBootstrap.Row; 
		return (
			<Grid>
				<Row>
					<h1>About Us</h1>
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
			  				<Col mdOffset={4} md={2} className="header-menu-item">About</Col>
			  				<Col md={2} className="header-menu-item">Contact Us</Col>
			  				<Col md={2} className="header-menu-item">Register</Col>			  			
			  			</Row>

			  			<Row className="header-bottom">
							<Col sm={4} style={{height: "57px"}}><img src="images/logo2.jpg" className="logo"/></Col>
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