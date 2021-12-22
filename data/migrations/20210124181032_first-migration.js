exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id")
      users.string("username", 200)
        .notNullable()
        .unique()
      users.string("password", 200)
        .notNullable()
      users.string("role", 20)
        .notNullable()
    })

    .createTable("foods", (foods) => {
      foods.increments("food_id")
      foods.string("food_name")
    })

    .createTable("guests", (guests) => {
      guests.increments("guest_id")
      guests.string("guest_name")
    })

    .createTable("potlucks", (potlucks) => {
      potlucks.increments("potluck_id")
      potlucks.string("potluckName")
        .notNullable()
      potlucks.string("date")
        .notNullable()
      potlucks.string("time")
        .notNullable()
      potlucks.string("location")
        .notNullable()
      potlucks.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })

    .createTable("potluck_foods", (potluck_foods) => {
      potluck_foods.increments("potluck_food_id")
      potluck_foods.integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      potluck_foods.integer("food_id")
        .unsigned()
        .notNullable()
        .references("food_id")
        .inTable("foods")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })

    .createTable("potluck_guests", (potluck_guests) => {
      potluck_guests.increments("potluck_guest_id")
      potluck_guests.integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      potluck_guests.integer("guest_id")
        .unsigned()
        .notNullable()
        .references("guest_id")
        .inTable("guests")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("potluck_guests")
  await knex.schema.dropTableIfExists("potluck_foods")
  await knex.schema.dropTableIfExists("potlucks")
  await knex.schema.dropTableIfExists("guests")
  await knex.schema.dropTableIfExists("foods")
  await knex.schema.dropTableIfExists("users")
}
