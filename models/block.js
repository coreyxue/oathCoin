var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlockSchema   = new Schema({
    id: String,
    height: Number,
    transactions: [String],
    totalSpend: Number,
    hash: String,
    createAt: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('Block', BlockSchema);