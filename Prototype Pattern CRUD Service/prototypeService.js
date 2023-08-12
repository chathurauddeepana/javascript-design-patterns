const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

// Prototype
function CRUDPrototype() {
    this.create = async function(item) {
        const common = new Common(item);
        await common.save();
        return common;
    };

    this.read = async function(id) {
        return await Common.findById(id);
    };

    this.update = async function(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    };

    this.delete = async function(id) {
        return await Common.findByIdAndDelete(id);
    };
}

// Constructor function that clones the prototype
function Constructor() {
    // Establish a MongoDB connection upon instantiation
    dbConnection;
}

Constructor.prototype = new CRUDPrototype();

module.exports = Constructor;
