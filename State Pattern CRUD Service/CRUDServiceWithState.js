class CRUDServiceWithState {
    constructor(initialState) {
        this.state = initialState;
    }

    setState(newState) {
        this.state = newState;
    }

    create(item) {
        return this.state.create(item);
    }

    read(id) {
        return this.state.read(id);
    }

    update(id, updatedItem) {
        return this.state.update(id, updatedItem);
    }

    delete(id) {
        return this.state.delete(id);
    }
}

module.exports = CRUDServiceWithState;
