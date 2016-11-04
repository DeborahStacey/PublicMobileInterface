* UPDATE 2016-11-04
- Added the add cat page
- added the sign-in page
- added testing to all the pages we have created

* UPDATE 2016-10-28 
- Removed links to test pages from front page.
- Added Sign-Up button to the front page.
- Sign-Up screen has all the fields for a user to signup on the system.
	- If all of the feilds have been filled out the user account will be added to the database.
	- If not an error will appear.

* UPDATE 2016-10-21

- Now using Ignite template; we've had to remove a couple of pages temporarily due to time constraints; will be re-added for next build
  - Blame midterms
- `npm install` will need to be run before buildding
- If running the `react-native run-android` causes an error, run `cd android && ./gradlew clean`; then cd back to the root project directory and run the first command again
- If you still get an error, run `chmod u+x android/gradlew` and try again
