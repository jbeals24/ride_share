//const knex =require('knex'); 
const {User} = require('../models/user.js');
const {knex} = require('../db.js');
const {Ride} = require('../models/ride.js');
const {Passenger} = require('../models/passenger.js');


/*
User.query()
	.select('id', 'firstName')
	.first()
	.then(user => console.log(user))
	.catch(error => console.log(error.message));
*/

async function userWithRide (){
	try{
		const userAndRide= await User.query().limit(1).withGraphFetched('rideId')
		console.log(userAndRide)
	catch (err){
		console.log(`error: ${err}`);
	}
	}
}

userWithRide();
