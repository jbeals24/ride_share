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
		// https://stackoverflow.com/questions/60512031/in-objection-js-whats-the-benefit-of-setting-up-relationmappings
		// https://vincit.github.io/objection.js/guide/query-examples.html#eager-loading
		const locationWithState = await Location.query().limit(1).withGraphFetched('stateName')
		console.log(locationWithState)

		/*
		const locations = await Location.query()
			.select('id', 'name') 
			.where('id', 1)
		const st = await locations 
			.$relatedQuery('state');
			console.log(locations);
			console.log(st);
		*/
	}
	catch (err){
		console.log(`error: ${err}`);
	}	
}

stateWithLocation();
