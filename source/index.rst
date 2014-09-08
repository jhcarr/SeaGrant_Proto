.. SeaGrant_Proto documentation master file, created by
   sphinx-quickstart on Fri Sep  5 08:59:32 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to SeaGrant_Proto's documentation!
******************************************

Contents:

App
===

This folder is where all of the files dealing with the MVC format are stored.

Views-
------

These are all of the files that define how the pages will be laid out and what components they contain.

	.. note::
		All of the views have a header and a back button. The one exception is the Home view which doesn't have a back button. Below is example code from the ListView that defines these elements.

	.. literalinclude:: ../app/view/ListView.js
		:lines: 12-23

Home:
+++++
	The Home view is the first screen that the user will encounter after the app is loaded. On this screen a user will be able to search for products either by their location, a pre-specified location, type of product, or a combo of location and product. 

	.. image:: homeview.png

	The **User location** section contains a toggle and a drop down menu, which determine if the app should be locating using the user location and what distance from the user it should be locating vendors. In the code Home view below we first add a togglefield to switch the user location on or off. Underneath the toggle we add a drop down menu for users to choose how far away from themselves they want to look for a vendor. Our listeners then grab this info when an event is fired and they use functions to fire events to the controller. Then in the controller we use the functions to take the data input from the home screen to make an api call and get back data that relates to the user input.

	.. literalinclude:: ../app/view/Home.js
		:lines: 15-29, 87-96, 124-131

	.. literalinclude:: ../app/controller/List.js
		:lines: 54-83

	We also add in a **number of search results print out** like the Google search result. So when a user inputs a location or product we tell them how many vendors there are near that location or with that specific product or near that location with that specific product. The code for that tpl print out in the Home view is below, as well as the controller code that sends back the correct variable to print out.

	.. literalinclude:: ../app/view/Home.js
		:lines: 30-34

	.. literalinclude:: ../app/controller/List.js
		:lines: 116-158

	The **Location and Products drop down menus** are populated from the location and product stores. These drop down menus will determine how the data vendor data is sorted and displayed on the list page. In the home view code below we add code to make a location and product drop down menu, their listeners, and functions to fire events to the controller. Then in the controller we sort the vendors store base on that input data.

	.. literalinclude:: ../app/view/Home.js
		:lines: 35-59, 97-106, 132-139

	.. literalinclude:: ../app/controller/List.js
		:lines: 84-101

	On the bottom of the page we have the **Vendors and Products checkboxes** for sorting the list that will be shown in the list view. Finally the **Go button** on the bottom of the screen sends the user to the List page, where they can browse the data returned by their query.
List:
+++++
	The List view is used to display the data that the user's query has found. It displays this data in a list on the bottom half of the page and a map with pins that correspond with the list items. Users can find out more about the data items by either clicking on a list item or clicking the more info button in the map pin bubble. The list is populated depending on the users query from the home page. 

	.. image:: listview.png

	Below we have the code that adds the **map** and **list** to the ListView. We also included the **list item select** function from the controller.

	.. literalinclude:: ../app/view/ListView.js
		:lines: 32-49, 62-66, 77-80

	.. literalinclude:: ../app/controller/List.js
		:lines: 232-254

	.. note::	
		If only a location is given, then the list will be populated with vendors placing closest first in the list.   

		If only a product is given, then the list will be populated with products and their preparation.    

		If a location and product are chosen, then the list will be populated with products and their preparation.

		If the vendor sort checkbox is checked and a product, or location or both is selected, then we will show a list of vendors with said products.

		If the products sort checkbox is checked and a product, or location or both is selected, then we will show a list of products in that area, or pertaining to that product or both.

		If both checkboxes are selected, then we throw an error and say that you can only sort by one attribute.

		When a user chooses an item from the list screen to see more detailed information about, that item data will be sent to the Detail screen using a fired event.
Detail:
+++++++
	The detail page will either display vendor data, with a static map, and a list of the selected vendor's products. Or the Detail page will display information on a specific preparation of a product that the user selected in the list page, with a list of vendors who carry that product with that specific preparation. 

	.. image:: detailview.png

	Here in the code we add the **vendor information block** and the **vendor's items list** in the Detail view. Then in the controller we get an info item depending on the list item we select, this item is sent to the info page.

	.. literalinclude:: ../app/view/Detail.js
		:lines: 31-52, 65-69, 80-83

	.. literalinclude:: ../app/controller/List.js
		:lines: 278-283

	No matter how each of the pages look, they will both have an information button that will let the user see more educational material on the specific product.
Info:
+++++
	This is the information page that is linked to the detail page and this will have some specific sections that contain different types of information about the selected product. (Note: There are only 7 types of information data that cover large groups of products.)

	.. image:: infoview.png

	Below is the code that instantiates the **list** in the Info view, and the controller function that defines which specific page to load.

	.. literalinclude:: ../app/view/Info.js
		:lines: 32-45, 58-62, 73-76

	.. literalinclude:: ../app/controller/List.js
		:lines: 295-300

Specific:
+++++++++
	This page is dynamically loaded with information about the product depending on what info the user chose to view in the Info view.

	.. sourcecode:`../app/view/Specific.js`

	.. image:: specificview.png

Controller-
-----------

Contains functions that alter data, define button actions, and set the current view.

List:
+++++
	As the controller this file is responsible for linking all of the views and stores. In the top part of the file you will see all of the references and the controls that each page reference has. Then our first two functions deal with page transitions. As you navigate through the controller you will notice that the functions are broken out into sections for their respective views and are also ordered in the same way that elements in that view are laid out. 
