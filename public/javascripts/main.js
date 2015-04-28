
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
			<div className="container">
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
									[<tr><td colSpan={3} style={{textTransform: "uppercase"}}>{key}</td></tr>].concat(comps[key])
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
		return (
			  <div>
				  <Navbar brand='' inverse fixedTop toggleNavKey={0} id="navbar">	
				    <Nav eventKey={1}> {/* This is the eventKey referenced */}
				      <NavItem>
				      <img id="logo" src="/images/logo.jpg" />
				      </NavItem>				      	
				      <NavItem eventKey={2} href='#' className="margin10">(818) 268-4083</NavItem>
				    </Nav>

				    <Nav right eventKey={1}> {/* This is the eventKey referenced */}				      	
				      <NavItem eventKey={2} href='#' className="margin10">About</NavItem>
				      <NavItem eventKey={3} href='#' className="margin10">Contact</NavItem>
				      <NavItem eventKey={3} href='#' className="margin10">Register</NavItem>

				    </Nav>
				  </Navbar>
				  <ProductCatalog products={products} />
			  </div>
			  
			);
	}
});

React.render(<KaliherbApp />, document.getElementById('main')); 