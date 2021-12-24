Base URL:
`https://bw-potluck-planner-04.herokuapp.com/`

— Endpoints —

Authentication
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| POST        | /auth/login    | Login as an existing user                                                   |
| POST        | /auth/register | Register as a new user                                                      |
		
Users 		
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| GET         | /users/users    | Get users                                                                   |
| POST        | /users/register | Delete user                                                                 |


Potlucks
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| GET         | /potlucks/potlucks | Get potlucks (events)                                                       |
| GET         | /potlucks/potlucks/:id | Delete potlucks by potluck ID                                           |
| GET         | /potlucks/potluck  | Get Potlucks (event) info                                                   |
| PUT         | /potlucks/potluck/:id | Updates potluck (event) with the chosen ID                               |
| DELETE      | /potlucks/potluck/:id | Delete potluck (event) by ID                                             |


Guests
| Method      | URL       | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| GET         | /guests/guests   | Get guest list                                                              |
| GET         | /guests/guest/:id | Guest guest by guest ID                                                    |
| POST        | /guests/addGuest/:pid | Add new guest                                                          |
                                              
