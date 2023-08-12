const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');
const attributeFactory = require('./commonAttributes');

// Establish a MongoDB connection
dbConnection;


class FlyweightCRUDService {
    create(item, sharedData) {
        const attribute = attributeFactory.getAttribute(sharedData);
        const common = new Common({
            name: item.name,
            data: item.data,
            sharedAttributes: attribute.sharedData  // Assigning the intrinsic shared data
        });
        return common.save();
    }
}

module.exports = FlyweightCRUDService;
