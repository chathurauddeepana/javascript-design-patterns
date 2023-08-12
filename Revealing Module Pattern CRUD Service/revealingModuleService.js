const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

const RevealingModuleService = (function() {
    // Establish a MongoDB connection immediately upon module creation
    dbConnection;

    // Constructor
    function Constructor() {}

    // Private methods

    async function create(item) {
        const common = new Common(item);
        await common.save();
        return common;
    }

    async function read(id) {
        return await Common.findById(id);
    }

    async function update(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    }

    async function deleteItem(id) {
        return await Common.findByIdAndDelete(id);
    }

    // Public API: Expose methods by returning them
    return {
        Constructor: Constructor,
        create: create,
        read: read,
        update: update,
        delete: deleteItem
    };
})();

module.exports = RevealingModuleService;
