
var ProductCatalog = React.createClass({
	render: function() {
		var Table = ReactBootstrap.Table; 
		var ButtonGroup = ReactBootstrap.ButtonGroup; 
		var Button = ReactBootstrap.Button; 

		var keys = []; 
		var comps = {}; 

		for(key in this.props.products) {
			keys.push(key); 
			comps[key] = this.props.products[key].map(function(product, index){
				return (				
					<tr key={index}>
						<td><img src={product.image} width={100} /></td>
						<td>
							<span className="price-line"><span className="price">${product.prices.gram}</span> g</span>
							<span className="price-line"><span className="price">${product.prices.eighth}</span> 1/8</span>
							<span className="price-line"><span className="price">${product.prices.quarter}</span> 1/4</span>
							<span className="price-line"><span className="price">${product.prices.half}</span> 1/2</span>
							<span className="price-line"><span className="price">${product.prices.ounce}</span> oz</span>
							<h2 className="title">{product.title}</h2>
							<div>{product.description}</div>
						</td>						
					</tr>
				); 
			}); 
		}

		return (
			<div className="container" style={{backgroundColor: "white"}}>
				<div className="row">
					<Table striped bordered condensed hover>
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
									[<tr><td colSpan={3} style={{textTransform: "uppercase", fontWeight: "bold"}}>{key}</td></tr>].concat(comps[key])
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
			  				<Col sm={4}><img src="images/logo2.jpg" id="logo"/></Col>
			  				<Col sm={8} className="contact-line">
			  					PH: (818) 268-4083 OPEN 10AM - 12AM DAILY 7 DAYS A WEEK
			  					<Row className="header-menu">
			  						<Col md={3} className="header-menu-item">About</Col>
			  						<Col md={3} className="header-menu-item">Contact Us</Col>
			  						<Col md={3} className="header-menu-item">Register</Col>
			  					</Row>
			  				</Col>
			  			</Row>
			  			<Row className="striped"></Row>
			  			<Row style={{marginBottom: "20px"}}></Row>
				  	<ProductCatalog products={products} />
			  </div>
			  
			);
	}
});

React.render(<KaliherbApp />, document.getElementById('main')); 