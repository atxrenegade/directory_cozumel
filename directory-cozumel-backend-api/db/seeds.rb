# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

#The CATEGORIES LIST portion of the seed file should always be loaded for testing AND production!
#comment out EVERYTHING below Categoires when not in TESTING mode

categories_list = [
	['Accommodations - Boutique Hotels', 'Categoria 1'],
	['Accommodations - Dive Hotels',  'Categoria 2'],
	['Accommodations - Eco Hotels', 'Categoria 3'],
	['Accommodations - Extended Stay', 'Categoria 4'],
	['Accommodations - Hostels', 'Categoria 5'],
	['Accommodations - Hotels', 'Categoria 6'],
	['Accommodations - Motels', 'Categoria 7'],
	['Accommodations - Resorts', 'Categoria 8'],
	['Accommodations - Time Shares & Condominiums', 'Categoria 9'],
	['Animal Hospitals', 'Categoria 10'],
	['Artists', 'Categoria 11'],
	['Automotive - Auto Dealers – New', 'Categoria 12'],
	['Automotive - Auto Dealers – Used', 'Categoria 13'],
	['Automotive - Auto Parts & Accessories', 'Categoria 14'],
	['Automotive - Detail & Carwash', 'Categoria 15'],
	['Automotive - Motorcycle Sales & Repair Rental & Leasing', 'Categoria 16'],
	['Automotive - Service, Repair & Parts Towing', 'Categoria 17'],
	['Banking & Financial Institutions', 'Categoria 18'],
	['Barber & Beauty Salons', 'Categoria 19'],
	['Bike Repair', 'Categoria 20'],
	['Catering & Supplies', 'Categoria 21'],
	['Computer Programming & Support Consumer', 'Categoria 22'],
	['Construction & Contractors - Architects', 'Categoria 23'],
	['Construction & Contractors - Blasting & Demolition', 'Categoria 24'],
	['Construction & Contractors - Building Materials & Supplies', 'Categoria 25'],
	['Construction & Contractors - Construction Companies', 'Categoria 26'],
	['Construction & Contractors - Electricians', 'Categoria 27'],
	['Construction & Contractors - Engineers & Surveyors', 'Categoria 28'],
	['Construction & Contractors - Landscape Architects', 'Categoria 29'],
	['Construction & Contractors - Plaster & Concrete', 'Categoria 30'],
	['Construction & Contractors - Plumbers', 'Categoria 31'],
	['Construction & Contractors - Roofers', 'Categoria 32'],
	['Consultants', 'Categoria 33'],
	['Distribution, Import/Export Manufacturing', 'Categoria 34'],
	['Dry Cleaners & Laundromats', 'Categoria 35'],
	['Educational - Adult & Continuing Education', 'Categoria 36'],
	['Educational - Early Childhood Education', 'Categoria 37'],
	['Educational - Educational Resources', 'Categoria 38'],
	['Educational - Other Educational', 'Categoria 39'],
	['Employment Agencies', 'Categoria 40'],
	['Equipment Rentals', 'Categoria 41'],
	['Exercise & Fitness', 'Categoria 42'],
	['Financial Services - Accountants', 'Categoria 43'],
	['Funeral Service Providers & Cemeteries', 'Categoria 44'],
	['Gas Stations', 'Categoria 45'],
	['Government Agencies', 'Categoria 46'],
	['Grocery - Cheese & Dairy', 'Categoria 47'],
	['Grocery - Bakery', 'Categoria 48'],
	['Grocery - Fruit', 'Categoria 49'],
	['Grocery - General', 'Categoria 50'],
	['Grocery - Health Food', 'Categoria 51'],
	['Grocery - Meat', 'Categoria 52'],
	['Grocery - Misc', 'Categoria 53'],
	['Grocery - Seafood', 'Categoria 54'],
	['Grocery - Specialty', 'Categoria 55'],
	['Grocery - Vegetable', 'Categoria 56'],
	['Health & Medicine - Acupuncture', 'Categoria 57'],
	['Health & Medicine - Chiropractic', 'Categoria 58'],
	['Health & Medicine - Dental', 'Categoria 59'],
	['Health & Medicine - Diet & Nutrition', 'Categoria 60'],
	['Health & Medicine - Drug & Vitamin Stores', 'Categoria 61'],
	['Health & Medicine - Hospitals', 'Categoria 62'],
	['Health & Medicine - Imaging & Diagnostic', 'Categoria 63'],
	['Health & Medicine - Massage Therapy', 'Categoria 64'],
	['Health & Medicine - Medical Clinics', 'Categoria 65'],
	['Health & Medicine - Mental Health', 'Categoria 66'],
	['Health & Medicine - Nurse', 'Categoria 67'],
	['Health & Medicine - Optical', 'Categoria 68'],
	['Health & Medicine - Other', 'Categoria 69'],
	['Health & Medicine - Pediatrician', 'Categoria 70'],
	['Health & Medicine - Pharmacy', 'Categoria 71'],
	['Health & Medicine - Physical Therapy', 'Categoria 72'],
	['Health & Medicine - Physicians & Assistants', 'Categoria 73'],
	['Health & Medicine - Podiatry', 'Categoria 74'],
	['Health & Medicine - Social Worker', 'Categoria 75'],
	['Home Improvements & Repairs', 'Categoria 76'],
	['Insurance', 'Categoria 77'],
	['Landscape & Lawn Service', 'Categoria 78'],
	['Legal Services - Attorneys', 'Categoria 79'],
	['Legal Services - Other Legal', 'Categoria 80'],
	['Manufacturing, Wholesale, Distribution', 'Categoria 81'],
	['Marketing', 'Categoria 82'],
	['Massage & Body Works', 'Categoria 83'],
	['Media & Communications - Cable Service Providers', 'Categoria 84'],
	['Media & Communications - Internet Service Providers', 'Categoria 85'],
	['Media & Communications - Radio Broadcasting', 'Categoria 86'],
	['Media & Communications - Telephone Service Providers', 'Categoria 87'],
	['Media & Communications - Television Broadcasting', 'Categoria 88'],
	['Miscellaneous', 'Categoria 89'],
	['Nail Salons', 'Categoria 90'],
	['Nonprofit', 'Categoria 91'],
	['Personal Care & Services', 'Categoria 92'],
	['Pest Control', 'Categoria 93'],
	['Pool Supplies & Service', 'Categoria 94'],
	['Printing & Publishing', 'Categoria 95'],
	['Real Estate', 'Categoria 96'],
	['Real Estate - Agencies & Brokerage', 'Categoria 97'],
	['Real Estate - Agents & Brokers', 'Categoria 97'],
	['Real Estate - Apartment & Home Rental', 'Categoria 98'],
	['Real Estate - Mortgage Broker & Lender', 'Categoria 99'],
	['Real Estate - Property Management', 'Categoria 100'],
	['Real Estate - Title Company', 'Categoria 101'],
	['Recreation', 'Categoria 102'],
	['Recreation -  Golf Courses', 'Categoria 103'],
	['Recreation - Bars', 'Categoria 104'],
	['Recreation - Beach Clubs', 'Categoria 105'],
	['Recreation - Cinemas', 'Categoria 106'],
	['Recreation - Event Planners & Supplies', 'Categoria 107'],
	['Recreation - Night Clubs', 'Categoria 108'],
	['Recreation - Other', 'Categoria 109'],
	['Recreation - Venues', 'Categoria 110'],
	['Restaurants', 'Categoria 111'],
	['Restaurants - American', 'Categoria 112'],
	['Restaurants - Chinese', 'Categoria 113'],
	['Restaurants - Desserts', 'Categoria 114'],
	['Restaurants - Fast Food', 'Categoria 115'],
	['Restaurants - Fine Dining', 'Categoria 116'],
	['Restaurants - Healthy', 'Categoria 117'],
	['Restaurants - Italian', 'Categoria 118'],
	['Restaurants - Mexican', 'Categoria 119'],
	['Restaurants - Other', 'Categoria 120'],
	['Restaurants - Pizza', 'Categoria 121'],
	['Restaurants - Seafood', 'Categoria 122'],
	['Restaurants - Sushi', 'Categoria 123'],
	['Retail', 'Categoria 124'],
	['Retail - Antiques & Collectibles', 'Categoria 125'],
	['Retail - Arts & Crafts', 'Categoria 126'],
	['Retail - Baby', 'Categoria 127'],
	['Retail - Bakery', 'Categoria 128'],
	['Retail - Beauty & Fragrances', 'Categoria 129'],
	['Retail - Beverage & Tobacco', 'Categoria 130'],
	['Retail - Books & Magazines', 'Categoria 131'],
	['Retail - Candy', 'Categoria 132'],
	['Retail - Cards & Gifts', 'Categoria 133'],
	['Retail - Children\'s Clothing', 'Categoria 134'],
	['Retail - Computers & Electronics', 'Categoria 135'],
	['Retail - Convenience Store', 'Categoria 136'],
	['Retail - Crafts, Hobbies & Sports', 'Categoria 137'],
	['Retail - Department Stores', 'Categoria 138'],
	['Retail - Flower Shops', 'Categoria 139'],
	['Retail - General', 'Categoria 140'],
	['Retail - Gifts', 'Categoria 141'],
	['Retail - Hardware Stores', 'Categoria 142'],
	['Retail - Home & Garden', 'Categoria 143'],
	['Retail - Home Furnishings', 'Categoria 144'],
	['Retail - Jewelry', 'Categoria 145'],
	['Retail - Men\'s Clothing', 'Categoria 146'],
	['Retail - Office Supplies', 'Categoria 147'],
	['Retail - Other (not elsewhere classified)', 'Categoria 148'],
	['Retail - Pet and Animal Supplies', 'Categoria 149'],
	['Retail - Religion & Spirituality (for profit)', 'Categoria 150'],
	['Retail - Shoes', 'Categoria 151'],
	['Retail - Specialty', 'Categoria 152'],
	['Retail - Sports & Outdoors', 'Categoria 153'],
	['Retail - Toys & Hobbies', 'Categoria 154'],
	['Retail - Women\'s Clothing', 'Categoria 155'],
	['Security System & Services', 'Categoria 156'],
	['Services - Other', 'Categoria 157'],
	['Shipping - Packing & Shipping', 'Categoria 158'],
	['Shoe Repairs', 'Categoria 159'],
	['Sustainable Businesses', 'Categoria 160'],
	['Tailors', 'Categoria 161'],
	['Transportation - Airlines', 'Categoria 162'],
	['Transportation - Car Rentals', 'Categoria 163'],
	['Transportation - Cargo', 'Categoria 164'],
	['Transportation - Charter Bus Services', 'Categoria 165'],
	['Transportation - Ferries', 'Categoria 166'],
	['Transportation - Motorcycle Rental', 'Categoria 167'],
	['Transportation - Moving Services', 'Categoria 168'],
	['Transportation - Scooter Rental', 'Categoria 169'],
	['Transportation - Shuttles', 'Categoria 170'],
	['Transportation - Taxi', 'Categoria 171'],
	['Translation Services', 'Categoria 172'],
	['Travel & Tourism - Charter Boats', 'Categoria 173'],
	['Travel & Tourism - Cruise Lines', 'Categoria 174'],
	['Travel & Tourism - Dive Companies', 'Categoria 175'],
	['Travel & Tourism - Tour Operators', 'Categoria 176'],
	['Travel & Tourism - Travel Agents', 'Categoria 177'],
	['Utility Companies', 'Categoria 178'],
	['Veterinary & Animal Surgeons', 'Categoria 179'],
	['Wholesale', 'Categoria 180']
]

