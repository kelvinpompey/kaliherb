
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
								<Col md={2}><span className="product-title">{product.title}</span></Col>
								<Col>
									<div className="price-line"><span className="">{product.prices.gram}</span> gr</div>
									<div className="price-line2"><span className="">{product.prices.eighth}</span> ⅛</div>
									<div className="price-line"><span className="">{product.prices.quarter}</span> ¼</div>
									<div className="price-line2"><span className="">{product.prices.half}</span> ½</div>
									<div className="price-line"><span className="">{product.prices.ounce}</span> oz</div>								
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
					<h1 style={{textAlign: "center"}}>Menu</h1>
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
						<Row className="striped" style={{transform: "rotate(180deg)"}}></Row>	  	  
			  			<Row id="header">
			  				<Col sm={4}><a href="/"><img src="images/logo2.jpg" className="logo"/></a></Col>
			  				<Col sm={8} className="contact-line">
			  					<div style={{marginLeft: "100px"}}>PH: (818) 268-4083 OPEN 10AM - 12AM DAILY 7 DAYS A WEEK</div>			  				
			  					<Row className="header-menu">
			  						<Col md={3} className="header-menu-item"><a href="/">Home</a></Col>
			  						<Col md={3} className="header-menu-item"><a href="/about">About</a></Col>
			  						<Col md={3} className="header-menu-item"><a href="#">Contact Us</a></Col>
			  						<Col md={3} className="header-menu-item"><a href="/register">Register</a></Col>
			  					</Row>
			  				</Col>
			  			</Row>
			  			<Row className="striped"></Row>
			  			<Row style={{marginBottom: "20px"}}></Row>

				  		<ProductCatalog products={products} />

			  			<Row style={{marginTop: "20px"}}></Row>
						<Row className="striped" style={{transform: "rotate(180deg)"}}></Row>	  	  
			  			<Row id="header">
			  				<Col sm={3}><img src="images/logo2.jpg" className="logo"/></Col>
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
			  			<Row className="striped"></Row>				  		
			  </div>
			  
			);
	}
});

React.render(<KaliherbApp />, document.getElementById('main')); 