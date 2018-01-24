var Customer = require('../models/customer');

async function create(req, res, next) {
    try {
        var customer = new Customer();
        customer.name = req.body.name;
        customer.publicKey = req.body.publicKey;
        customer.balance = req.body.balance;

        customer = await customer.save();
        return res.status(200).json({description: "Customer created",});
    } catch (err) {
        next(err);
    }
}

async function list(req,res, next) {
    try{
        var customers = await Customer.find().exec();
        return res.json(customers);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    create,
    list
};
