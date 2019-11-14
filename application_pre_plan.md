Directory Cozumel  Phone Book App with listing reviews, images and map

User Story
Search by Name
Search By Category

Sort By Name
Sort By Rating

Add Businesses and Numbers

Suggest Update
Flag Listing for review/update/verification

Admin Delete Business only with matching password

Business listing shows:
name
address
phone number
website
image
reviews
categories
flag listing

links to trip advisor?
links to google reviews?

Google map?

Mobile first

domain names
www.directorycozumel.com
www.directorycozumel.org
www.directorycozumel.net
www.directorycozumel.info


Nitty Gritty Database Map

A category has many businesses

A business has many categories
A business has a listing
A business has reviews
A business has images
A business has a map
A business has one or many admin_entries

admin:
	has many admin entries
	name
	password

admin_entry
	belongs to a business
	belongs to an image
	belongs to a review

	type flag/edit/new/review/image
	data_object
	date
	email
	status
	notes


Page format: Modular Tiles that stretch and shrink to fit page

-Search Bar Tile
-Title tile
-Ad TIle
-Form tile
-Menu tile
-Listing tile
-Sponsored listing tile
-Reviews tile
-Photos tile

View FORMATS

Welcome View:

Menu Tile:
Add Business
Search Business

Search Bar Tile:
Search By Name
Search By Category

Title Tile:
Landing page title
Advertisement Tile:
blank

Listing View:

Menu Tile:
add review/add image
flag business
suggest edit
return to search

Search Bar Tile:
disappears;

Listing Tile:
Business name:
Rating:
Address:
Phone Number:
Website:
Categories:
Google map;
Images: three most recent;
Reviews

Title tile: sponsored listings
for selected category.

AdTile: ads

FORM VIEW:
Ad tile: visible
Sponsored tile: hidden;
Title tile: hidden
Search Bar tile:


ADD BUSINESS Form View:
Business name:
Address:
Phone Number:
Website:
Categories: (multi-select drop down menu)


FLAG BUSINESS Form View:
Reason for flagging business;
email address;
name;

SUGGEST EDIT Form View:
Reason for flagging business;
email address;
name;


ADD REVIEW/ADD IMAGE Form View:
Review
Name
Email address
Image

ADMIN VIEW
password to open:
Show table of suggested updates and flags;
New business to verify;
New reviews;

ALL SUBMISSIONS start as form objects then become admin_entries for approval;
Once approved they become Business Listings objects, Review Objects, or Image Objects, or

DATABASE BREAKDOWN
Admin
	has_many admin_entries

	Admin :username
	Admin :password

	can I encrypt password without sessions?

Admin_Entry
	belongs_to a photo, listing, or review
	belongs_to a category
	has_many businesses through reviews, listings and photos

	AdminEntry:  type
	AdminEntry:  date
	AdminEntry:  contributor - nil? true
	AdminEntry:  contributor_email
	AdminEntry:  data_object
	AdminEntry:  notes - nil? true
	AdminEntry:  status
	AdminEntry:  resolved_date - nil? true


Business
	belongs_to one_or_many Categories
	has a Listing
	has many Reviews
	has many Images
	has a Map
	has many_Admin Entries through photos, listings, and reviews

	Business :name,

Category
	has_many businesses
	Category: name

Images
	belong_to a business

	Image: description nil? true
	Image: date nil? true
	Image: url
	Image: contributor

Listing
	belongs_to a business

	Listing :rating nil? true
	Listing :address
	Listing: phone number
	Listing: website nil? true

Map
	belongs_to a business
		Map :google_maps_coords nil? true

Reviews
	belong_to a business

	Review :content
	Review :rating


Database BackEnd

Form takes user info creates admin entry;
Admin_entries are reviewed and creates objects and stores them to database when approved.

/admin View
-login and password, hardcoded? bcrypt?
-when login approved table of admin_entries is generated
-admin_entries table check_box options:
-approve entry - check box on click generates new object, saves to database, adds resolved_date
-declined entry - asks for confirmation - does not create object but entries stays on table with new resolved date
-edit entry - checkbox updates object, saves changes to database, adds resolved date;

-live update of admin table with status and timestamps
-can sort-by: date, business name, username, category, approved/not approved, type
