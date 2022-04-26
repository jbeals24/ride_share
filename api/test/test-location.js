const {Location} = require('../models/location.js');
const {knex} = require('../db.js');

Location.query()
	.where('id', 1)
	.then(location => {
		console.log(location);
		return location.$relatedQuery('state');
	})
	.then(location => console.log(location))
	.catch(error => console.log(error.message));
