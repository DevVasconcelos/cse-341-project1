const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  console.log("Getting all contacts");
  const result = await mongodb.getDatabase().db().collection("Contacts").find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
  });
};

const getSingle = async (req, res) => {
  console.log("Getting single contact");
  const contactId = req.params.id;
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("Contacts")
    .find({ _id: new ObjectId(contactId) });
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts[0]);
  });
};

module.exports = {
  getAll,
  getSingle,
};
