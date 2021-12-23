const database = require("../../data/db-config")

const getBy = (filter) => {
    return database("potlucks")
        .where(filter);
}

const getByOrganizerId = (id) => {
    return database("potlucks")
        .where("user_id", id)
        .first();
}

async function add(newPotluck) {
    const [id] = await database("potlucks").
        insert(newPotluck, ["potluck_id"]);

    return database("potlucks")
        .where("potluck_id", id)
        .first();
}

module.exports = {
    getBy,
    getByOrganizerId,
    add
}