INSERT INTO public."authorization" ("driverId", "vehicleId") VALUES (1, 1);

INSERT INTO public.driver (id, "userId", "licenseState", "licenseNumber") VALUES (1, 1, 'IN', '1234');
INSERT INTO public.driver (id, "userId", "licenseState", "licenseNumber") VALUES (2, 2, 'MN', '2736');

INSERT INTO public.drivers ("driverId", "rideId") VALUES (1, 1);

INSERT INTO public.location (id, name, address, city, state, zipcode) VALUES (1, 'Bobs house', '1231', 'Upland', 'IN', '12344');
INSERT INTO public.location (id, name, address, city, state, zipcode) VALUES (2, 'Jills house', '2131', 'Upland', 'IN', '12345');

INSERT INTO public.passenger ("userId", "rideId") VALUES (2, 1);

INSERT INTO public.ride (id, date, time, distance, "fuelPrice", fee, "vehicleId", "fromLocationId", "toLocationId") VALUES (1, '2022-04-21', '09:00:00', 5, 10, 5, 1, 1, 2);

INSERT INTO public.state (abbreviation, name) VALUES ('IN', 'Indiana');
INSERT INTO public.state (abbreviation, name) VALUES ('MN', 'Minnesota');

INSERT INTO public."user" (id, "firstName", "lastName", email, password, phone, "isAdmin") VALUES (1, 'bob', 'bill', 'bob.bill', '123', '1234', true);
INSERT INTO public."user" (id, "firstName", "lastName", email, password, phone, "isAdmin") VALUES (2, 'suzy', 'may', 'suzy.may', '35643', '345', false);
INSERT INTO public."user" (id, "firstName", "lastName", email, password, phone, "isAdmin") VALUES (3, 'brooke', 'trout', 'brooke@example.com', 'password', '555-1234', false);

INSERT INTO public.vehicle (id, make, model, color, "vehicleTypeId", capacity, mpg, "licenseState", "licensePlate") VALUES (1, 'Honda', 'Civic', 'blue', 1, 4, 30, 'IN', 'db233');

INSERT INTO public."vehicleType" (id, type) VALUES (1, 'SUV');

