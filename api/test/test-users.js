//const knex =require('knex'); 
const {User} = require('../models/user.js');
const {knex} = require('../db.js');
const {Ride} = require('../models/ride.js');
const {Passenger} = require('../models/passenger.js');



async function userWithRide (){
	try {
		const userAndRide= await User.query().limit(1).withGraphFetched('rideId')
		console.log(userAndRide)
	}
	catch (err){
		console.log(`error: ${err}`);
	
	}
}

userWithRide();
