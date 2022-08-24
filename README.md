# This is a project to the interview of OTIF

## Available Scripts 

In the project directory, you can run with (yarn recommended):

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Enviroment

### `.env file`

You need an environment variable names `REACT_APP_API` with the api url  


## Interview Description

### Practical question

`Part 1:`
Implement a “login” web page. You will need to send a POST request to
`REACT_APP_API/access/signin` with body fields “username” and
“password”. The purpose of this assignment is for you to be able to keep state between pages,
and even if a user closes the webpage, next time they open it they should remain logged in.

A Sample username/password you can use are:
“username”: gyf
“password”: 123456789

`Part 2:`
Implement a web page where you fetch (GET) information from
`REACT_APP_API/access` and can filter out / search for names,
displaying the entire information of a user’s profile whenever’s there’s a partial name match.

For example, after fetching data from `REACT_APP_API/access`:
● Search for “Null” will display an empty result
● Search for “gyf” will display

