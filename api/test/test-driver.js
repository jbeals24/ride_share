const { Driver } = require('../models/driver.js');
const { knex } = require('../db.js');
const { Vehicle } = require('../models/vehicle.js');

async function driversVehicles() {
        try{
                const dv = await driver.query()
		
                console.log(dv)

        }
        catch(err) {
                console.log(`error: ${err}`);
        }

}

async function driverState() {
        try{
                const ds = await driver.query()

                console.log(ds)

        }
        catch(err) {
                console.log(`error: ${err}`);
        }

}

