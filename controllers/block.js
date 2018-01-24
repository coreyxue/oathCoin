var Block = require('../models/block');
var Transaction = require('../models/transaction');

async function create(req, res, next) {
    try {
        var query = {
            createAt: { // 10 minutes ago (from now)
                $gt: new Date(Date.now() - 1000 * 60 * 10)
            }
        }
        var block = Block();
        var transactions = await Transaction.find(query).exec();

        var totalSpend = 0.0;
        var transIds = [];
        transactions.forEach((tran) => {
            transIds.push(tran._id);
            totalSpend += tran.value;
        });
        block.transactions = transIds;
        block.totalSpend = totalSpend;
        await block.save();
        return res.status(200).json({description: "Block created", transactions});
    } catch (err) {
        next(err);
    }
}

async function list(req,res, next) {
    try{
        var blocks = await Block.find().exec();
        return res.json(blocks);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    create,
    list
};
