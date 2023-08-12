const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

// Establish a MongoDB connection
dbConnection;

class CoreCRUDService {

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

module.exports = CoreCRUDService;
