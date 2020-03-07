var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export product model
var product = module.exports = mongoose.model('product', productSchema);
module.exports.get = function (callback, limit) {
    product.find(callback).limit(limit);
}