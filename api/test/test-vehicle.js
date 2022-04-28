
const { Vehicle } = require('../models/vehicle.js');
const { knex } = require('../db.js');
const { State } = require('../models/state.js');
const { VehicleType } = require('../models/vehicleType.js');


async function vehicleState() {
        try {
                // https://stackoverflow.com/questions/60512031/in-objection-js-whats-the-benefit-of-setting-up-relationmappings
                // https://vincit.github.io/objection.js/guide/query-examples.html#eager-loading

                const vs = await
                Vehicle.query().limit(1).withGraphFetched('stateName')
                console.log(vs)

        }
        catch (err) {
                console.log(`error: ${err}`);
        }
}

async function carType() {
	try{
		const ct = await
		Vehicle.query().limit(1).withGraphFetched('vType')
		console.log(ct)

	}
	catch(err) {
		console.log(`error: ${err}`);
	}

}

vehicleState();
carType();

