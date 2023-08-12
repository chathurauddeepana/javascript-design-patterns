const Factory = require('./factoryService');

const createService = new Factory('create');
const readService = new Factory('read');
const updateService = new Factory('update');
const deleteService = new Factory('delete');

async function operations() {
    const item1 = await createService.create({ name: "Item 1" });

    const retrievedItem = await readService.create(item1._id);

    const updatedItem = await updateService.create(item1._id, { name: "Updated Item 1" });

    await deleteService.create(item1._id);
}

operations();
