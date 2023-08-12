const { CreateCommand, ReadCommand, UpdateCommand, DeleteCommand } = require('./commands');
const CommandCRUDService = require('./commandCRUDService');

const service = new CommandCRUDService();

async function operations() {
    const createCommand = new CreateCommand({ name: "Item 1", data: "Some data" });
    service.setCommand(createCommand);
    const item1 = await service.executeCommand();

    const readCommand = new ReadCommand(item1._id);
    service.setCommand(readCommand);
    const retrievedItem = await service.executeCommand();

    const updateCommand = new UpdateCommand(item1._id, { name: "Updated Item 1" });
    service.setCommand(updateCommand);
    const updatedItem = await service.executeCommand();

    const deleteCommand = new DeleteCommand(item1._id);
    service.setCommand(deleteCommand);
    await service.executeCommand();
}

operations();
