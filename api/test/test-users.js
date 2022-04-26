//const knex =require('knex'); 
const {User} = require('../models/user.js');
const {knex} = require('../db.js');

User.query()
	.select('id', 'firstName')
	.first()
	.then(user => console.log(user))
	.catch(error => console.log(error.message));
