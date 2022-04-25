const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'pg.cse.taylor.edu',
		database: 'jada_bonnett',
		user: 'jada_bonnett',
		password: 'dizafuqi',
	}
});

const objection = require('objection');
const Model = objection.Model;
Model.knex(knex);

module.exports = {knex, objection, Model};

