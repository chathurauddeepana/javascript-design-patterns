const { MongoDBStrategy, MockStrategy } = require('./strategies');
const CRUDService = require('./CRUDService');

const service = new CRUDService(new MongoDBStrategy());  // Using MongoDB for persistence

async function operations() {
    const item1 = await service.create({ name: "Item 1" });

    const retrievedItem = await service.read(item1._id);

    const updatedItem = await service.update(item1._id, { name: "Updated Item 1" });

    await service.delete(item1._id);

    // Switching strategy to Mock
    console.log("\nSwitching to Mock Strategy:");
    service.setStrategy(new MockStrategy());

    await service.create({ name: "Mock Item" });
    await service.read("mock-id-1234");
    await service.update("mock-id-1234", { name: "Updated Mock Item" });
    await service.delete("mock-id-1234");
}

operations();
