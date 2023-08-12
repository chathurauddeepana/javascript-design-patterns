const singletonService = require('./singletonService');

async function operations() {
    const item1 = await singletonService.create({ name: "Item 1" });
    console.log(item1);  // Outputs the created item with its ID and name

    const retrievedItem = await singletonService.read(item1.id);
    console.log(retrievedItem);  // Outputs the retrieved item

    const updatedItem = await singletonService.update(item1.id, { name: "Updated Item 1" });
    console.log(updatedItem);  // Outputs the updated item

    await singletonService.delete(item1.id);
    const deletedItem = await singletonService.read(item1.id);
    console.log(deletedItem);  // Outputs null since the item has been deleted
}

operations();
