const Common = require('./commonModel');

// Abstract Handler
class Handler {
    setNextHandler(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

// Concrete Handler: Validate Item Name
class ValidateItemName extends Handler {
    handle(request) {
        if (!request.name) {
            throw new Error("Item name is required.");
        }
        return super.handle(request);
    }
}

// Concrete Handler: Check If Item Exists
class CheckIfItemExists extends Handler {
    async handle(request) {
        const item = await Common.findOne({ name: request.name });
        if (item) {
            throw new Error("Item with this name already exists.");
        }
        return super.handle(request);
    }
}

// Concrete Handler: Create Item
class CreateItem extends Handler {
    handle(request) {
        const common = new Common(request);
        return common.save();
    }
}

module.exports = { ValidateItemName, CheckIfItemExists, CreateItem };
