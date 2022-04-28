const {Model} = require('objection');
const {knex} = require('../db.js');
const {User} = require('../models/user.js');

class Ride extends Model {
        static get tableName(){
                return 'ride';
        }
	static get relationMappings(){
		return{
			User:{
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/User',
				join:{
					from: 'ride.id',
					through: {
						from: 'passenger.rideId',
						to: 'passenger.userId',
					}
					to: 'user.id'
				}
			},
			fromLocation:{
				relation:Model.HasManyRelation,
				model: __dirname + '/Location',
				join: {
					from: 'ride.fromLocationId',
					to: 'location.id'
				}
			},
			toLocation:{
				relation:Model.HasManyRelation,
				model: __dirname + '/Location',
				join: {
					from: 'ride.toLocationId',
					to: 'location.id'
				}
			}
			vehicleId:{
				relation:Model.HasManyRelation,
				model: __dirname + '/Vehicle',
				join:{
					from: 'ride.vehicleId',
					to: 'vehicle.id'
				}
			}
		}
	}
}

module.exports = {Ride}
