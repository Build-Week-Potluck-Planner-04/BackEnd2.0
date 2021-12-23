Base URL:
https://bw-potluck-planner-04.herokuapp.com/

— Endpoints —

Authentication
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| POST        | /login    | Login as an existing user                                                   |
| POST        | /register | Register as a new user                                                      |
		
Users 		
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| GET         | /users    | Get users                                                                   |
| POST        | /register | Delete user                                                                 |


Potlucks
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| GET         | /potlucks | Get potlucks (events)                                                       |
| GET         | /potlucks/:id | Delete potlucks by potluck ID                                           |
| GET         | /potluck  | Get Potlucks (event) info                                                   |
| PUT         | /potluck/:id | Updates potluck (event) with the chosen ID                               |
| DELETE      | /potluck/:id | Delete potluck (event) by ID                                             |


Guests
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| GET         | /guests   | Get guest list                                                              |
| GET         | /guest/:id | Guest guest by guest ID                                                    |
| POST        | /addGuest/:pid | Add new guest                                                          |
