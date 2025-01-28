const rules = require("./00-rules.json")

module.exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE rules RESTART IDENTITY CASCADE")
  .then(function (){
    return knex("rules").insert(rules)
  })
};