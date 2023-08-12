const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

function Constructor() {
    // Establish a MongoDB connection once this Constructor is instantiated
    dbConnection;

    // Create operation
    this.create = async function(item) {
        const common = new Common(item);
        await common.save();
        return common;
    };

    // Read operation
    this.read = async function(id) {
        return await Common.findById(id);
    };

    // Update operation
    this.update = async function(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    };

    // Delete operation
    this.delete = async function(id) {
        return await Common.findByIdAndDelete(id);
    };
}

module.exports = Constructor;
