const {Schema, model} = require("mongoose"); 

const AlbumSchema = Schema({

    artist: {
        type: Schema.ObjectId, // ALMACENAMOS EL OBJECT ID DEL MODELO ARTIST
        ref: "Artist"
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: "default.png"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
})

module.exports = model("Album", AlbumSchema, "Albums"); 
