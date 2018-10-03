# Project Overview

This project involves a web-based application that reads RSS feeds. Testing is an important part of the development process, I have already included [Jasmine](http://jasmine.github.io/) and even written most of the test suite! 

To view the app live, use this [link]()

## Benefits of the project?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## Dependencies

* [Normalize CSS](https://necolas.github.io/normalize.css/)
* [Icomoon fonts](https://icomoon.io/)
* [jQuery](https://jquery.com/download/)
* [handlebars](http://handlebarsjs.com/)
* [Nodejs](https://nodejs.org/)
* [Gulp](https://gulpjs.com/)
* [jasmine](https://jasmine.github.io/)

## Installation

* Clone the project repository
* Open terminal/command prompt and Navigate to the project directory
* Run `npm install` to install all devdependencies in the `package.json` file.
* Run the command `gulp` in your terminal/command prompt.
* Since the project uses browser sync to enable live editing, the app will open in the 
  browser on port 3000. To access it in the browser use the link `http://localhost:3000`

# Test suites created in the project

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
2. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
3. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
4. Return the `allFeeds` variable to a passing state.
5. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
6. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
7. Write a new test suite named `"The menu"`.
8. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
9. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
10. Write a test suite named `"Initial Entries"`.
11. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
12. Write a test suite named `"New Feed Selection"`.
13. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
14. No test should be dependent on the results of another.
15. Callbacks should be used to ensure that feeds are loaded before they are tested.
16. Implement error handling for undefined variables and out-of-bound array access.
17. When complete - all of your tests should pass. 

