const {Model} = require('objection');
const {Location} = require("../models/location")

class State extends Model {
        static get tableName(){
                return 'state';
        }
	static get relationMappings() {
		return {
			stateName: {
				relation: Model.BelongsToOneRelation,
				modelClass: Location,
				join: {
					from: 'state.abbreviation',
					to: 'location.state'
				}
			}
		}
	}
}
module.exports = {State};

