const {Schema} = require("mongoose")

const Pizza = new Schema({
    name: {type: String, default: 'Pepperoni'},
});

module.exports = Pizza
