const {Model} = require('objection');

class Location extends Model {
	static get tableName(){
		return 'location';
	}
	static get relationMappings() {
		return {
			state: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'location.stateId',
					to: 'state.stateId'
				}
			}
		}
	}
}


module.exports = {Location};
