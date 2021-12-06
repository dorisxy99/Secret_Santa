const Wish = require('../../models/wish');

module.exports = {
  create,
  deleteWish,
  updateWish,
  getAll,
  show
};

async function create(req,res) {
  const wish = new Wish(req.body);
  await wish.save();
  console.log(wish);
  res.json(wish);
}

async function deleteWish(req,res) {
   await Wish.findByIdAndDelete(req.params.id);
  //  await Wish.deleteOne(req.body._id);
  // res.json(wish);
  // console.log(Wish.find({}));
  res.json({message: "Wish deleted"});
}


async function updateWish(req,res) {
  const updatedWish = await Wish.findByIdAndUpdate(req.body, req.body.id);
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