const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'pg.cse.taylor.edu'
		database: 'jada_bonnett'
	}
});

const objection = require('objection');
const Model = objection.MOdel;
Model.knex(knex);

