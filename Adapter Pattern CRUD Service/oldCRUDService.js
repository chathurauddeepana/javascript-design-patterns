const Common = require('./commonModel');

class OldCRUDService {
    insert(data) {
        const common = new Common(data);
        return common.save();
    }

    fetch(id) {
        return Common.findById(id);
    }

    modify(id, newData) {
        return Common.findByIdAndUpdate(id, newData, { new: true });
    }

    remove(id) {
        return Common.findByIdAndDelete(id);
    }
}

module.exports = OldCRUDService;
