const { Vehicle } = require('../models/vehicle.js');
const { knex } = require('../db.js');
const { Ride } = require('../models/ride.js');
const { VehicleType } = require('../models/vehicleType.js');


async function rideVehicle() {
        try {

                const rv = await
                Ride.query().limit(1).withGraphFetched('vehicleId')
                console.log(rv)

        }
        catch (err) {
                console.log(`error: ${err}`);
        }
}


rideVehicle();


