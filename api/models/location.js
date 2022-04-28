const { Model } = require('objection');
const { State } = require('../models/state.js');

class Location extends Model {
	static get tableName() {
		return 'location';
	}
	static get relationMappings() {
		return {
			stateName: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'location.state',
					to: 'state.abbreviation'
				}
			},
			toLocation:{
				relation: Model.HasManyRelation,
				modelClass: __dirname + '/Location',
				join:{
					from: 'location.id',
					to: 'ride.toLocationId',
				}
			},
			fromLocation:{
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Location',
                                join:{
                                        from: 'location.id',
                                        to: 'ride.fromLocationId',
                                }
			} 
		}
	}
}


module.exports = { Location };
