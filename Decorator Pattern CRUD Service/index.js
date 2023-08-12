const CoreCRUDService = require('./coreCRUDService');
const LoggingDecorator = require('./loggingDecorator');

const coreService = new CoreCRUDService();
const service = new LoggingDecorator(coreService);

async function operations() {
    const item1 = await service.create({ name: "Item 1" });

    const retrievedItem = await service.read(item1._id);

    const updatedItem = await service.update(item1._id, { name: "Updated Item 1" });

    await service.delete(item1._id);
}

operations();
