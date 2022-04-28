const {Model} = require('objection');
const { State } = require('../models/state.js'); 
const { VehicleType } = require('../models/vehicleType.js');


class Vehicle extends Model {
        static get tableName(){
                return 'vehicle';
        }
	 static get relationMappings() {
                return {
                        stateName: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: State,
                                join: {
                                        from: 'vehicle.licenseState',
                                        to: 'state.abbreviation'
                                }
                        },
			vType: {
                                relation: Model.BelongsToOneRelation,
                                modelClass: VehicleType,
                                join: {
                                        from: 'vehicle.vehicleTypeId',
                                        to: 'vehycleType.id'
                                }
                        },
			rideId: {
				relation: Model.BelongsToOneRelation,
				modelClass: rideId,
				join:{
					from: 'vehicle.id',
					to: 'ride.vehicleId'
				}

			}

                }
        }
}



module.exports = {Vehicle};

