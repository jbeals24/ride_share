const {Model} = require('objection');
const {Driver} = require('../models/driver');
//const {Passenger} = require('../models/passenger');
const {Ride} = require('../models/ride');

class User extends Model {
	static get tableName() {
		return 'user';
	}
	static get relationMappings(){
	return{
		Driver:{
			relation: Model.HasManyRelation,
			modelClass: driver,
			join:{
				from: 'user.id',
				to: 'driver.userId'
			}
		},Ride:{
			relation: Model.HasManyRelation,
			modelClass: ride,
			join:{
				from: 'user.id',
				through:{
					from: 'passenger.userId',
					to: 'passenger.rideId',
				},to: 'ride.id',
			}
		}
	}
	}
}
module.exports = {User}

/*
const {Model} = require('objection');

class User extends Model {
	static get tableName(){
		return 'user';
	}
}

module.exports = {User};
*/
