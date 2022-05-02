const {Model} = require('objection');
const {knex} = require('../db.js');
const {State} = require('../models/state.js');
const {Vehicle} = require('../models/vehicle.js');

class Driver extends Model {
        static get tableName() {
                return 'driver';
        }
	static get relationMappings(){
		return{
			 driverState: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: State,
                                join: {
                                        from: 'driver.licenseState',
                                        to: 'state.abbreviation'
                                }
                        }
			driverUser: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'driver.userId'
					to: 'user.id'
				}
			}
			authorize: {
				relation: Model.ManyToManyRelation,
				modelClass: Authorization,
				Join: {
					from: 'driver.id'
					through: {
						from: 'authorization.driverId',
						to: 'authorization.vehicleId'

					},
					to: 'vehicle.id'
				}
			}
			driversId: {
				relation: Model.ManyToManyRelation,
				modelClass: Drivers,
				join:{
					from: 'driver.id'
					through: {
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


