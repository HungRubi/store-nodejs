const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Items = new Schema(
    {
        name: { type: String, maxLength: 255 },
        price: { type: String, maxLength: 255 },
        img: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        videoID: { type: String },
        slug: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Items', Items);
