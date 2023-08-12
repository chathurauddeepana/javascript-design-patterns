const Constructor = require('./prototypeService');

const service = new Constructor();

async function operations() {
    const item1 = await service.create({ name: "Item 1" });

    const retrievedItem = await service.read(item1.id);

    const updatedItem = await service.update(item1.id, { name: "Updated Item 1" });

    await service.delete(item1.id);
}

operations();
