const Constructor = require('./observerService');
const ConsoleLogger = require('./consoleLogger');  // Assuming you save the ConsoleLogger in a separate file

const service = new Constructor();

const logger = new ConsoleLogger();
service.add(logger);

async function operations() {
    const item1 = await service.create({ name: "Item 1" });
    // Outputs: ConsoleLogger: Item with ID <some-id> has been created

    const retrievedItem = await service.read(item1.id);

    const updatedItem = await service.update(item1.id, { name: "Updated Item 1" });
    // Outputs: ConsoleLogger: Item with ID <some-id> has been updated

    await service.delete(item1.id);
    // Outputs: ConsoleLogger: Item with ID <some-id> has been deleted
}

operations();
