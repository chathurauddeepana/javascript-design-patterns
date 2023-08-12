class CRUDService {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    create(item) {
        return this.strategy.create(item);
    }

    read(id) {
        return this.strategy.read(id);
    }

    update(id, updatedItem) {
        return this.strategy.update(id, updatedItem);
    }

    delete(id) {
        return this.strategy.delete(id);
    }
}

module.exports = CRUDService;
