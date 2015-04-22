
var ProductCatalog = React.createClass({
	render: function() {
		var Table = ReactBootstrap.Table; 
		var ButtonGroup = ReactBootstrap.ButtonGroup; 
		var Button = ReactBootstrap.Button; 
		var tableRows = this.props.products.map(function(product, index){
			return (
				<tr key={index}>
					<td><img src={product.image} width={100} /></td>
					<td>{product.category}</td>
					<td>{product.title}</td>
					<td>{product.description}</td>
				</tr>
			); 
		}); 
		return (
			<div className="container">
				<h1>Product Catalog</h1>
				<ButtonGroup>
					<Button>List</Button>
					<Button>Grid</Button>					
				</ButtonGroup>				
				<div className="row">
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>Image</th>
								<th>Category</th>
								<th width={200}>Title</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{tableRows}					
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
var products = [
	{category: 'Indica', title: 'Jedi OG', key: 1, image: 'https://d2kxqxnk1i5o9a.cloudfront.net/uploads/pictures/menu_items/844291/large_Jedi_.jpg', description: 'This indica produces strong body high with minimal effect on perception; it’s great for chronic pain relief. A High Times bud of the year winner. A cross between Deathstar and San Fernando Valley OG Kush that blends into a great marijuana strain.'}, 
	{category: 'Indica', title: 'Purple Chem Dawg', image: 'https://d2kxqxnk1i5o9a.cloudfront.net/uploads/pictures/menu_items/819311/large_P.CHEM_DAWG_.jpeg', key: 2, description: 'It has a slight numbing analgesic effect on the sinuses, lungs and throat similar to the feeling of cold medications. The offspring of Grandaddy Purps and Chem Dog, this hybrid encourages introspective thoughts and reasoning. It is good for anxiety, upper body pain, migraines, depression, PTSD, PMS and nausea.'}, 
	{category: 'Indica', title: 'Grand Daddy Diesel', image: 'https://d2kxqxnk1i5o9a.cloudfront.net/uploads/pictures/menu_items/999515/large_Cherry_Pie_Cannabis_strain_1.PNG', key: 3, description: 'N/A'}, 
]; 

var KaliherbApp = React.createClass({
	render: function() {
		var Navbar = ReactBootstrap.Navbar; 
		var Nav = ReactBootstrap.Nav;
		var MenuItem = ReactBootstrap.MenuItem; 
		var NavItem = ReactBootstrap.NavItem;
		var DropdownButton = ReactBootstrap.DropdownButton; 
		return (
			  <div>
				  <Navbar brand='Kaliherb' inverse toggleNavKey={0} id="navbar">			  	
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