const { Location } = require('../models/location.js');
const { knex } = require('../db.js');
const { State } = require('../models/state.js');


async function stateWithLocation() {
	try {
		// https://stackoverflow.com/questions/60512031/in-objection-js-whats-the-benefit-of-setting-up-relationmappings
		// https://vincit.github.io/objection.js/guide/query-examples.html#eager-loading
		const locationWithState = await Location.query().limit(1).withGraphFetched('stateName')
		console.log(locationWithState)
	}
	catch (err) {
		console.log(`error: ${err}`);
	}
}

stateWithLocation();
