const dbConnection = require('../databaseConnection');
const { ValidateItemName, CheckIfItemExists, CreateItem } = require('./chainHandlers');

class ChainCRUDService {
    constructor() {
        dbConnection;
        this.validateItemName = new ValidateItemName();
        this.checkIfItemExists = new CheckIfItemExists();
        this.createItem = new CreateItem();

        // Setting up the chain
        this.validateItemName
            .setNextHandler(this.checkIfItemExists)
            .setNextHandler(this.createItem);
    }

    create(request) {
        return this.validateItemName.handle(request);
    }
}

module.exports = ChainCRUDService;
