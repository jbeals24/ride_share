const { Driver } = require('../models/driver.js');
const { knex } = require('../db.js');
const { Vehicle } = require('../models/vehicle.js');

async function driversVehicles() {
        try{
                const dv = await driver.query()
		
                console.log(ct)

        }
        catch(err) {
                console.log(`error: ${err}`);
        }

}


