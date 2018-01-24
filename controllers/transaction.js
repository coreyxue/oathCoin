var Transaction = require('../models/transaction');

async function create(req, res, next) {
    try {
        var transaction = new Transaction();
        transaction.from = req.body.from;
        transaction.to = req.body.to;
        transaction.value = req.body.value;

        transaction = transaction.save();
        return res.status(200).json({description: "Transaction created",});
    } catch (err) {
        next(err);
    }
}

async function list(req,res, next) {
    try{
        var transacrtions = await Transaction.find().exec();
        return res.json(transacrtions);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    create,
    list
};
