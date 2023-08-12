const dbConnection = require('../databaseConnection');
const Common = require('./commonModel');

function Mediator() {
    this.components = {};

    this.registerComponent = function(component) {
        this.components[component.componentName] = component;
        component.mediator = this;
    };

    this.execute = function(componentName, operation, ...args) {
        if (this.components[componentName]) {
            return this.components[componentName][operation](...args);
        }
    };
}

function Constructor() {
    this.componentName = 'constructor';
    this.mediator = null;

    dbConnection;

    this.create = async function(item) {
        const common = new Common(item);
        await common.save();
        return common;
    };

    this.read = async function(id) {
        return await Common.findById(id);
    };

    this.update = async function(id, updatedItem) {
        return await Common.findByIdAndUpdate(id, updatedItem, { new: true });
    };

    this.delete = async function(id) {
        return await Common.findByIdAndDelete(id);
    };
}

module.exports = { Mediator, Constructor };
