# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

#The CATEGORIES LIST portion of the seed file should always be loaded for testing AND production!
#comment out EVERYTHING below Categoires when not in TESTING mode

categories_list = [
	['Acupuncture', 'Acupuntura'],
	['Airlines', 'Aerolíneas'],
	['Animal Hospitals', 'Hospitales de Animales'],
	['Artists', 'Artistas'],
	['Automotive - Auto Dealers – New', 'Concesionarios de Automóviles - Nuevo'],
	['Automotive - Auto Dealers – Used', 'Concesionarios de Automóviles - Usado'],
	['Automotive - Auto Parts & Accessories', 'Automotriz - Repuestos y Accesorios'],
	['Automotive - Detail & Carwash', 'Automotriz - Detalle y Lavado'],
	['Automotive - Service & Repair', 'Automotriz Servicio y Reparación'],
	['Automotive - Parts & Towing', 'Automotriz Remolque de Piezas'],
	['Banking & Financial Institutions', 'Instituciones Bancarias y Financieras'],
	['Barber & Beauty Salons', 'Peluquería y Salones de Belleza'],
	['Bike Rental', 'Bicicletas - Alquiler'],
	['Bike Repair', 'Reparación de Bicicletas'],
	['Cable Service Providers', 'Proveedores de Servicios de Cable'],
	['Car Rentals', 'Alquiler de Coches'],
	['Cargo and Transport Services', 'Servicios de Carga y Transporte'],
	['Catering & Supplies', 'Catering y Suministros'],
	['Charter Boats', 'Barcos de Alquiler'],
	['Charter Bus Services', 'Servicios de Autobuses Chárter'],
	['Chiropractic', 'Quiropráctica'],
	['Computer Programming & Tech Support', 'Programación Informática y Soporte Técnico'],
	['Consultants', 'Consultores'],
	['Contractors - Architects', 'Contratistas - Arquitectos'],
	['Contractors - Blasting & Demolition', 'Contratistas - Voladura y Demolición'],
	['Contractors - Materials and Building Supplies', 'Contratistas - Materiales y Suministros para la Construcción'],
	['Contractors - Construction Companies', 'Contratistas - Empresas de Construcción'],
	['Contractors - Electricians', 'Contratistas - Electricistas'],
	['Contractors - Engineers & Surveyors', 'Contratistas - Ingenieros y Agrimensores'],
	['Contractors - Landscape Architects', 'Contratistas - Arquitectos Paisajistas'],
	['Contractors - Plaster & Concrete', 'Contratistas - Yeso y Concreto'],
	['Contractors - Plumbers', 'Contratistas - Fontaneros'],
	['Contractors - Other', 'Contratistas - Otra'],
	['Contractors - Roofers', 'Contratistas - Techadores'],
	['Cruise Lines', 'Lineas de Crucero'],
	['Dental', 'Dental'],
	['Diet & Nutrition', 'Dieta y Nutrición'],
	['Distribution', 'Distribución'],
	['Dive Companies', 'Empresas de Buceo'],
	['Drug & Vitamin Stores', 'Tiendas de Drogas y Vitaminas'],
	['Dry Cleaners & Laundromats', 'Tintorerías y Lavanderías'],
	['Educational - Adult & Continuing Education', 'Educativo - Educación para Adultos y Educación Continua'],
	['Educational - Early Childhood Education', 'Educativo - Educación de la Primera Infancia'],
	['Educational - Educational Resources', 'Educativo - Recursos Ducativos'],
	['Educational - Other Educational', 'Educativo - Otro Educativo'],
	['Employment Agencies', 'Agencias de Empleo'],
	['Equipment Rentals', 'Alquiler de Equipos'],
	['Exercise & Fitness', 'Ejercicio y Estado Físico'],
	['Ferries', 'Ferries'],
	['Financial Services - Accountants', 'Servicios Financieros - Contadore'],
	['Funeral Service Providers & Cemeteries', 'Proveedores de Servicios Funerarios y Cementerios'],
	['Gas Stations', 'Gasolineras'],
	['Government Agencies', 'Agencias Gubernamentales'],
	['Grocery - Bakery', 'Abarrotes - Panadería'],
	['Grocery - Cheese & Dairy', 'Abarrotes - Queso y Lácteos'],
	['Grocery - Fruit & Veggies', 'Abarrotes - Frutas y Verduras'],
	['Grocery - General', 'Abarrotes - General'],
	['Grocery - Health Food', 'Abarrotes - Alimentos Saludables'],
	['Grocery - Meat', 'Abarrotes - Carne'],
	['Grocery - Misc', 'Abarrotes - Varios'],
	['Grocery - Seafood', 'Abarrotes - Mariscos'],
	['Grocery - Specialty', 'Abarrotes - Especialidad'],
	['Home Improvements & Repairs', 'Mejoras y Reparaciones del Hogar'],
	['Hospitals', 'Hospitales'],
	['Import/Export', 'Importación / Exportación'],
	['Insurance', 'Seguro'],
	['Internet Service Providers', 'Proveedores de Servicios de Internet'],
	['Landscape & Lawn Service', 'Servicio de Paisajismo y Césped'],
	['Legal Services - Attorneys', 'Servicios Legales - Abogados'],
	['Legal Services - Other Legal', 'Servicios Legales - Otros Servicios Legales'],
	['Lodging - Boutique Hotels', 'Hospedaje - Hoteles Boutique'],
	['Lodging - Condominiums', 'Hospedaje - Condominios'],
	['Lodging - Dive Hotels',  'Hospedaje - Hoteles de Buceo'],
	['Lodging - Eco Hotels', 'Hospedaje - Eco Hoteles'],
	['Lodging  - Extended Stay', 'Hospedaje - Estancia Prolongada'],
	['Lodging - Hostels', 'Hospedaje - Albergues'],
	['Lodging - Resorts', 'Hospedaje - Resorts'],
	['Lodging - Hotels', 'Hospedaje - Hoteles'],
	['Lodging - Motels', 'Hospedaje - Moteles'],
	['Lodging - Other', 'Hospedaje - Otra'],
	['Lodging - Time Shares', 'Hospedaje - Tiempo Compartido'],
	['Manufacturing','Fabricación'],
	['Marketing', 'Márketing'],
	['Massage & Body Works', 'Masajes y Trabajos Corporales'],
	['Massage Therapy', 'Terapia de Masaje'],
	['Medical Clinics', 'Clínicas Médicas'],
	['Mental Health', 'Salud Mental'],
	['Motorcycle Rental & Leasing', 'Motocicletas - Alquiler y Arrendamiento'],
	['Motorcycle Sales & Repair', 'Motocicletas - Venta y Reparación'],
	['Moving Services', 'Servicios de Mudanza'],
	['Nail Salons', 'Salones de Uñas'],
	['Nonprofit', 'Sin Ánimo de Lucro'],
	['Nurse', 'Enfermera'],
	['Optical', 'Optico'],
	['Other', 'Otra'],
	['Pediatrician', 'Pediatra'],
	['Personal Care & Services', 'Cuidado y Servicios Personales'],
	['Pest Control', 'Control de Plagas'],
	['Pharmacy', 'Farmacia'],
	['Physical Therapy', 'Fisioterapia'],
	['Physicians & Assistants', 'Médicos y Asistentes'],
	['Podiatry', 'Podología'],
	['Pool Supplies & Service', 'Suministros y Servicios para Piscinas'],
	['Printing & Publishing', 'Impresión y Publicación'],
	['Radio Broadcasting', 'Radiodifusión'],
	['Radiology, Imaging & Diagnostic', 'Radiología, Imagen y Diagnóstico'],
	['Real Estate - Agencies & Brokerages', 'Bienes Raíces - Agencias y Corretaje'],
	['Real Estate - Agents & Brokers', 'Bienes Raíces - Agentes y Corredores'],
	['Real Estate - Apartment & Home Rental', 'Bienes Raíces - Alquiler de Apartamentos y Casas'],
	['Real Estate - Mortgage Broker & Lender', 'Bienes Inmuebles - Agente Hipotecario y Prestamista'],
	['Real Estate - Other', 'Bienes Inmuebles - Otra'],
	['Real Estate - Property Management', 'Bienes Raíces - Administración de Propiedades'],
	['Real Estate - Title Company', 'Bienes Inmuebles - Compañía de Títulos'],
	['Recreation -  Golf Courses', 'Recreación - Campos de Golf'],
	['Recreation - Bars', 'Recreación - Bares'],
	['Recreation - Beach Clubs', 'Recreación - Clubes de Playa'],
	['Recreation - Cinemas', 'Recreación - Cines'],
	['Recreation - Event Planners & Supplies', 'Recreación - Organizadores y Suministros para Eventos'],
	['Recreation - Night Clubs', 'Recreación - Discotecas'],
	['Recreation - Other', 'Recreación - Otros'],
	['Recreation - Venues', 'Recreación - Lugares'],
	['Restaurants - American', 'Restaurantes - Americano'],
	['Restaurants - Chinese', 'Restaurantes - Chinos'],
	['Restaurants - Desserts', 'Restaurantes - Postres'],
	['Restaurants - Fast Food', 'Restaurantes - Comida Rápida'],
	['Restaurants - Fine Dining', 'Restaurantes - Restaurantes Elegantes'],
	['Restaurants - Healthy', 'Restaurantes - Saludables'],
	['Restaurants - Italian', 'Restaurantes - Italiano'],
	['Restaurants - Mexican', 'Restaurantes - Mexicanos'],
	['Restaurants - Other', 'Restaurantes - Otros'],
	['Restaurants - Pizza', 'Restaurantes - Pizza'],
	['Restaurants - Seafood', 'Restaurantes - Mariscos'],
	['Restaurants - Sushi', 'Restaurantes - Sushi'],
	['Retail - Antiques & Collectibles', 'Venta al por Menor - Antigüedades y Coleccionables'],
	['Retail - Arts & Crafts', 'Venta al por Menor -  Artes y Oficios'],
	['Retail - Baby', 'Venta al por Menor - Bebé'],
	['Retail - Bakery', 'Venta al por Menor - Panadería'],
	['Retail - Beauty & Fragrances', 'Venta al por Menor - Belleza y Fragancias'],
	['Retail - Beverage & Tobacco', 'Venta al por Menor - Bebidas y Tabaco'],
	['Retail - Books & Magazines', 'Venta al por Menor - Libros y Revistas'],
	['Retail - Candy Store', 'Venta al por Menor - Tienda de Golosinas'],
	['Retail - Cards & Gifts', 'Venta al por Menor - Tarjetas y Regalos'],
	['Retail - Children\'s Clothing', 'Venta al por Menor - Ropa Infantil'],
	['Retail - Computers & Electronics', 'Venta al por Menor - Computadoras y Electrónica'],
	['Retail - Convenience Store', 'Venta al por Menor - Tienda de Conveniencia'],
	['Retail - Crafts, Hobbies & Sports', 'Venta al por Menor - Manualidades, Pasatiempos y Deportes'],
	['Retail - Department Stores', 'Venta al por Menor - Grandes Almacenes'],
	['Retail - Flower Shops', 'Venta al por Menor - Florerías'],
	['Retail - General', 'Venta al por Menor - General'],
	['Retail - Gifts', 'Venta al por Menor - Regalos'],
	['Retail - Hardware Stores', 'Venta al por Menor - Ferreterías'],
	['Retail - Home & Garden', 'Venta al por Menor - Hogar y Jardín'],
	['Retail - Home Furnishings', 'Venta al por Menor - Muebles para el Hogar'],
	['Retail - Jewelry', 'Venta al por Menor - Joyería'],
	['Retail - Men\'s Clothing', 'Venta al por Menor - Ropa de Hombre'],
	['Retail - Office Supplies', 'Venta al por Menor - Suministros de Oficina'],
	['Retail - Other', 'Venta al por Menor - Otro'],
	['Retail - Pet and Animal Supplies', 'Venta al por Menor - Artículos para Mascotas y Animales'],
	['Retail - Religion & Spirituality', 'Venta al por Menor - Religión y Espiritualidad'],
	['Retail - Shoes', 'Venta al por Menor - Calzado'],
	['Retail - Specialty', 'Venta al por Menor - Especialidad'],
	['Retail - Sports & Outdoors', 'Venta al por Menor - Deportes y Aire Libre'],
	['Retail - Toys & Hobbies', 'Venta al por Menor - Juguetes y Pasatiempos'],
	['Retail - Women\'s Clothing', 'Venta al por Menor - Ropa de Mujer'],
	['Scooter Rental', 'Alquiler de Scooter'],
	['Security System & Services', 'Sistema y Servicios de Seguridad'],
	['Services - Other', 'Servicios - Otros'],
	['Shipping - Packing & Shipping', 'Envío - Embalaje y Envío'],
	['Shoe Repairs', 'Reparaciones de Calzado'],
	['Shuttles', 'Lanzaderas'],
	['Sustainable Businesses', 'Empresas Sostenibles'],
	['Tailors', 'Sastres'],
	['Taxi', 'Taxi'],
	['Telephone Service Providers', 'Proveedores de Servicios Telefónicos'],
	['Television Broadcasting', 'Televisión Abierta'],
	['Tour Operators', 'Operadores Turísticos'],
	['Translation Services', 'Servicios de Traducción'],
	['Travel Agents', 'Agentes de Viajes'],
	['Utility Companies', 'Empresas de Servicios'],
	['Veterinary & Animal Surgeons', 'Veterinarios y Cirujanos Animales'],
	['Wholesale', 'Mayoristas']
]

