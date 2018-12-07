# WayPathIO
**WayPathIO** is a web application that will calculate different paths around the Texas State University Campus. Users will be able to report real-time information about building, path, traffic, construction, and weather conditions. WayPathIO will use GIS data gathered by the Geography department at Texas State. For the future, we will potentially implement turn-by-turn navigation, locate high traffic areas, and crowdsource many different variables that may assist with navigating and creating space efficiency at Texas State. Users will be able to calculate travel time between buildings and also add detours (coffee, printing homework, visiting office hours, etc.). WayPathIO will be developed first locally and then uploaded onto the cs.txstate.edu servers. We will be collecting data from Texas State’s GIS department for the geographic locations, using a web mapping framework (Leaflet, OpenLayers), and using a web framework to create a basic website to host the web application. Tools we will be using are: HTML, CSS, and JavaScript.

## **Team Members**
   * Brian Chamblee - database backend, push and pull features  
   * Daniel Le
   * Jose (Jay) Martinez
   * Rolando Martinez
   * Maojun (Brandon) Tian
   
Project developed for the Fall 2018 Software Engineering Class (CS 3398) at Texas State University.

## **Status of Project**
Our project currently has a landing page, a map page and a infomation page. The landing page and info page is functioning with mobile friendly sites but our map page is not completely finished with all locations. We currently have 24 locations available from the dropdown manu.
The map and data base are currently linked up, the map does navigation functions and can push and pull data from the database.

## **Running the Code**
To run the map:
  1. Run $npm install ol
  2. Navigate to the oltest directory.
  3. Run $npm start
  4. Map should be available on localhost:1234.
  
To use database:
  1. Use the development branch
  2. navigate to the testing directory
  3. run $npm run watch
  4. Map opens from localhost:3000
  5. Input push into data base is at localhost:3000/form
  6. Output pull from data base is in localhost:3000/registrations   
  
## **Member Contributions**
   * Brian Chamblee - Worked on backend development and linked to the front end created a server and database for our project. testing folder in the testing-Brian branch
   * Daniel Le - Added Geolocation and Navigation functionalities to the map. This is located in "oltest" folder in develop branch
   * Jose (Jay) Martinez
   * Rolando Martinez - Worked on getting buttons to pull from mangodb
   * Maojun (Brandon) Tian - Get function that pulls and displays data from data base, it is used when the page is loaded in a browser and the data is showed when the push button is clicked. The main code can be found in index.js under WayPathIO/testing/routes under integration_testing_DLE branch.


## **Next Steps**
We will be finishing the map and making sure all basic functions work. We will also be adding more features such as path calculation and optimization. We will all go through the tutorial for OpenLayers in order to use it with the Node.js web framework.
   * Brian Chamblee - create full functionality of the database working with the buttons on the map 
   * Daniel Le - Integrate shapefiles with map, add navigation features for walking
   * Jose (Jay) Martinez - 
   * Rolando Martinez - Begin implamenting our online database
   * Maojun (Brandon) Tian - figure out how to calcuulate average busy level of a building and display on map.
   



