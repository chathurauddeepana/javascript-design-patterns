class CommonAttribute {
    constructor(data) {
        this.sharedData = data;  // This represents the shared intrinsic data
    }
}

const attributeFactory = (() => {
    const attributeCache = {};

    return {
        getAttribute: (data) => {
            const key = JSON.stringify(data);

            if (!attributeCache[key]) {
                attributeCache[key] = new CommonAttribute(data);
            }

            return attributeCache[key];
        }
    };
})();

module.exports = attributeFactory;
