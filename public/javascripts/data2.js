
	window.products = {}; 
	console.log('data2'); 
	
	function fetchProducts(callback) {
		$.get('/products', function(res){
			categorizeProducts(res, callback); 
			console.log(window.products); 
		}); 

	}

	function categorizeProducts(items, callback) {
		items.forEach(function(item){
			if(!window.products[item.category.toLowerCase()]) {
				console.log('key empty'); 
				window.products[item.category.toLowerCase()] = [item]; 
			}
			else {
				console.log('key not empty');
				window.products[item.category.toLowerCase()].push(item); 

			}
		});
		console.log('callback', callback); 
		callback(); 

	}	
