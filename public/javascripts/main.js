
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
				<h1>Product Catalog</h1>
				<ButtonGroup>
					<Button>List</Button>
					<Button>Grid</Button>					
				</ButtonGroup>				
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
				  <Navbar brand='Kaliherb' inverse fixedTop toggleNavKey={0} id="navbar">			  	
				    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
				      <NavItem eventKey={1} href='#'>Link</NavItem>
				      <NavItem eventKey={2} href='#'>Link</NavItem>
				      <DropdownButton eventKey={3} title='Dropdown'>
				        <MenuItem eventKey='1'>Action</MenuItem>
				        <MenuItem eventKey='2'>Another action</MenuItem>
				        <MenuItem eventKey='3'>Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey='4'>Separated link</MenuItem>
				      </DropdownButton>
				    </Nav>
				  </Navbar>
				  <ProductCatalog products={products} />
			  </div>
			  
			);
	}
});

React.render(<KaliherbApp />, document.getElementById('main')); 