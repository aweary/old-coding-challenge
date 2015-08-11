# Code Challenge
Greetings potential Concierge Auctions developer! 

As you have already heard we have a rapidly evolving and expanding development team that is in need of your skills. This repository contains the base code that you will need to fix and expand upon in order to meet the requirements of the challenges outlined below. The computer you are provided with will have all requirements installed and ready for you to begin working immediately. 

### General Requirements

* All code must be written using the latest ES6 and ES7 coding techniques using Babel.js to transpile to javascript.
* No Coffee Script. No Typescript.

### Backend Challenge: Build an API 

Build a server using whatever tools you wish ( KOA, Express, Restify ) that meets the following requirements

* Respond to a request to retrieve a list of users with full user data. 
* Respond to a request to modify user data by replacing provided fields in the user data
* Stores user data in a JSON file that you build. Each user entry in the json file should have a first name, last name, email, ID, profile image url, date of birth, address, networth and phone number

### Frontend Challenge: Webpack + React

* Build a simple single page using react and webpack that will display a list of users retrieved via the api you built in the first challenge.
* Should retreive user data before the component mounts
* Should display a list of users with profile image, first and last name and email.
* Clicking on a user in this list will expand that entry and show the rest of the user profile with form fields to allowed editing.
* The expanded profile should contain a update button that is disabled until changes are made to the user data. 
* The update button should send the update request to the server. 


