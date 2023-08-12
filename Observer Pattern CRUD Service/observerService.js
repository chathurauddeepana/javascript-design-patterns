const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

function Subject() {
    this.observers = [];

    this.add = function(observer) {
        this.observers.push(observer);
    };

    this.remove = function(observerToRemove) {
        this.observers = this.observers.filter(observer => observer !== observerToRemove);
    };

    this.notify = function(message) {
        this.observers.forEach(observer => observer.update(message));
    };
}

function Constructor() {
    Subject.call(this);

    dbConnection;

    this.create = async function(item) {
        const common = new Common(item);
        await common.save();
        this.notify(`Item with ID ${common._id} has been created`);
        return common;
    };

    this.read = async function(id) {
        return await Common.findById(id);
    };

    this.update = async function(id, updatedItem) {
        const updated = await Common.findByIdAndUpdate(id, updatedItem, { new: true });
        this.notify(`Item with ID ${id} has been updated`);
        return updated;
    };

    this.delete = async function(id) {
        const removed = await Common.findByIdAndDelete(id);
        this.notify(`Item with ID ${id} has been deleted`);
        return removed;
    };
}

module.exports = Constructor;
