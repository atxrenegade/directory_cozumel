# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

categories_list = [
	'hotel',
	'hardware store',
	'gas station',
	'candy store',
	'car rentals'
]

businesses_list_1 = [
	[ 'Hotel Zilla', 'hotel' ],
	[ 'Kernel Hotel', 'hotel' ],
	[ 'Verge Hotel', 'hotel' ],
	[ 'Liquid Hotel', 'hotel' ],
	[ 'Citywide Hotel', 'hotel' ],
	[ 'Sandman Hotel', 'hotel' ]
]

businesses_list_2 = [
	[ 'Hardware Mate', 'hardware store' ],
	[ 'All Hardware', 'hardware store' ],
	[ 'FourStar Hardware', 'hardware store' ],
	[ 'Secret Hardware', 'hardware store' ],
	[ 'Insight Hardware', 'hardware store' ],
	[ 'Luxx Hardware', 'hardware store' ],

	[ 'Gas Station Time', 'gas station' ],
	[ 'Midas Gas Station', 'gas station' ],
	[ 'Gas Stop', 'gas station' ],
	[ 'EagleEye Gas Station', 'gas station' ],
	[ 'Compare Gas Station', 'gas station' ],
	[ 'Discount Gas Station', 'gas station' ],

	[ 'Candy Store Bounce', 'candy store' ],
	[ 'Pre Candy Store', 'candy store' ],
	[ 'Corpus Candy Store', 'candy store' ],
	[ 'Net Candy Store', 'candy store' ],
	[ 'ZeroPoint Candy Store', 'candy store' ],
	[ 'Sweetharts Candy Store', 'candy store' ],

	[ 'Car Rentals Savers', 'car rentals' ],
	[ 'OneWorld Car Rentals','car rentals' ],
	[ 'Simulation Car Rentals', 'car rentals' ],
	[ 'Augmented Car Rentals', 'car rentals' ],
	[ 'Turbine Car Rentals', 'car rentals' ],
	[ 'Budget Car Rentals', 'car rentals' ]
]

listings_list = [
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 1
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 2
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 3
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 4
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 5
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 6
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 7
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 8
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 9
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 10
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 11
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 12
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 13
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 14
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 15
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 16
	},
	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 17
	},

	{
		"overall_rating": 3 ,
		"address": "Calle 22 de Enero No. 261, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 18
	},

	{
		"overall_rating": 2 ,
		"address": "Ave. Rafael E. Melgar, #131",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 19
	},

	{
		"overall_rating": 5 ,
		"address": "Km 11 Carreter Transversal, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 20
	},

	{
		"overall_rating": 1 ,
		"address": "Punta Langosta Pier, Ave. Rafael E. Melgar, #499",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 21
	},

	{
		"overall_rating": 4 ,
		"address": "International Pier, San Miguel, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 22
	},

	{
		"overall_rating": 4,
		"address": "10 A Sur 198 Centro, San Miguel, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 23
	},

	{
		"overall_rating": 5,
		"address": "Av. Rafael E. Melgar, #261, San Miguel, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 24
	},

	{
		"overall_rating": 1,
		"address": "Royal Village Shopping Center, Ave. Rafael E. Melgar, San Miguel, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 25
	},

	{
		"overall_rating": 3,
		"address": "Ave. Rafael E. Melgar at Adolfo Rosada Salas, San Miguel, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 26
	},

	{
		"overall_rating": 3,
		"address": "Av. Rafael E. Melgar, #33, San Miguel, Cozumel",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 27
	},

	{
		"overall_rating": 2,
		"address": "Ave. Rafael E. Melgar, Esquina Calle 2 Norte",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 28
	},
	{
		"overall_rating": 2,
		"address": "Ave. Rafael E. Melgar, Esquina Calle 2 Norte",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 29
	},
	{
		"overall_rating": 2,
		"address": "Ave. Rafael E. Melgar, Esquina Calle 2 Norte",
		"phone_number": "123-456-7890",
		"website": "www.example.com",
		"business_id": 30
	}
]

images_list = [
	{
		description: 'Hotel', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 1
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 2
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 3
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 4
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 5
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 5
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://t-ec.bstatic.com/images/hotel/max1024x768/150/150315181.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 7
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 8
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 9
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 10
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 11
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 12
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 13
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 14
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 15
	},

	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 16
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 17
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 18
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 19
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 20
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 21
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: '', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 22
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: '', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 23
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 24
	},{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 25
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 26
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 27
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 28
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 29
	},
	{
		description: 'Here is a picture of our boss', date: '12/12/19', url: 'https://farm1.staticflickr.com/86/239197450_79d96e010c_z.jpg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 30
	},
	{
		description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 1
	},

		description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 2
	},

	description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 3
	},

	description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 4
	},

	description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 5
	},
	description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 6
	}
]

reviews_list = [
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 1
	},
	{
		content: 'This place sucks I changed my mind!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 1
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 2
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 3
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 4
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 5
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 6
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 7
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 8
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 9
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 10
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 11
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 12
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 13
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 14
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 15
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 16
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 17
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 18
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 19
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 20
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 21
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 22
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 23
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 24
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 25
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 26
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 27
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 28
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 29
	},
	{
		content: 'This place is awesome!', contributor: 'Sarah Little', contributor_email: 'sarahlittle@gmail.com', rating: 5, business_id: 30
	}
]

maps_list = [
	{ lat: 20.509130, lng:  -86.950238, business_id: 1 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 2 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 3 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 4 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 5 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 6 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 7 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 8 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 9 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 10 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 11 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 12 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 13 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 14 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 15 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 16 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 17 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 18 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 19 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 20 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 21 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 22 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 23 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 24 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 25 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 26 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 27 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 28 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 29 },
	{ lat: 20.509130, lng:  -86.950238, business_id: 30 }
]

categories_list.each do |name|
	Category.create( name: name )
end

businesses_list_1.each do |name, category_name|
	Business.build_new_business(name, category_name)
end

businesses_list_2.each do |name, category_name|
	Business.build_new_business(name, category_name)
end

Listing.create(listings_list)
Review.create(reviews_list)
Map.create(maps_list)
Image.create(images_list)
