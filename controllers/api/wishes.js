const Wish = require('../../models/wish');


module.exports = {
  create,
  deleteWish,
  updateWish,
  getAll,
  show
};

async function getAll() {
    const wishes = await Wish.find({});
    res.json(wishes);
}

async function create(req,res) {
  const wish = await Wish(req.body);
  wish.save();
  console.log(wish);
  res.json(wish);
}

async function deleteWish(req,res) {
    const wish = await Wish.findByIdAndDelete(req.params.id);
    res.json(wish);
}


async function updateWish(req,res) {
  const updatedWish = await Wish.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(updatedWish);
}


async function getAll(req, res) {
  const wishes = await Wish.find({});
  // re-sort based upon the sortOrder of the categories
  console.log(wishes);
  res.json(wishes);

}

async function show(req, res) {
  const wish = await Wish.findById(req.params.id);
  res.json(wish);
}