const ChainCRUDService = require('./chainCRUDService');

const service = new ChainCRUDService();

async function operations() {
    try {
        const item1 = await service.create({ name: "Item 1", data: "Some data" });
        console.log(`Item 1 created with ID: ${item1._id}`);
        
        // This will throw an error since an item with the name "Item 1" already exists
        const item2 = await service.create({ name: "Item 1", data: "Some other data" });
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

operations();
