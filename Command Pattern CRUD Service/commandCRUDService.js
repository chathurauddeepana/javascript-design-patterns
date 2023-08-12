const dbConnection = require('../databaseConnection');
const { CreateCommand, ReadCommand, UpdateCommand, DeleteCommand } = require('./commands');


class CommandCRUDService {
    constructor() {
        dbConnection;
    }

    setCommand(command) {
        this.command = command;
    }

    executeCommand() {
        return this.command.execute();
    }
}

module.exports = CommandCRUDService;
