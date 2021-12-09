const user = require('../../models/user');
const Wish = require('../../models/wish');


module.exports = {
    create,
    deleteWish,
    updateWish,
    getAll,
    show
};


async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const wish = await Wish.create(req.body);
    res.json(wish);
}

async function deleteWish(req, res) {
    const wish = await Wish.findByIdAndDelete(req.params.id);
    res.json(wish);
}


async function updateWish(req, res) {
    const updatedWish = await Wish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWish);
}


async function getAll(req, res) {
    const wishes = await Wish.find({}).sort({'createdAt': -1});
    // re-sort based upon the sortOrder of the categories
    console.log(wishes);
    res.json(wishes);

}

async function show(req, res) {
    const wish = await Wish.findById(req.params.id);
    res.json(wish);
}