Models-
-------

Define a store's data structure.

Vendors:
++++++++
	This model defines how the vendor data is structured and is called by the Vendor store.

	.. literalinclude:: ../app/model/Vendors.js
		:lines: 5-24

	.. note::
		This code will not be displayed until file names are cleaned up.

Locations:
++++++++++
	This model defines how the location data is structured and is called by the Location store.

	.. literalinclude:: ../app/model/Locations.js
		:lines: 4-13

Products:
+++++++++
	This model defines how the product data is structured and is called by the Product store.

	.. literalinclude:: ../app/model/Products.js
		:lines: 4-18

Stores-
-------
		
Have data that is accessed and manipulated by functions and dom elements.

Distance:
+++++++++
	This is a static store used to populate the user location "within distance" drop down menu.

	.. literalinclude:: ../app/store/Distance.js
		:lines: 4-53

Education:
++++++++++
	This is a static store that is used to store the educational data for the info and specific pages. (Note: This is where the 7 educational objects will be stored.)

	.. literalinclude:: ../app/store/Education.js
		:lines: 4-25

Info:
+++++
	This was our first test store, technically same as Vendor store. (See below)

	.. literalinclude:: ../app/store/Info.js
		:lines: 5-15

Location:
+++++++++
	The Location store has some of our first test data in it, and was our first test proxy loading store, that loads data from a json.

	.. literalinclude:: ../app/store/Location.js
		:lines: 5-16

Product:
++++++++
	The Product store is dynamically loaded store that loads product data from the newProducts.json. This store is referenced by the drop down menu on the home page, the list page list and map (at specific times), and the detail page (at specific times).

	.. literalinclude:: ../app/store/Product.js
		:lines: 5-16

StateStore:
+++++++++++
	This store gets data loaded into it by the controller when a user selects an item from the list page, depending on the item either products of a specific vendor or vendors that carry a specific item are loaded into this store, which will then be used to display the list on the detail page.

	.. literalinclude:: ../app/store/StateStore.js
		:lines: 7-48

Vendor:
+++++++
	The Vendor store is dynamically loaded store that loads vendor data from the newvendors.json. This store is referenced by the drop down menu on the home page, the list page list and map (at specific times), and the detail page (at specific times).

	.. literalinclude:: ../app/store/Vendor.js
		:lines: 6-17

Jasmine-standalone
==================

We included Jasmine in case we wanted to use it for unit tests, but as of right now we are using Siesta for our UI and unit testing.

Node_modules
============

This file is a reference for our linter.

Phonegap
========

The Phonegap file contains all of the necessary files to package our Sencha app for different platforms. We also use the Phonegap splash screen feature to implement our splash screen.

To add a splash screen we go into the res/drawable folder and save our splash screen image there as a .png. Then we go into the src/com/domain/SeaGrant_Proto/SeaGrant_Proto.java file and add the line: 

super.setIntegerProperty("splashscreen", R.drawable.splash); 

as well as update the loadUrl from: 

super.loadUrl("file:///android_asset/www/index.html"); 

to: super.loadUrl("file:///android_asset/www/index.html", 4000);

	..note::
		The 4000 added to the loadUrl makes it so that the splash screen is displayed for 4 seconds, so if you change this it will affect how long the splash screen is displayed.

Resources
=========

This file contains resources for Sencha such as CSS, icons, and SASS.

	.. note::
		Any formatting should be done in sass/app.scss file, because that file will be used in the build process to overwrite the css/app.css file.

Siesta
======

The Siesta file contains all of the necessary files for UI and unit testing.

Necessary Siesta files-
-----------------------

index.html
++++++++++

	The index.html contains the layout and design of the Siesta testing environment.

index.js
++++++++
	This file defines all of your preloads and declares your tests. One very important note on this file, your preloads must be defined in the correct order or you will get errors that will make your tests fail. **ORDER OF PRELOADS IS KEY!**

siesta-2.0.8-lite
+++++++++++++++++
	This folder contains all of the Siesta backend files that we will need for testing using Siesta.

Test files-
-----------

home_test.t.js
++++++++++++++
	This file tests that all of the elements on our homepage exist and that they send the correct data to the correct location in the controller when they fire events.

list_test.t.js
++++++++++++++
	This file tests that all of the elements on our list page exist and that they send the correct data to the correct location in the controller when they fire events.

detail_test.t.js
++++++++++++++++
	This file tests that all of the elements on our detail page exist and that they send the correct data to the correct location in the controller when they fire events.

info_test.t.js
++++++++++++++
	This file tests that all of the elements on our info page exist and that they send the correct data to the correct location in the controller when they fire events.

specific_test.t.js
++++++++++++++++++
	This file tests that all of the elements on our specific page exist and that they send the correct data to the correct location in the controller when they fire events.

Source
======

This is where the source for our documentation files live. If we want to update our readme we can alter the index.rst file and run "sphinx-build ./ ../sphinx" while in this directory. Then our built sphinx docs will be put in the sphinx directory.

Sphinx
======

This file contains all of our built Sphinx docs. These can be viewed in the browser by adding a /sphinx to our site's url.

Syntax
======

The Syntax file is where our linting tools live. We use lintroller which incorporates jsLint, jsHint, and Esprima. To run the linter, navigate to this file and run criticize-me.sh. This will create an error_log.txt that you can view to see what is wrong with your syntax.

Touch
=====

This folder contains all of the Sencha Touch resources.

.. toctree::
   :maxdepth: 2



Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

