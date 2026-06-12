import mongoose, { Schema } from "mongoose";

const postagemSchema = new Schema({
    titulo: String,
    conteudo: String,
    autor: String,
    curtidas: {
        type: Number,
        default: 0
    },
    hashtags: [ String ],
    data: {
        type: Date,
        default: Date.now
    }
});

export const Postagem = mongoose.model("Postagem", postagemSchema, "postagens");