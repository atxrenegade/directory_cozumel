# Directory Cozumel Application

SCREENSHOT HERE

Directory Cozumel is mobile friendly web directory created to help users locate business and services in the area quickly and easily. Users can choose to search Directory Cozumel for their favorite businesses by searching the directory by business NAME or business CATEGORY. Once the user submits their search request the application will return a list of businesses matching the users request.  The user can then select which business it would like to review detailed information about by clicking on the button displaying the business name which will return a complete business listing displaying name, rating, address, phone number, website, location map, and any related images or reviews left by other users.

Users can also add their own reviews, and images or flag or suggest edits for existing business listings.  Below the search menu users can add new business to the directory by pressing the add new business button.

All user supplied data is sent to an admin entry database for review and verification before being add to the directory.

The application includes a build in admin page....that.....




## How to Use this Application

## Users

###### **Search Functions**
Search By Name - Select 'Search By Name' with search menu radio button and enter business name to search, click on 'Search' button to execute search

Search By Category - Select 'Search By Category' with search menu radio button and select category from drop down list, click on 'Search' button to execute search

###### **Adding New Business Listings**
To add a new business to the directory click on the 'Add New Business' button in the 'Add New Business' menu. Complete the 'Add Business' form by filling out the  'Name', 'Address', 'Phone Number' and 'Website' fields, and selecting the appropriate 'Category' from the drop down menu provided. If an appropriate category is not provided please use the 'Other' category.

###### Adding Reviews / Adding Images / Suggesting Updates / Flagging Listings
Once a business listing has been selected through the 'Search Listings' menu users can add reviews, images, suggest updates, and flag listings by filling out the appropriate forms. Email addresses are requested for listing verification purposes only and will remain anonymous, and will not be published or shared whatsoever.

When users have filled out the appropriate form, they can press the submit button to submit their contribution.

Once a user contribution has been made an entry is created in the admin database for review, where the quality and content of the data is reviewed and verified by admin before it approved and the new material is added to the database.

Upon successful submission of user content the following message will be displayed: 'Successfully submitted for Review!'

NOTE ABOUT IMAGES: In order to keep this app free to use we do not store images
in our database. When saving image you will be asked for a URL, we encourage
you to use one of the many popular photo sharing sites such as - [USE](https://www.use.com/) - [IMGUR](https://imgur.com/) - [PHOTOBUCKET](https://photobucket.com/) - [FLICKR](https://www.flickr.com/) to store your images and copy the URL to share
them here.

## Admins

###### **Discrete Admin Button**
In the button right corner of the application below the 'Add New Business' panel is a discrete ADMIN button.  Clicking on the text partially transparent text word 'ADMIN' will reveal the word is in fact a button that will reveal the 'Admin Login' panel.

###### **Admin Types**
There are two types of Admin Roles available one for basic admin referred to simply as 'admin' and elevated admin access referred to as 'Super' or Super Admin.  Basic admin access allows administrators to view all pending and resolved entries for new business listings, reviews, or images with authorization to approve or decline pending entries to add or decline user input from persistence to the database, and to add admin notes to these entries.  There is a search function that allows . Any authorization granted to basic admin are also available to administrators in the super admin role.

Super admins have the added privileges of being able to create, update, or delete, regular and super admin users, and a panel to create, update or delete database records of all types:  ADMINS, ENTRIES, BUSINESSES, CATEGORIES, IMAGES, LISTINGS, MAPS, AND REVIEWS.

###### **Login**
Admins can enter the username and password provided to them by their Administrator, and click on the login button to login in the Admin Panel.

###### **Admin Info Panel**
The Admin panel info will display the admin id, login time, and role of the current admin user.

###### **Entry Index**

###### **Entry Search**

###### **Entry Details**

###### **Approve Entry**

###### **Decline Entry**

###### **Add Notes**
To add notes click the 'Add Notes' button from the detailed entry view and fill in the Notes input field and click 'Submit' will add add a not record to the entry that includes the admin id, and date and time note was created, and add it to the entry database record.

###### **Nav Buttons**
Nav Buttons include 'index resolved', index pending' buttons that return admin users to the main admin entries index.

###### **Logout**
Clicking the logout button will, log the admin out the admin panel and display the business directory.


## Super Admin
The super admin menu includes a panel for admin user creation, updating or deleting and a second panel for access to edit, update, or delete any/all database records.

###### **Admin Create and Role Delegation**
Super admin can create, update or delete other admins and their roles through the 'Admin Authorization Panel'.

To Create Admin

To Update Admin

To Delete Admin

###### **Database Record Creation**
To create

###### **Database Record Update**
Using the Super Admin database panel an admin user can

###### **Record Deletion**

###### **Managing Google Maps**


## Getting Started
Download from github repo and install on local server - For new users sign up with username, password and email.

## Prerequisites

OS X & Linux:

npm install my-crazy-module --save

Windows:

edit autoexec.bat


Safari/Firefox/Google Chrome Browsers

## Installing

To install this program locally:

- Download Repo
- Run bundle install from command line
- Navigate to root page on local server

## Built With
	* html5
	* css3
	* javascript ES6
	* jquery 3.4.1
	* rails ~> 5.2.3
	* ruby '2.3.3'
	* sqlite3
	# devise
	#jws
	* bcrypt ~> 3.1.7
	* byebug
	* bootsnap
	* listen
	* pry
	* puma 3.12.2
	* rack 2.0.8
	* rack-cors
	* spring '3.0.5'

	* google maps api

## Release History

	0.1.0
	The first proper release

	0.0.1
	Work in progress


## Authors
  Harleigh Abel - atxrenegade  - harleighabel@gmail.com
	https://www.linkedin.com/in/harleigh-abel-8aaa1a64/

## License
Distributed under the GNU GENERAL PUBLIC LICENSE license. See https://gist.github.com/fny/4677598 for more information.

## Acknowledgments: Photograph by NAME HERE

## Contributing
  Fork it (https://github.com/atxrenegade/directory_cozumel/fork)

  Create your feature branch (git checkout -b feature/fooBar)

  Commit your changes (git commit -am 'Add some fooBar')

  Push to the branch (git push origin feature/fooBar)

  Create a new Pull Request
