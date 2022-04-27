const {Model} = require('objection');
const {State} = require('../models/state.js');
class Location extends Model {
	static get tableName(){
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
			}
		}
	}
}


module.exports = {Location};
