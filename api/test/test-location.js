const {Location} = require('../models/location.js');
const {knex} = require('../db.js');
const {State} = require('../models/state.js');

/*
Location.query()
	.where('id', 1)
	.then(location => {
		console.log(location);
		return location.$relatedQuery('state');
	})
	.then(location => console.log(location))
	.catch(error => console.log(error.message));

*/
async function stateWithLocation (){
	try {
		const locations = await Location.query()
			.select('id', 'name') 
			.where('id', 1)
		//console.log(locations);
		const st = await locations 
			.$relatedQuery('state');
			console.log(locations);
			console.log(st);
		
	}
	catch (err){
		console.log(`error: ${err}`);
	}	
}

stateWithLocation();
