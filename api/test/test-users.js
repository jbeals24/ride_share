

User.query()
	.select('id', 'firstName')
	.then(user => console.log(user))
	.catch(error => console.log(error.message));