categories_list.each do |cat|
	Category.create( name: cat[0], nombre: cat[1] )
end

# ***********COMMENT OUT EVERYTHING BELOW THIS LINE WHEN NOT IN TESTING********

businesses_list_1 = [
	[ 'Hotel Zilla', 'Accommodations - Hostels' ],
	[ 'Kernel Hotel', 'Accommodations - Eco Hotels' ],
	[ 'Verge Hotel', 'Accommodations - Hotels'],
	[ 'Liquid Hotel', 'Accommodations - Resorts' ],
	[ 'Citywide Hotel', 'Accommodations - Time Shares & Condominiums' ],
	[ 'Sandman Hotel', 'Accommodations - Hotels']
]

businesses_list_2 = [
	[ 'Hardware Mate', 'Retail - Hardware Stores' ],
	[ 'All Hardware', 'Retail - Hardware Stores' ],
	[ 'FourStar Hardware', 'Retail - Hardware Stores' ],
	[ 'Secret Hardware', 'Retail - Hardware Stores' ],
	[ 'Insight Hardware', 'Retail - Hardware Stores' ],
	[ 'Luxx Hardware', 'Retail - Hardware Stores' ],

	[ 'Gas Station Time', 'Gas Stations' ],
	[ 'Midas Gas Station', 'Gas Stations' ],
	[ 'Gas Stop', 'Gas Stations' ],
	[ 'EagleEye Gas Station', 'Gas Stations' ],
	[ 'Compare Gas Station', 'Gas Stations' ],
	[ 'Discount Gas Station', 'Gas Stations' ],

	[ 'Candy Store Bounce', 'Retail - Candy' ],
	[ 'Pre Candy Store', 'Retail - Candy' ],
	[ 'Corpus Candy Store', 'Retail - Candy' ],
	[ 'Net Candy Store', 'Retail - Candy' ],
	[ 'ZeroPoint Candy Store', 'Retail - Candy' ],
	[ 'Sweetharts Candy Store', 'Retail - Candy' ],

	[ 'Car Rentals Savers', 'Transportation - Car Rentals' ],
	[ 'OneWorld Car Rentals',	'Transportation - Car Rentals' ],
	[ 'Simulation Car Rentals', 'Transportation - Car Rentals' ],
	[ 'Augmented Car Rentals', 	'Transportation - Car Rentals' ],
	[ 'Turbine Car Rentals', 'Transportation - Car Rentals' ],
	[ 'Budget Car Rentals', 'Transportation - Car Rentals' ]
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

operation_list = [
	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 1
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 3
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 5
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 7
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 9
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 11
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 13
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 15
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 17
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 19
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 21
	},


	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 23
	},

	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 25
	},


	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 27
	},
	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 29
	},
	{
		'current_status': true,
		'weekday_hours': ['9am-5pm','9am-5pm', '9am-1pm','9am-7pm', '10am-10pm'],
		'weekend_hours': ['closed', 'closed'],
		'opening_date': 2020-07-01,
		'occupancy_rate': 25,
		'reservation_required': true,
		'notes': 'Open for take out on weekends',
		'business_id': 30
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
	{
		description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 2
	},
	{
		description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 3
	},
	{
		description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 4
	},
	{
		description: 'Here is a different picture of our boss', date: '12/12/19', url: 'https://www.jetsetter.com/uploads/sites/7/2018/06/7iBtDD5x-1380x1035.jpeg', contributor: 'Frank the Tank', contributor_email: 'frankjones@yahoo.com', business_id: 5
	},
	{
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

businesses_list_1.each do |name, category_name|
	Business.build_new_business(name, category_name)
end

businesses_list_2.each do |name, category_name|
	Business.build_new_business(name, category_name)
end

Listing.create(listings_list)
Operation.create(operation_list)
Review.create(reviews_list)
Map.create(maps_list)
Image.create(images_list)

entry_seeds = [
	{ 'entry_type': 'new bus',
		'business_id': 0,
		'business_name': 'Hotel California',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'Sam Smith',
		'contributor_email': 'sam@mail.com',
		'data_object': {'business_name':'Hotel California', 'categories':	'Accommodations - Hotels', 'overall_rating': 'not yet rated', 'address': '123 Main st.', 'phone_number': '987-134-9339', 'website': 'www.hotelcalifornia.com'},
		'status': 'pending',
		'resolved_date': 'n/a',
		'admin_id': '3',
		'notes': '*** [Fri Feb 07 2020 5:28:42 PM]:[AdminId:3]:[this is a note]'
	},

	{ 'entry_type': 'new review',
		'business_id': 1,
		'business_name': 'Hotel Zilla',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'Kaylee K',
		'contributor_email': 'k@kaylee.com',
		'data_object': {'content': 'here is my review', 'contributor': 'Kaylee K', 'contributor_email': 'k@kaylee.com', 'rating': '4', 'business_id': 1},
		'status': 'pending',
		'resolved_date': 'n/a',
		'admin_id': '3',
		'notes': '*** [Fri Feb 07 2020 5:28:42 PM]:[adminId:3]:[another note]'
	},

	{ 'entry_type': 'new image',
		'business_id': 4,
		'business_name': 'Liquid Hotel',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'Joe Fresh',
		'contributor_email': 'j@gmail.com',
		'data_object': {'description': 'Here is something important', 'date': 'Liquid Hotel', 'url': 'https://images.trvl-media.com/hotels/1000000/530000/522800/522778/647c253c_z.jpg', 'contributor': '12/23/19', 'contributor_email': 'joe', 'business_id': 4},
		'status': 'rejected',
		'resolved_date': 'Fri Feb 07 2020 5:28:42 PM',
		'admin_id': 3,
		'notes': '*** [Fri Feb 07 2020 5:28:42 PM]:[AdminId:3]:[Duplicate Image]'
	},

	{ 'entry_type': 'flag business',
		'business_id': 19,
		'business_name': 'Candy Store Bounce',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'Harleigh',
		'contributor_email': 'harleigh@gmail.com',
		'data_object': {'business_id': 6, 'content': 'This business is closed'},
		'status': 'rejected',
		'resolved_date': 'Sat Jan 18 2020 20:38:13 GMT-0500',
		'admin_id': 3,
		'notes': '*** [Fri Feb 07 2020 5:28:42 PM]:[AdminId:3]:[Business confirmed still open]'
	},

	{ 'entry_type': 'new image',
		'business_id': 4,
		'business_name': 'Liquid Hotel',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'Jane Shepard',
		'contributor_email': 'janiesshep@yahoo.com',
		'data_object': {"description": "Here is something important", "date": "Liquid Hotel", "url": "https://images.trvl-media.com/hotels/1000000/530000/522800/522778/647c253c_z.jpg", "contributor": "12/23/19", "contributor_email": "Jane Shepard", "business_id": 4},
		'status': 'approved',
		'resolved_date': 'Fri Feb 07 2020 5:28:42 PM',
		'admin_id': 1,
		'notes': ''
	},

	{ 'entry_type': 'new bus',
		'business_id': 9,
		'business_name': 'FourStar Hardware',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'George S',
		'contributor_email': 'gs@gmail.com',
		'data_object': {'business_name': 'FourStar Hardware', 'categories': 'Retail - Hardware Stores', 'overall_rating': 'not yet rated', 'address': 'Calle 22 de Enero No. 261, Cozumel', 'phone_number': '123-456-7890', 'website': 'www.hardware.mx'},
		'status': 'approved',
		'resolved_date': 'Fri Feb 07 2020 5:28:42 PM',
		'admin_id': 2,
		'notes': ''
	},

	{ 'entry_type': 'new bus',
		'business_id': 0,
		'business_name': 'Mexican Tire Company',
		'date': 'Fri Feb 07 2020 5:28:42 PM',
		'contributor': 'Juan Carlos',
		'contributor_email': 'sanjuan@aol.co.mx',
		'data_object': {"business_name": "Mexican Tire Company", "categories": ["Gas Stations", 'Automotive - Auto Parts & Accessories'], "overall_rating": "not yet rated", "address": "123 Main st.", "phone_number": "999-114-9934", "website": "www.tireco.mx"},
		'status': 'pending',
		'resolved_date': 'n/a',
		'admin_id': 1,
		'notes': ''
	}
]

Entry.create(entry_seeds)