categories_list.each do |cat|
	Category.create( name: cat[0], nombre: cat[1] )
end

# ***********COMMENT OUT EVERYTHING BELOW THIS LINE WHEN NOT IN TESTING********

businesses_list_1 = [
	[ 'Hotel Zilla', 'Lodging - Resorts' ],
	[ 'Kernel Hotel', 'Lodging - Boutique Hotels' ],
	[ 'Verge Hotel', 'Lodging - Boutique Hotels'],
	[ 'Liquid Hotel', 'Lodging - Dive Hotels' ],
	[ 'Citywide Hotel', 'Lodging  - Extended Stay' ],
	[ 'Sandman Hotel', 'Lodging - Hotels']
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

	[ 'Candy Store Bounce', 'Retail - Candy Store' ],
	[ 'Pre Candy Store', 'Retail - Candy Store' ],
	[ 'Corpus Candy Store', 'Retail - Candy Store' ],
	[ 'Net Candy Store', 'Retail - Candy Store' ],
	[ 'ZeroPoint Candy Store', 'Retail - Candy Store' ],
	[ 'Sweetharts Candy Store', 'Retail - Candy Store' ],

	[ 'Car Rentals Savers', 'Car Rentals' ],
	[ 'OneWorld Car Rentals',	'Car Rentals' ],
	[ 'Simulation Car Rentals', 'Car Rentals' ],
	[ 'Augmented Car Rentals', 	'Car Rentals' ],
	[ 'Turbine Car Rentals', 'Car Rentals' ],
	[ 'Budget Car Rentals', 'Car Rentals' ]
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
