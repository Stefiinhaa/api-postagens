import mongoose from "mongoose";

export function conectarBanco() {
    const ENDERECO_BANCO = "mongodb://localhost:27017/blog";

    mongoose.connection.on("open", () => {
        console.log("Conectado com sucesso ao MongoDB")
    });

    const conexao = mongoose.connect(ENDERECO_BANCO);
    return conexao;
}
