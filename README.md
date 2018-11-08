# WayPathIO
**WayPathIO** is a web application that will calculate different paths around the Texas State University Campus. Users will be able to report real-time information about building, path, traffic, construction, and weather conditions. WayPathIO will use GIS data gathered by the Geography department at Texas State. For the future, we will potentially implement turn-by-turn navigation, locate high traffic areas, and crowdsource many different variables that may assist with navigating and creating space efficiency at Texas State. Users will be able to calculate travel time between buildings and also add detours (coffee, printing homework, visiting office hours, etc.). WayPathIO will be developed first locally and then uploaded onto the cs.txstate.edu servers. We will be collecting data from Texas State’s GIS department for the geographic locations, using a web mapping framework (Leaflet, OpenLayers), and using a web framework to create a basic website to host the web application. Tools we will be using are: HTML, CSS, and JavaScript.

## **Team Members**
   * Brian Chamblee
   * Daniel Le
   * Jose (Jay) Martinez
   * Rolando Martinez
   * Maojun (Brandon) Tian - landing page(index.html https://github.com/CS3398-IoStudentLoans/WayPathIO/blob/develop/WayPathIO/index.html)
   
Project developed for the Fall 2018 Software Engineering Class (CS 3398) at Texas State University.

## **Status of Project**
Our project currently has a landing page, a map page and a infomation page. The landing page and info page is functioning with mobile friendly sites but our map page is not completely finished with all locations. We currently have 24 locations available from the dropdown manu.

## **Running the Code**
To run the map:
  1. Run $npm install ol
  2. Navigate to the oltest directory.
  3. Run $npm start
  4. Map should be available on localhost:1234.
  
## **Member Contributions**
   * Brian Chamblee
   * Daniel Le - Added Geolocation and Navigation functionalities to the map. This is located in "oltest" folder in develop branch
   * Jose (Jay) Martinez
   * Rolando Martinez
   * Maojun (Brandon) Tian - mobile optimization

## **Next Steps**
We will be finishing the map and making sure all basic functions work. We will also be adding more features such as path calculation and optimization. We will all go through the tutorial for OpenLayers in order to use it with the Node.js web framework.
   * Brian Chamblee - 
   * Daniel Le - Integrate shapefiles with map, add navigation features for walking
   * Jose (Jay) Martinez - 
   * Rolando Martinez - 
   * Maojun (Brandon) Tian - Optimizing and adding features to our map page.
   



