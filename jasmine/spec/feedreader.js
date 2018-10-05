/* eslint-env jasmine, jquery */
/* global allFeeds, loadFeed */

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', () => {
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });



        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', () => {
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', () => {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden on page load', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when toggled', () => {
            // on addition of the first click() function, notice that 
            // the browser opens the page and runs the click() function
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // therefore calling it for a second time will click the
            // menu icon to hide it.
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach((done) => {
            // asynchronous done() function is run as the callback parameter 
            // cb in loadFeed () function in app.js
            // to pick atleast one entry we choose the first entry which will
            // be at position 0.
            loadFeed(0,done);
        });

        it('contains atleast one entry',() => {
            expect($('.feed .entry').length).not.toBe(0);
        });

    });

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        let entryOne;

        beforeEach((done) => {
            loadFeed(0, () => {
                // Get the first entry and save it in entryOne
                entryOne = $('.feed').html();
                
                // Get the second entry
                loadFeed(1, done);
            });
        });

        it('loads different content', () => {
            // entryOne is what was loaded previously and is being
            // compared to what is currently in the .feed
            expect(entryOne).not.toEqual($('.feed').html());
        });
    });
}());
