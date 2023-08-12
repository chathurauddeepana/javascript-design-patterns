const { ProductionState, TestingState } = require('./states');
const CRUDServiceWithState = require('./CRUDServiceWithState');

const service = new CRUDServiceWithState(new ProductionState());  // Setting to Production State

async function operations() {
    const item1 = await service.create({ name: "Item 1" });

    const retrievedItem = await service.read(item1._id);

    const updatedItem = await service.update(item1._id, { name: "Updated Item 1" });

    await service.delete(item1._id);

    // Switching state to Testing
    console.log("\nSwitching to Testing State:");
    service.setState(new TestingState());

    await service.create({ name: "Test Item" });
    await service.read("test-id-1234");
    await service.update("test-id-1234", { name: "Updated Test Item" });
    await service.delete("test-id-1234");
}

operations();
