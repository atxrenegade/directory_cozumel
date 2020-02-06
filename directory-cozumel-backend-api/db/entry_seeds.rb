entry_seeds = [
	{ 'entry_type': 'new bus',
		'business_id': 0,
		'bus_name': 'Hotel California',
		'date': '2020-01-13 20:14:32',
		'contributor': 'Sam Smith',
		'contributor_email': 'sam@mail.com',
		'data_object': {'bus_name':'Hotel California', 'categories':	'Accommodations - Hotels', 'overall_rating': 'not yet rated', 'address': '123 Main st.', 'phone_number': '987-134-9339', 'website': 'www.hotelcalifornia.com'},
		'status': 'pending',
		'resolved_date': 'n/a',
		'admin_id': '3',
		'notes': '*** [Fri Jan 24 2020 22:29:42 GMT-0500 (Eastern Standard Time)]:[AdminId:3]:[this is a note]'
	},

	{ 'entry_type': 'new review',
		'business_id': 1,
		'bus_name': 'Hotel Zilla',
		'date': '2020-01-12 21:53:08',
		'contributor': 'Kaylee K',
		'contributor_email': 'k@kaylee.com',
		'data_object': {'content': 'here is my review', 'contributor': 'Kaylee K', 'contributor_email': 'k@kaylee.com', 'rating': '4', 'business_id': 1},
		'status': 'pending',
		'resolved_date': 'n/a',
		'admin_id': '3',
		'notes': '*** [Mon Jan 13 2020 23:21:44 GMT-0500 (Eastern Standard Time)]:[adminId:3]:[another note]'
	},

	{ 'entry_type': 'new image',
		'business_id': 4,
		'bus_name': 'Liquid Hotel',
		'date': '2020-01-12 20:13:10',
		'contributor': 'Joe Fresh',
		'contributor_email': 'j@gmail.com',
		'data_object': {'description': 'Here is something important', 'date': 'Liquid Hotel', 'url': 'https://images.trvl-media.com/hotels/1000000/530000/522800/522778/647c253c_z.jpg', 'contributor': '12/23/19', 'contributor_email': 'joe', 'business_id': 4},
		'status': 'rejected',
		'resolved_date': 'Mon Jan 13 2020 19:09:02 GMT-0500 (Eastern Standard Time)',
		'admin_id': 3,
		'notes': '*** [Mon Jan 13 2020 23:24:46 GMT-0500 (Eastern Standard Time)]:[AdminId:3]:[Duplicate Image]'
	},

	{ 'entry_type': 'flag business',
		'business_id': 19,
		'bus_name': 'Candy Store Bounce',
		'date': '2020-01-12 20:16:46',
		'contributor': 'Harleigh',
		'contributor_email': 'harleigh@gmail.com',
		'data_object': {'business_id': 6, 'content': 'This business is closed'},
		'status': 'rejected',
		'resolved_date': 'Sat Jan 18 2020 20:38:13 GMT-0500',
		'admin_id': 3,
		'notes': '*** [Sun Jan 12 2020 13:28:16 GMT-0500 (Eastern Standard Time)]:[AdminId:3]:[Business confirmed still open]'
	},

	{ 'entry_type': 'new image',
		'business_id': 4,
		'bus_name': 'Liquid Hotel',
		'date': '2020-01-09 06:34:19',
		'contributor': 'Jane Shepard',
		'contributor_email': 'janiesshep@yahoo.com',
		'data_object': {"description": "Here is something important", "date": "Liquid Hotel", "url": "https://images.trvl-media.com/hotels/1000000/530000/522800/522778/647c253c_z.jpg", "contributor": "12/23/19", "contributor_email": "Jane Shepard", "business_id": 4},
		'status': 'approved',
		'resolved_date': 'Mon Jan 13 2020 23:24:31 GMT-0500 (Eastern Standard Time)',
		'admin_id': 1,
		'notes': ''
	},

	{ 'entry_type': 'new bus',
		'business_id': 9,
		'bus_name': 'FourStar Hardware',
		'date': '2020-01-17 21:48:27',
		'contributor': 'George S',
		'contributor_email': 'gs@gmail.com',
		'data_object': {'bus_name': 'FourStar Hardware', 'categories': 'Retail - Hardware Stores', 'overall_rating': 'not yet rated', 'address': 'Calle 22 de Enero No. 261, Cozumel', 'phone_number': '123-456-7890', 'website': 'www.hardware.mx'},
		'status': 'approved',
		'resolved_date': 'Sat Jan 18 2020 20:38:59 GMT-0500 (Eastern Standard Time)',
		'admin_id': 2,
		'notes': ''
	},

	{ 'entry_type': 'new bus',
		'business_id': 0,
		'bus_name': 'Mexican Tire Company',
		'date': '2020-01-13 17:25:48',
		'contributor': 'Juan Carlos',
		'contributor_email': 'sanjuan@aol.co.mx',
		'data_object': {"bus_name": "Mexican Tire Company", "categories": ["Gas Stations", 'Automotive - Auto Parts & Accessories'], "overall_rating": "not yet rated", "address": "123 Main st.", "phone_number": "999-114-9934", "website": "www.tireco.mx"},
		'status': 'pending',
		'resolved_date': 'n/a',
		'admin_id': 1,
		'notes': ''
	}
]

Entry.create(entry_seeds)
