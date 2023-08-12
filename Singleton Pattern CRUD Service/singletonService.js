const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

class SingletonService {
    constructor() {
        if (!SingletonService.instance) {
            // Establish MongoDB connection
            dbConnection;
            SingletonService.instance = this;
        }

        return SingletonService.instance;
    }

    // Create
    async create(item) {
        const common = new Common(item);
        await common.save();
        return common;
    }

    // Read
    async read(id) {
        return await Common.findById(id);
    }

    // Update
    async update(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    }

    // Delete
    async delete(id) {
        return await Common.findByIdAndDelete(id);
    }
}

const instance = new SingletonService();
Object.freeze(instance);

module.exports = instance;
