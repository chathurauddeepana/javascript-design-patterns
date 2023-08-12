const dbConnection = require('../databaseConnection');
const OldCRUDService = require('./oldCRUDService');

class Adapter {

    constructor() {
        this.oldCRUDService = new OldCRUDService();
        dbConnection;
    }

    create(item) {
        return this.oldCRUDService.insert(item);
    }

    read(id) {
        return this.oldCRUDService.fetch(id);
    }

    update(id, updatedItem) {
        return this.oldCRUDService.modify(id, updatedItem);
    }

    delete(id) {
        return this.oldCRUDService.remove(id);
    }
}

module.exports = Adapter;
