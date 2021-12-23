Base URL:
https://bw-potluck-planner-04.herokuapp.com/

— Endpoints —

Authentication (Login and Register
Method	URL	Description
POST	/login	Login as an existing user
POST 	/register	Register as a new user

Users
Method	URL	Description
GET	/users	Get Users
DELETE 	/user/:id	Delete User (with id)

Potlucks
Method	URL	Description
GET	/potlucks	Get Potlucks (events)
GET 	/potlucks/:id	Get potlucks by potluck ID
GET	/potluck	Get potlucks (event) info
PUT	/potluck/:id	Updates potluck (event) with a chosen potluck id
DELETE	/potluck/id	Delete potluck (event)

Guests
Method	URL	Description
GET	/guests	Get guests
GET 	/guest/:id	Get guest by guest ID
POST	/addGuest/:pid	Add new guest by ID
