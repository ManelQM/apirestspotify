const {Schema, model} = require("mongoose"); 


const SongSchema = Schema({
    album: {
        type: Schema.ObjectId,
        ref: "Album", //GUARDAMOS ID DEL MODELO ALBUM
    },

    track: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    file: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = model("Song", SongSchema, "Songs");