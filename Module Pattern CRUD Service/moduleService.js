const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

const ModuleService = (function() {
    // Private
    dbConnection;

    // Constructor
    function Constructor() {}

    // Add methods to the Constructor prototype for CRUD operations

    // Create
    Constructor.prototype.create = async function(item) {
        const common = new Common(item);
        await common.save();
        return common;
    };

    // Read
    Constructor.prototype.read = async function(id) {
        return await Common.findById(id);
    };

    // Update
    Constructor.prototype.update = async function(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    };

    // Delete
    Constructor.prototype.delete = async function(id) {
        return await Common.findByIdAndDelete(id);
    };

    // Public API
    return {
        Constructor: Constructor
    };
})();

module.exports = ModuleService;
