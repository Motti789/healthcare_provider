# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## healthcare_provider
Flatiron School React-Redux Project - healthcare_provider is built with a React-Redux frontend and a Rails API backend. <br>
healthcare_provider is a app which allows the provider to: 

- Keep track of all of the providers clients.
- Submit new clients information. 
- Add session notes for a specific client.

## Demo
[Healthcare Provider](https://youtu.be/3Jy239mGayw)

## Getting Started

Fork and clone this repository to your local machine.

In your terminal, **make sure that you are in the backend directory** and install all the dependencies by executing the below command: $bundle install

Next, run the following commands in the terminal to set up the local database:


rails db:create
rails db:migrate
rails db:seed


Then execute "rails s" to start up the local server on localhost:3000.

Next, **make sure to navigate to the frontend directory**. You can type npm install to install all package dependencies.  

To run the app in development mode, type npm start in your terminal. If backend setup instructions are complete, and the development server is up and running, the terminal should prompt you to run the frontend on localhost:3002. Select Y to load the app on your browser.

execute "npm start" to run a local server on localhost:3002

License:
---
The system is available as open source under the terms of the [MIT License](LICENSE.MD).






