# WayPathIO
**WayPathIO** is a web application that will calculate different paths around the Texas State University Campus. Users will be able to report real-time information about building, path, traffic, construction, and weather conditions. WayPathIO will use GIS data gathered by the Geography department at Texas State. For the future, we will potentially implement turn-by-turn navigation, locate high traffic areas, and crowdsource many different variables that may assist with navigating and creating space efficiency at Texas State. Users will be able to calculate travel time between buildings and also add detours (coffee, printing homework, visiting office hours, etc.). WayPathIO will be developed first locally and then uploaded onto the cs.txstate.edu servers. We will be collecting data from Texas State’s GIS department for the geographic locations, using a web mapping framework (Leaflet, OpenLayers), and using a web framework to create a basic website to host the web application. Tools we will be using are: HTML, CSS, and JavaScript.

## **Team Members**
   * Brian Chamblee 
   * Daniel Le
   * Jose (Jay) Martinez
   * Rolando Martinez
   * Maojun (Brandon) Tian - landing page(index.html https://github.com/CS3398-IoStudentLoans/WayPathIO/blob/develop/WayPathIO/index.html)
   
Project developed for the Fall 2018 Software Engineering Class (CS 3398) at Texas State University.
Our project currently has a landing page (localhost:3000/main), a map page (localhost:3000) and a infomation page (localhost:3000/aboutus). 
The landing page and info page is functioning with mobile friendly sites but our map page is not completely finished with all locations. We currently have 24 locations available from the dropdown manu.
The map and data base are currently linked up, the map does navigation functions and can push and pull data from the database.
**The code we used for demo is in testing folder under integration_testing_DLE branch.**

## **Running the Code**  	
  1. Use the integration_testing_DLE branch
  2. navigate to the testing directory
  3. run $npm run watch
  4. Map opens from localhost:3000
  5. Input data into data base using lower left button Green (not busy) Yellow (medium busy) Red (very busy ). ( post can be confirmed with console output)
  6. pushing data for a specific building can be done by selecting a building from the button on the top right
  7. Output pull from data base is viewed in the same window as the input buttons
  8. button with the target shape on left will pull up a window for tracking GPS
  9. clicking on map will allow for navigation   
  
## **Member Contributions**
   * Brian Chamblee - Worked on backend development and linked to the front end created a server and database for our project. Created buttons for posting building data to the database. Most of the CSS (way the site looks) and buttons for opening and closing functions in the project were created and designed by me. I wrote multiple .get routes and the .post route which can be found in the index.js file in the routes folder. I created the Schema in registrations.js in the models folder. The CSS I wrote can be found in the public/stylesheets folder. I contributed to some of the javascript and html in the map.html file found in the views folder. All of the files my code can be found in the integration_testing_DLE branch in the testing folder. Artifacts can be found in various committed pushes from Nov 17th on, most posts where a good amount of code was pushed was in pushes titled updated css, updated map, updated submission form, and changes in css to make look pretty added gps button.
   * Daniel Le - Developed the code for the OpenLayers map page. Added Geolocation and Navigation functionalities to the map. Packaged the front end web map using Browserify for import into the Express application. Attempted to add shapefiles for each building on campus, but the code would not pull the data. It is available in "olshpDisplay" folder. My browserify folder is located in the main directory with the main WayPathIO folder.
   * Jose (Jay) Martinez
   * Rolando Martinez - WOrking on finding the locations of each building in Texas State University and making buttons to pull information from our database which held information about the busy levels of the buildings. My contributions will be foud in /WayPathIO/testing. In the testing/views folder, there will be the map.html file which holds the code for building buttons. Under /testing/public/javascripts there will be a map.js file which holds the code of the building's goelocation on the map. This code was intended to allow the user to use the map's building buttons to navigate and assist the user in finding the building, but we failed to implement this function during our final sprint. 
   * Maojun (Brandon) Tian - Get function that pulls and displays data from data base, it is used when the page is loaded in a browser and the data is showed when the push button is clicked. The main code can be found in index.js under WayPathIO/testing/routes under integration_testing_DLE branch.

## **Next Steps**
We will be finishing the map and making sure all basic functions work. We will also be adding more features such as path calculation and optimization. We will all go through the tutorial for OpenLayers in order to use it with the Node.js web framework.
   * Brian Chamblee - Change the post button to an update button 
   * Daniel Le - Integrate shapefiles with map, add navigation features for walking
   * Jose (Jay) Martinez - 
   * Rolando Martinez - Begin implamenting our online database
   * Maojun (Brandon) Tian - figure out how to calcuulate average busy level of a building and display on map.


