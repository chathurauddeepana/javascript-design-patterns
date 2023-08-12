const Module = require('./revealingModuleService');

const service = new Module.Constructor();

async function operations() {
    const item1 = await Module.create({ name: "Item 1" });
    console.log(item1);  // Outputs the created item with its ID and name

    const retrievedItem = await Module.read(item1.id);
    console.log(retrievedItem);  // Outputs the retrieved item

    const updatedItem = await Module.update(item1.id, { name: "Updated Item 1" });
    console.log(updatedItem);  // Outputs the updated item

    await Module.delete(item1.id);
    const deletedItem = await Module.read(item1.id);
    console.log(deletedItem);  // Outputs null since the item has been deleted
}

operations();
