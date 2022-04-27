const { Model } = require('objection');

class State extends Model {
	static get tableName() {
		return 'state';
	}
	static get relationMappings() {
		return {
			stateName: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/Location',
				join: {
					from: 'state.abbreviation',
					to: 'location.state'
				}
			}
		}
	}
}
module.exports = { State };

