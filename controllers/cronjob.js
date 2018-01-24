var Transaction = require('../models/transaction');
var Block = require('../models/block');

async function task() {

    try {
        var tran = new Transaction();
        tran.from = "";
        tran.to = "aaa9402664f1a41f40ebbc52c9993eb66aeb366602958fdfaa283b71e64db123";
        tran.value = 50;
        await tran.save();

        var query = {
            createAt: { // 10 minutes ago (from now)
                $gt: new Date(Date.now() - 1000 * 9)
            }
        };
        var block = Block();

        var transactions = await Transaction.find(query).exec();

        var totalSpend = 0.0;
        var transIds = [];
        transactions.forEach((tran) => {
            transIds.push(tran._id);
            totalSpend += tran.value;
        });
        var currentHeight = await Block.count().exec();
        block.transactions = transIds;
        block.totalSpend = totalSpend;
        block.height = currentHeight + 1;

        await block.save();
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    task
};