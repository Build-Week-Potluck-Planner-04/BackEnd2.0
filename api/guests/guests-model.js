const database = require("../../data/db-config");

const { findPotluckById } = require("../potlucks/potlucks-model");

function findGuestById(id) {
    return database("user_data as ud")
        .where("ud.role", "guest")
        .andWhere({ id })
        .first();
}

function getGuests() {
    return database("user_data as ud")
        .where("ud.role", "guest");
}

async function addGuest(guestInfo) {
    await database("user_data").insert(guestInfo, "id")
        .then(id => {
            return findPotluckById(id[0]);
        })
}

module.exports = {
    findGuestById,
    getGuests,
    addGuest
}