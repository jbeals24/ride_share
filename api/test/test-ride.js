const { Vehicle } = require('../models/vehicle.js');
const { knex } = require('../db.js');
const { Ride } = require('../models/ride.js');
const { VehicleType } = require('../models/vehicleType.js');
const { Location } = require('../models/location.js');


async function rideVehicle() {
        try {

                const rv = await
                Ride.query().limit(1).withGraphFetched('vRide')
                console.log(rv)

        }
        catch (err) {
                console.log(`error: ${err}`);
        }
}

async function rideTo() {
        try {

                const rt = await
                Ride.query().limit(1).withGraphFetched('toLocation')
                console.log(rt)

        }
        catch (err) {
                console.log(`error: ${err}`);
        }
}

async function rideFrom() {
        try {

                const rf = await
                Ride.query().limit(1).withGraphFetched('fromLocation')
                console.log(rf)

        }
        catch (err) {
                console.log(`error: ${err}`);
        }
}




rideVehicle();
rideTo();
rideFrom();


