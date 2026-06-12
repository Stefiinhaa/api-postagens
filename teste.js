import { conectarBanco } from "./bd/conexao.js";
import { Postagem } from "./model/postagem.js";

async function testarConexao() {
    await conectarBanco();

    const novaPostagem = new Postagem({
        titulo: "Primeira Postagem!",
        conteudo: "Este é o conteúdo da primeira postagem neste blog.",
        autor: "Prof. Querino",
        hashtags: ["#postagem", "#nova", "#blog"]
    });

    const postagem = await novaPostagem.save();
    if (postagem) {
        console.log("Postagem gravada com sucesso no MongoDB");
    } else {
        console.log("FALHA NA CRIAÇÃO DA POSTAGEM");
    }
}
testarConexao();