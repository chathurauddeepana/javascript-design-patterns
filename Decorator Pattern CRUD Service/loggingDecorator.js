class LoggingDecorator {
    constructor(coreCRUDService) {
        this.coreCRUDService = coreCRUDService;
    }

    create(item) {
        console.log(`Creating item with name: ${item.name}`);
        return this.coreCRUDService.create(item);
    }

    read(id) {
        console.log(`Reading item with ID: ${id}`);
        return this.coreCRUDService.read(id);
    }

    update(id, updatedItem) {
        console.log(`Updating item with ID: ${id}`);
        return this.coreCRUDService.update(id, updatedItem);
    }

    delete(id) {
        console.log(`Deleting item with ID: ${id}`);
        return this.coreCRUDService.delete(id);
    }
}

module.exports = LoggingDecorator;
