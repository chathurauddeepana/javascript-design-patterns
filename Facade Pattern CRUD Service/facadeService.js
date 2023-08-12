const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

// Establish a MongoDB connection
dbConnection;

class CRUDFacade {
    async create(item) {
        const common = new Common(item);
        await common.save();
        return common;
    }

    async read(id) {
        return await Common.findById(id);
    }

    async update(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    }

    async delete(id) {
        return await Common.findByIdAndDelete(id);
    }
}

// Constructor (Facade)
function Constructor() {
    const facade = new CRUDFacade();

    this.create = facade.create.bind(facade);
    this.read = facade.read.bind(facade);
    this.update = facade.update.bind(facade);
    this.delete = facade.delete.bind(facade);
}

module.exports = Constructor;
