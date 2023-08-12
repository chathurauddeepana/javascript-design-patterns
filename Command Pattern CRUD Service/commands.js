const Common = require('./commonModel');

// Command interface
class Command {
    execute() {}
}

// Concrete Command for Create
class CreateCommand extends Command {
    constructor(data) {
        super();
        this.data = data;
    }

    execute() {
        const common = new Common(this.data);
        return common.save();
    }
}

// Concrete Command for Read
class ReadCommand extends Command {
    constructor(id) {
        super();
        this.id = id;
    }

    execute() {
        return Common.findById(this.id);
    }
}

// Concrete Command for Update
class UpdateCommand extends Command {
    constructor(id, updatedData) {
        super();
        this.id = id;
        this.updatedData = updatedData;
    }

    execute() {
        return Common.findByIdAndUpdate(this.id, this.updatedData, { new: true });
    }
}

// Concrete Command for Delete
class DeleteCommand extends Command {
    constructor(id) {
        super();
        this.id = id;
    }

    execute() {
        return Common.findByIdAndDelete(this.id);
    }
}

module.exports = { CreateCommand, ReadCommand, UpdateCommand, DeleteCommand };
