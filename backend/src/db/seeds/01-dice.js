const dice = require("./00-dice.json")

module.exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE dice RESTART IDENTITY CASCADE")
  .then(function (){
    return knex("dice").insert(dice)
  })
};