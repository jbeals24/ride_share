const {Model} = require('objection');
const {knex} = require('../db.js');
const { Driver } = require('../models/driver.js');
const { Ride } = require('../models/ride.js');

class User extends Model {
	static get tableName() {
		return 'user';
	}
	 static get relationMappings() {
                return {
			driverUser: {
                                relation: Model.HasManyRelation,
                                modelClass: Driver,
                                join: {
                                        from: 'user.id',
                                        to: 'driver.userId'
                                }
                        },
			rideUser:{
				relation: Model.ManyToManyRelation,
				modelClass: Ride,
				join:{
					from: 'user.id',
					through:{
						from: 'passenger.userId',
						to: 'passenger.rideId'
					},
					to: 'ride.id'
				}
			}
		}
	}
}
	

module.exports = {User};


