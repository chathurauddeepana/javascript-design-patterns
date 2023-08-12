const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

dbConnection;
// Concrete Factories
class CreateFactory {
    create(item) {
        const common = new Common(item);
        return common.save();
    }
}

class ReadFactory {
    create(id) {
        return Common.findById(id);
    }
}

class UpdateFactory {
    create(id, updatedItem) {
        return Common.findByIdAndUpdate(id, updatedItem, { new: true });
    }
}

class DeleteFactory {
    create(id) {
        return Common.findByIdAndDelete(id);
    }
}

// Main Factory Constructor
function Constructor(type) {
    switch (type) {
        case 'create':
            return new CreateFactory();
        case 'read':
            return new ReadFactory();
        case 'update':
            return new UpdateFactory();
        case 'delete':
            return new DeleteFactory();
        default:
            throw new Error('Unknown type');
    }
}


module.exports = Constructor;
