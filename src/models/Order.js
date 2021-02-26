const {Schema} = require("mongoose")
const Pizza = require("./Pizza")

const Order = new Schema({
    items: {type: String, default: 'Pepperoni'}, comments: [{
        type: Pizza, ref: 'Pizza'
    }]
});

module.exports = Order
