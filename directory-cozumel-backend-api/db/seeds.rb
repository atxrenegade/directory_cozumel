# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

#The CATEGORIES LIST portion of the seed file should always be loaded for testing AND production!
#comment out EVERYTHING below Categoires when not in TESTING mode

categories_list = [
	'Accommodations - Boutique Hotels',
	'Accommodations - Dive Hotels',
	'Accommodations - Eco Hotels',
	'Accommodations - Extended Stay',
	'Accommodations - Hostels',
	'Accommodations - Hotels',
	'Accommodations - Motels',
	'Accommodations - Resorts',
	'Accommodations - Time Shares & Condominiums',
	'Animal Hospitals',
	'Artists',
	'Automotive - Auto Dealers – New',
	'Automotive - Auto Dealers – Used',
	'Automotive - Auto Parts & Accessories',
	'Automotive - Detail & Carwash',
	'Automotive - Motorcycle Sales & Repair Rental & Leasing',
	'Automotive - Service, Repair & Parts Towing',
	'Banking & Financial Institutions',
	'Barber & Beauty Salons',
	'Bike Repair',
	'Catering & Supplies',
	'Computer Programming & Support Consumer',
	'Construction & Contractors - Architects',
	'Construction & Contractors - Blasting & Demolition',
	'Construction & Contractors - Building Materials & Supplies',
	'Construction & Contractors - Construction Companies',
	'Construction & Contractors - Electricians',
	'Construction & Contractors - Engineers & Surveyors',
	'Construction & Contractors - Landscape Architects',
	'Construction & Contractors - Plaster & Concrete',
	'Construction & Contractors - Plumbers',
	'Construction & Contractors - Roofers',
	'Consultants',
	'Distribution, Import/Export Manufacturing',
	'Dry Cleaners & Laundromats',
	'Educational - Adult & Continuing Education',
	'Educational - Early Childhood Education',
	'Educational - Educational Resources',
	'Educational - Other Educational',
	'Employment Agencies',
	'Equipment Rentals',
	'Exercise & Fitness',
	'Financial Services - Accountants',
	'Funeral Service Providers & Cemeteries',
	'Gas Stations',
	'Government Agencies',
	'Grocery - Cheese & Dairy',
	'Grocery - Bakery',
	'Grocery - Fruit',
	'Grocery - General',
	'Grocery - Health Food',
	'Grocery - Meat',
	'Grocery - Misc',
	'Grocery - Seafood',
	'Grocery - Specialty',
	'Grocery - Vegetable',
	'Health & Medicine - Acupuncture',
	'Health & Medicine - Chiropractic',
	'Health & Medicine - Dental',
	'Health & Medicine - Diet & Nutrition',
	'Health & Medicine - Drug & Vitamin Stores',
	'Health & Medicine - Hospitals',
	'Health & Medicine - Imaging & Diagnostic',
	'Health & Medicine - Massage Therapy',
	'Health & Medicine - Medical Clinics',
	'Health & Medicine - Mental Health',
	'Health & Medicine - Nurse',
	'Health & Medicine - Optical',
	'Health & Medicine - Other',
	'Health & Medicine - Pediatrician',
	'Health & Medicine - Pharmacy',
	'Health & Medicine - Physical Therapy',
	'Health & Medicine - Physicians & Assistants',
	'Health & Medicine - Podiatry',
	'Health & Medicine - Social Worker',
	'Home Improvements & Repairs',
	'Insurance',
	'Landscape & Lawn Service',
	'Legal Services - Attorneys',
	'Legal Services - Other Legal',
	'Manufacturing, Wholesale, Distribution',
	'Marketing',
	'Massage & Body Works',
	'Media & Communications - Cable Service Providers',
	'Media & Communications - Internet Service Providers',
	'Media & Communications - Radio Broadcasting',
	'Media & Communications - Telephone Service Providers',
	'Media & Communications - Television Broadcasting',
	'Miscellaneous',
	'Nail Salons',
	'Nonprofit',
	'Personal Care & Services',
	'Pest Control',
	'Pool Supplies & Service',
	'Printing & Publishing',
	'Real Estate',
	'Real Estate - Agencies & Brokerage',
	'Real Estate - Agents & Brokers',
	'Real Estate - Apartment & Home Rental',
	'Real Estate - Mortgage Broker & Lender',
	'Real Estate - Property Management',
	'Real Estate - Title Company',
	'Recreation',
	'Recreation -  Golf Courses',
	'Recreation - Bars',
	'Recreation - Beach Clubs',
	'Recreation - Cinemas',
	'Recreation - Event Planners & Supplies',
	'Recreation - Night Clubs',
	'Recreation - Other',
	'Recreation - Venues',
	'Restaurants',
	'Restaurants - American',
	'Restaurants - Chinese',
	'Restaurants - Desserts',
	'Restaurants - Fast Food',
	'Restaurants - Fine Dining',
	'Restaurants - Healthy',
	'Restaurants - Italian',
	'Restaurants - Mexican',
	'Restaurants - Other',
	'Restaurants - Pizza',
	'Restaurants - Seafood',
	'Restaurants - Sushi',
	'Retail',
	'Retail - Antiques & Collectibles',
	'Retail - Arts & Crafts',
	'Retail - Baby',
	'Retail - Bakery',
	'Retail - Beauty & Fragrances',
	'Retail - Beverage & Tobacco',
	'Retail - Books & Magazines',
	'Retail - Candy',
	'Retail - Cards & Gifts',
	'Retail - Children\'s Clothing',
	'Retail - Computers & Electronics',
	'Retail - Convenience Store',
	'Retail - Crafts, Hobbies & Sports',
	'Retail - Department Stores',
	'Retail - Flower Shops',
	'Retail - General',
	'Retail - Gifts',
	'Retail - Hardware Stores',
	'Retail - Home & Garden',
	'Retail - Home Furnishings',
	'Retail - Jewelry',
	'Retail - Men\'s Clothing',
	'Retail - Office Supplies',
	'Retail - Other (not elsewhere classified)',
	'Retail - Pet and Animal Supplies',
	'Retail - Religion & Spirituality (for profit)',
	'Retail - Shoes',
	'Retail - Specialty',
	'Retail - Sports & Outdoors',
	'Retail - Toys & Hobbies',
	'Retail - Women\'s Clothing',
	'Security System & Services',
	'Services - Other',
	'Shipping - Packing & Shipping',
	'Shoe Repairs',
	'Sustainable Businesses',
	'Tailors',
	'Transportation - Airlines',
	'Transportation - Car Rentals',
	'Transportation - Cargo',
	'Transportation - Charter Bus Services',
	'Transportation - Ferries',
	'Transportation - Motorcycle Rental',
	'Transportation - Moving Services',
	'Transportation - Scooter Rental',
	'Transportation - Shuttles',
	'Transportation - Taxi',
	'Translation Services',
	'Travel & Tourism - Charter Boats',
	'Travel & Tourism - Cruise Lines',
	'Travel & Tourism - Dive Companies',
	'Travel & Tourism - Tour Operators',
	'Travel & Tourism - Travel Agents',
	'Utility Companies',
	'Veterinary & Animal Surgeons',
	'Wholesale'
]

categories_list.each do |name|
	Category.create( name: name )
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
