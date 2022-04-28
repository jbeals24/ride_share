const {Model} = require('objection');
const {knex} = require('../db.js');

class Driver extends Model {
        static get tableName() {
                return 'driver';
        }
	static get relationMappings(){
		return{
			User:{
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/user',
				join:{
					from: 'driver.userId',
					to: 'user.id'
				}
			},
			State:{
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/state',
				join:{
					from: 'driver.licenseState',
					to: 'state.abbreviation'
				}
			},
			Vehicle:{
				relation: Model.HasManyRelation,
				modelClass: __dirname + '/vehicle',
				join:{
					from: 'driver.id',
				through:{
					from: 'authorization.driverId',
					to: 'authorization.vehicleId'
				}
					to: 'vehicle.id'
				}
			},
			Ride:{
				relation: Model.HasManyRelation,
				modelClass: __dirname + '/ride',
				join:{
					from: 'driver.id',
				through:{
					from: 'drivers.driverId',
					to: 'drivers.rideId'
				}
					to: 'ride.id'
				}
			}
		}
	}
}

module.exports = {Driver};
