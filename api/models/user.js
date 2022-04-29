const {Model} = require('objection');
const {knex} = require('../db.js');

class User extends Model {
	static get tableName() {
		return 'user';
	}
	 static get relationMappings() {
                return {
			driverUser: {
                                relation: Model.HasManyRelation,
                                modelClass: __dirname + '/Driver',
                                join: {
                                        from: 'user.id',
                                        to: 'driver.userId'
                                }
                        }
		}
	}
}
	

module.exports = {User};

//COMMENTS
//Would this not be driver and passenger?
//user and driver may be one-one relation

