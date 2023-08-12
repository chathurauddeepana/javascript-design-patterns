const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

// Establish a MongoDB connection
dbConnection;

// Production State
class ProductionState {
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

// Testing State
class TestingState {
    create(item) {
        console.log(`Testing create: ${JSON.stringify(item)}`);
        return Promise.resolve(item);
    }

    read(id) {
        console.log(`Testing read for ID: ${id}`);
        return Promise.resolve({ _id: id, name: "Test Item" });
    }

    update(id, updatedItem) {
        console.log(`Testing update for ID: ${id} with data: ${JSON.stringify(updatedItem)}`);
        return Promise.resolve(updatedItem);
    }

    delete(id) {
        console.log(`Testing delete for ID: ${id}`);
        return Promise.resolve({ _id: id });
    }
}

module.exports = { ProductionState, TestingState };
