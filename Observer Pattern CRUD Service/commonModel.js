const mongoose = require('mongoose');

const commonSchema = new mongoose.Schema({
    name: String,
    data: mongoose.Schema.Types.Mixed
});

const Common = mongoose.model('observerPatternCollection', commonSchema);

module.exports = Common;
