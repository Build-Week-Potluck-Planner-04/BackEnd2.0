const bcrypt = require("bcryptjs");
const password = "4321";
const hash = bcrypt.hashSync(password, 8)

const users = [
  {
    user_id: 1,
    username: "Tanjiro_Kamado",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 2,
    username: "Nezuko_Kamado",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 3,
    username: "Inosuke_Hashibira",
    password: hash,
    role: "organizer",
  },
  {   
    user_id: 4,
    username: "Zenitsu_Agatsuma",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 5,
    username: "Giyu_Tomioka",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 6,
    username: "Tengen_Uzui",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 7,
    username: "Shinobu_Kocho",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 8,
    username: "Mitsuri_Kanroji",
    password: hash,
    role: "organizer",
  },
  {
    user_id: 9,
    username: "Obanai_Iguro",
    password: hash,
    role: "organizer",
  }
]

const foods = [
  {
    food_id: 1,
    food_name: "Sushi",
  },
  {
    food_id: 2,
    food_name: "Soba",
  },
  {
    food_id: 3,
    food_name: "Yakitori",
  },
  {
    food_id: 4,
    food_name: "Sukiyaki",
  },
  {
    food_id: 5,
    food_name: "Takoyaki",
  },
  {
    food_id: 6,
    food_name: "Onigiri",
  },
  {
    food_id: 7,
    food_name: "Shabu Shabu",
  },
  {
    food_id: 8,
    food_name: "Tonkatsu",
  },
  {
    food_id: 9,
    food_name: "Tempura",
  },
  
]

const guests = [
  {
    guest_id: 1,
    guest_name: "Muzan Kibutsuji",
  },
  {
    guest_id: 2,
    guest_name: "Akaza",
  },
  {
    guest_id: 3,
    guest_name: "Daki",
  },
  {
    guest_id: 4,
    guest_name: "Enmu",
  },
  {
    guest_id: 5,
    guest_name: "Rokuro",
  },
  {
    guest_id: 6,
    guest_name: "Koinatsu",
  },
  {
    guest_id: 7,
    guest_name: "Rui",
  },
  {
    guest_id: 8,
    guest_name: "Hinatsuru",
  },
  {
    guest_id: 9,
    guest_name: "Makio",
  },
]

const potlucks = [
  {
    potluck_id: 1,
    potluckName: "DSC: New Year Party",
    date: "January 01, 2022",
    time: "12:00 AM",
    location: "Tsuzumi Mansion",
    user_id: 5,
  },
  {
    potluck_id: 2,
    potluckName: "Valentines Day",
    date: "February 14, 2022",
    time: "4:30 AM",
    location: "Butterfly Mansion",
    user_id: 2,
  },
  {
    potluck_id: 3,
    potluckName: "Hiking/Picnic",
    date: "March 26, 2022",
    time: "3:30 PM",
    location: "Sagiri Mountain",
    user_id: 1,
  },
  {
    potluck_id: 4,
    potluckName: "Inosuke's Birthday Bash",
    date: "April 22, 2022",
    time: "5:00 PM",
    location: "Swordsmith Village",
    user_id: 3,
  },
  {
    potluck_id: 5,
    potluckName: "Tanjiro's Birthday Party",
    date: "July 12, 2022",
    time: "5:30 PM",
    location: "Kumotori Mountain",
    user_id: 1,
  },
  {
    potluck_id: 6,
    potluckName: "Zenitsu's Birthday Party",
    date: "September 03, 2022",
    time: "3:30 PM",
    location: "Ushigome District",
    user_id: 4,
  },
  {
    potluck_id: 7,
    potluckName: "Hashira Meeting",
    date: "September 07, 2022",
    time: "3:30 PM",
    location: "Sagiri Mountain",
    user_id: 5,
  },
]

const potluck_foods = [
  {
    potluck_food_id: 9,
    potluck_id: 1,
    food_id: 1,
  },
  {
    potluck_food_id: 8,
    potluck_id: 2,
    food_id: 2,
  },
  {
    potluck_food_id: 7,
    potluck_id: 3,
    food_id: 3,
  },
  {
    potluck_food_id: 6,
    potluck_id: 4,
    food_id: 4,
  },
  {
    potluck_food_id: 5,
    potluck_id: 6,
    food_id: 5,
  },
  {
    potluck_food_id: 4,
    potluck_id: 7,
    food_id: 6,
  },
  {
    potluck_food_id: 3,
    potluck_id: 2,
    food_id: 7,
  },
  {
    potluck_food_id: 2,
    potluck_id: 3,
    food_id: 8,
  },
  {
    potluck_food_id: 1,
    potluck_id: 5,
    food_id: 9,
  },
]

const potluck_guests = [
  {
    potluck_guest_id: 1,
    potluck_id: 3,
    guest_id: 9,
  },
  {
    potluck_guest_id: 2,
    potluck_id: 4,
    guest_id: 8,
  },
  {
    potluck_guest_id: 3,
    potluck_id: 6,
    guest_id: 7,
  },
  {
    potluck_guest_id: 4,
    potluck_id: 1,
    guest_id: 6,
  },
  {
    potluck_guest_id: 5,
    potluck_id: 2,
    guest_id: 5,
  },
  {
    potluck_guest_id: 6,
    potluck_id: 6,
    guest_id: 4,
  },
  {
    potluck_guest_id: 7,
    potluck_id: 7,
    guest_id: 3,
  },
  {
    potluck_guest_id: 8,
    potluck_id: 2,
    guest_id: 2,
  },
  {
    potluck_guest_id: 9,
    potluck_id: 1,
    guest_id: 1,
  },
]


exports.users = users
exports.foods = foods
exports.guests = guests
exports.potlucks = potlucks
exports.potluck_foods = potluck_foods
exports.potluck_guests = potluck_guests


exports.seed = async function(knex) {
  await knex("users").insert(users)
  await knex("foods").insert(foods)
  await knex("guests").insert(guests)
  await knex("potlucks").insert(potlucks)
  await knex("potluck_foods").insert(potluck_foods)
  await knex("potluck_guests").insert(potluck_guests)
}