var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransactionSchema = new Schema({
    id: String,
    value: { type: Number, required: true },
    from: { type: String},
    to: { type: String, required: true },
    createAt: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('Transaction', TransactionSchema);