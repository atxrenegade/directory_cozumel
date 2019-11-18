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
[ 'Hotel Best', 'hotel' ],
[ 'Moonlight Hotel', 'hotel' ],
[ 'Hotel Artist', 'hotel' ],
[ 'Leather Hotel', 'hotel' ],
[ 'Protection Hotel', 'hotel' ],
[ 'Name Hotel', 'hotel' ],
[ 'Championship Hotel', 'hotel' ],
[ 'Exclusive Hotel', 'hotel' ]
]
businesses_list2 = [
[ 'Shire Hotel', 'hotel' ],
[ 'Print Hotel', 'hotel' ],
[ 'Hotel Hawk', 'hotel' ],
[ 'Kid Hotel', 'hotel' ],
[ 'Pascal Hotel', 'hotel' ],
[ 'Hotel Storage', 'hotel' ],
[ 'Hardware Mate', 'hardware store' ],
[ 'All Hardware', 'hardware store' ],
[ 'FourStar Hardware', 'hardware store' ],
[ 'Secret Hardware', 'hardware store' ],
[ 'Insight Hardware', 'hardware store' ],
[ 'Metropolis Hardware', 'hardware store' ],
[ 'Intrepid Hardware', 'hardware store' ],
[ 'Hardware Chef', 'hardware store' ],
[ 'Link Hardware', 'hardware store' ],
[ 'Swift Hardware', 'hardware store' ],
[ 'Shift Hardware', 'hardware store' ],
[ 'Capricorn Hardware', 'hardware store' ],
[ 'Hardware Widget', 'hardware store' ],
[ 'Hybrid Hardware', 'hardware store' ],
[ 'Dodge Hardware', 'hardware store' ],
[ 'Measure Hardware', 'hardware store' ],
[ 'Hardware Department', 'hardware store' ],
[ 'Kayak Hardware', 'hardware store' ],
[ 'FineLine Hardware', 'hardware store' ],
[ 'Mainline Hardware', 'hardware store' ],
[ 'Gas Station Time', 'gas station' ],
[ 'Cupcake Gas Station', 'gas station' ],
[ 'Gas Station Candy', 'gas station' ],
[ 'EaglEeye Gas Station', 'gas station' ],
[ 'Compare Gas Station', 'gas station' ],
[ 'Objective Gas Station', 'gas station' ],
[ 'Shadow Gas Station', 'gas station' ],
[ 'Tiger Gas Station', 'gas station' ],
[ 'Gifted Gas Station', 'gas station' ],
[ 'Gas Station Thread', 'gas station' ],
[ 'Sunshine Gas Station', 'gas station' ],
[ 'Candy Store Bounce', 'candy store' ],
[ 'Pre Candy Store', 'candy store' ],
[ 'Corpus Candy Store', 'candy store' ],
[ 'Net Candy Store', 'candy store' ],
[ 'ZeroPoint Candy Store', 'candy store' ],
[ 'BlueDiamond Candy Store', 'candy store' ],
[ 'Bigfoot Candy Store', 'candy store' ],
[ 'OffRoad Candy Store', 'candy store' ],
[ 'Car Rentals Savers', 'car rentals' ],
[ 'OneWorld Car Rentals','car rentals' ],
[ 'Simulation Car Rentals', 'car rentals' ],
[ 'Augmented Car Rentals', 'car rentals' ],
[ 'Turbine Car Rentals', 'car rentals' ],
[ 'Acrylic Car Rentals', 'car rentals' ],
[ 'Strength Car Rentals', 'car rentals' ],
[ 'OneMinute Car Rentals', 'car rentals' ],
[ 'Car Rentals Mega', 'car rentals' ]
]

listings_list = [
	{
	"rating": 3 ,
	"address": "Calle 22 de Enero No. 261, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 1
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 2
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 3
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 4
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 4
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 5
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 7
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 8
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 9
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 10
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 11
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 12
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 13
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 14
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 15
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 16
},
{
"rating": 3 ,
"address": "Calle 22 de Enero No. 261, Cozumel",
"phone_number": "123-456-7890",
"website": "www.example.com",
"business_id": 17
},

	{
	"rating": 3 ,
	"address": "Calle 22 de Enero No. 261, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 18
},

	{
	"rating": 2 ,
	"address": "Ave. Rafael E. Melgar, #131",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 19
	},

	{
	"rating": 5 ,
	"address": "Km 11 Carreter Transversal, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 20
	},

	{
	"rating": 1 ,
	"address": "Punta Langosta Pier, Ave. Rafael E. Melgar, #499",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 21
	},

	{
	"rating": 4 ,
	"address": "International Pier, San Miguel, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 22
	},

	{
	"rating": 4,
	"address": "10 A Sur 198 Centro, San Miguel, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 23
	},

	{
	"rating": 5,
	"address": "Av. Rafael E. Melgar, #261, San Miguel, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 24
	},

	{
	"rating": 1,
	"address": "Royal Village Shopping Center, Ave. Rafael E. Melgar, San Miguel, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 25
	},

	{
	"rating": 3,
	"address": "Ave. Rafael E. Melgar at Adolfo Rosada Salas, San Miguel, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 26
	},

	{
	"rating": 3,
	"address": "Av. Rafael E. Melgar, #33, San Miguel, Cozumel",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 27
	},

	{
	"rating": 2,
	"address": "Ave. Rafael E. Melgar, Esquina Calle 2 Norte",
	"phone_number": "123-456-7890",
	"website": "www.example.com",
	"business_id": 28
	}
]


categories_list.each do |name|
	Category.create( name: name )
end

businesses_list_1.each do |name, category_id|
	Business.create( name: name)
	Business.category = Category.find(category_id).name
end

businesses_list_2.each do |name, category_id|
	Business.create( name: name)
	Business.category = Category.find(category_id).name
end


listings_list.each do |rating, phone_number, address, website, business_id |
	Listing.create(rating: rating, phone_number: phone_number, address: address, website: website, business_id: business_id)
end

reviews_list.each do |content, contributor, contributor_email, rating, business_id|
	Review.create(content: content, contributor:contrbutor, contributor_email: contributor_email, rating: rating, business_id: business_id)
end

images_list.each do |description, date, url, contributor, constibutor_email, business_id|
	Image.create(description: description, date: date , url: url, contributor: contributor, constibutor_email: contributor_email, business_id: business_id)
end

maps_list.each do |map_coords, business_id|
	Map.create(map_coords: map_coords, business_id: business_id)
end		
