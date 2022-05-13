//get Knex goin
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'pg.cse.taylor.edu',
		database: 'jada_bonnett',
		user: 'jada_bonnett',
		password: 'dizafuqi',
	}
});


//objection stuff
const objection = require('objection');
const Model = objection.Model;
//const { Model } = require ("objection");
Model.knex(knex);

module.exports = {knex, objection, Model};


//Load classes
const User = require("./models/User");
const Driver = require("./models/driver");
const Passenger = require("./models/passenger");
const Authorization = require("./models/authorization");
const Drivers = require("./models/drivers");
const Vehicle = require("./models/vehicle");
const Ride = require("./models/ride");
const VehicleType = require("./models/vehicleType");
const State = require("./models/state");
const Location = require("./models/location");

//hapi stuff
const Hapi = require("@hapi/hapi");
const Boom = require("@hapi/boom");
const Joi = require("joi");

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 3000,
  });
  
  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true,
    },
  });

  server.route([
	{
		method: "Get",
		path: "/",
		handler: (request, h) => "Testing Hapi",
	},

	{
		method: "GET",
                path: "/users",
                handler: (request, h) => {
			return knex
				.select('id','firstName','lastName','email','phone')
				.from('user')
		}
	},
	
	{


		method: "GET",
      		path: "/testingUsers",
      		handler: async (request, h) => {
			try{
				const users = await User.query()
					.select('id','firstName','lastName','email','phone')
				return users
			} catch(err) {
				Boom.boomify(err);
			}	
		}

	},

	{
		method: "GET",
                path: "/drivers",
                handler: (request, h) => {
                        return knex
                                .select('id','userId','licenseNumber','licenseState')
                                .from('driver')
                }

	},

	{
		method: "GET",
                path: "/vehicles",
                handler: (request, h) => {
                        return knex
                                .select('id','make','make','model','color','capacity','mpg')
                                .from('vehicle')
                }

	},

	{
		method: "GET",
                path: "/rideInfo",
                handler: (request, h) => {
                        return knex
                                .select('id','date','time','distance','fuelPrice','fee')
                                .from('ride')
                }

	},

	{
		method: "GET",
                path: "/users/{id}",
                handler: (request, h) => {
			const userId = request.params.id;
                        return knex
                                .select('id','firstName','lastName','email','phone')
                                .from('user')
				.where('id',userId)
                }

	}
  ]);


  console.log("Server listening on", server.info.uri);
  await server.start();
};

init();

