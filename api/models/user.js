const {Model} = require('objection');
const {Driver} = require('../models/driver.js');
const {Passenger} = require('../models/passenger.js');
const {Ride} = require('../models/ride.js');
const {Vehicle} = require ('../models/vehicle.js');
const {VehicleType} = require('../models/vehicleType.js');
const {State} = require('../models/state.js');
const {knex} = require('../db.js');
const {Location} = require('../models/location.js');

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
module.exports = {User};

//COMMENTS
//Would this not be driver and passenger?
//user and driver may be one-one relation

