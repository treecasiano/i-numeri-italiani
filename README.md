# inumeri
This is a Node Express app that translates Italian numbers 1 - 9999 programmatically. CSS and JS files are concatenated and minified using the Gulp task runner. Gulp also runs the Mocha and Chai tests that make sure the translation function works correctly.

There are only two branches on GitHub, master and develop. Locally I use a third branch for deployment to Heroku. With Heroku, you deploy by way of pushing your code much like you would push it to GitHub, but instead it goes to a Heroku master. On that branch, I commit the generated CSS and JS files that I am keeping out of the GitHub repository.

## To install:
1. Clone or fork the repo from Github.
2. You must have Node and Sass installed.
3. Install nodemon to run the server. ```npm install -g nodemon```
4. Run the command ```npm install``` from inside the project folder to install
the dependencies.`
7. Start the server with nodemon: ```nodemon app.js```
8. Run ```gulp browser-sync```

This last command initiates the concatenation and minification of the CSS and JS files (at this time there is only one JS file, but I’m putting it through the Gulp minifcation and concatenation process because I may add more in the future). This process will create CSS and JS folders and their associated files in the app folder. I have the .gitignore file set up so they do not get committed to version control.
