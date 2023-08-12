const { Mediator, Constructor } = require('./mediatorService');

const mediator = new Mediator();

const service = new Constructor();
mediator.registerComponent(service);

async function operations() {
    const item1 = await mediator.execute('constructor', 'create', { name: "Item 1" });

    const retrievedItem = await mediator.execute('constructor', 'read', item1.id);

    const updatedItem = await mediator.execute('constructor', 'update', item1.id, { name: "Updated Item 1" });

    await mediator.execute('constructor', 'delete', item1.id);
}

operations();
