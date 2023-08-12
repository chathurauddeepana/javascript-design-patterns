const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

// Establish a MongoDB connection
dbConnection;

// MongoDB Strategy
class MongoDBStrategy {
    create(item) {
        const common = new Common(item);
        return common.save();
    }

    read(id) {
        return Common.findById(id);
    }

    update(id, updatedItem) {
        return Common.findByIdAndUpdate(id, updatedItem, { new: true });
    }

    delete(id) {
        return Common.findByIdAndDelete(id);
    }
}

// Mock Strategy for demonstration
class MockStrategy {
    create(item) {
        console.log(`Mock create: ${JSON.stringify(item)}`);
        return Promise.resolve(item);
    }

    read(id) {
        console.log(`Mock read for ID: ${id}`);
        return Promise.resolve({ _id: id, name: "Mock Item" });
    }

    update(id, updatedItem) {
        console.log(`Mock update for ID: ${id} with data: ${JSON.stringify(updatedItem)}`);
        return Promise.resolve(updatedItem);
    }

    delete(id) {
        console.log(`Mock delete for ID: ${id}`);
        return Promise.resolve({ _id: id });
    }
}

module.exports = { MongoDBStrategy, MockStrategy };
