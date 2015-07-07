
var ProductCatalog = React.createClass({
	render: function() {
		var Table = ReactBootstrap.Table; 
		var ButtonGroup = ReactBootstrap.ButtonGroup; 
		var Button = ReactBootstrap.Button; 
		var Row = ReactBootstrap.Row; 
		var Col = ReactBootstrap.Col; 

		var keys = []; 
		var comps = {}; 

		for(key in this.props.products) {
			keys.push(key); 
			comps[key] = this.props.products[key].map(function(product, index){
				return (				
					<tr key={index} className="dashed-border">						
						<td>
							<Row>
								<Col md={2}><span className="price-line">{product.title}</span></Col>
								<Col>
									<span className="price-line"><span className="price">${product.prices.gram}</span> g</span>
									<span className="price-line"><span className="price">${product.prices.eighth}</span> 1/8</span>
									<span className="price-line"><span className="price">${product.prices.quarter}</span> 1/4</span>
									<span className="price-line"><span className="price">${product.prices.half}</span> 1/2</span>
									<span className="price-line"><span className="price">${product.prices.ounce}</span> oz</span>								
								</Col>
							</Row>
							<Row>
								<Col md={2}><img src={product.image} width={100} /></Col>
								<Col><div>{product.description}</div></Col>
							</Row>							
						</td>						
					</tr>
				); 
			}); 
		}

		return (
			<div className="container" style={{backgroundColor: "white"}}>
				<div className="row" style={{padding: "20px"}}>
					<h1>Menu</h1>
					<Table hover>
						{/*
						<thead>
							<tr>
								<th>Image</th>
								<th width={200}>Title</th>
								<th>Description</th>
							</tr>
						</thead>
						*/}
						<tbody>							
							{keys.map(function(key){
								return (
									[<tr className="category"><td colSpan={3}>{key}</td></tr>].concat(comps[key])
								);
							})}					
						</tbody>
					</Table>
				</div>
			</div>
		);
	}, 

	componentDidMount: function() {
		console.log('componentDidMount with products: ', this.props.products); 
	}
}); 


//var ProductGrid = React.createClass({}); 
 

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

				  		<ProductCatalog products={products} />

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