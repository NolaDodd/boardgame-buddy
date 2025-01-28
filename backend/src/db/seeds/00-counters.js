const counters = require("./00-counters.json")

module.exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE counters RESTART IDENTITY CASCADE")
  .then(function (){
    return knex("counters").insert(counters)
  })
};