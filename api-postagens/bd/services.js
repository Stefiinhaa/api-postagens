// services.js
// contém as funções CRUD para o banco de dados MongoDB
import { Postagem } from "../model/postagem.js";

// C: Create (função para criar/incluir uma postagem no MongoDB)
export async function incluirPostagem({ titulo, conteudo, 
    autor, curtidas, hashtags, data }) {
        const novaPostagem = new Postagem({ titulo, conteudo, 
            autor, curtidas, hashtags, data });
        return await novaPostagem.save();
}

// R: Read (função para ler/consultar todas as postagens no MongoDB)
export async function consultarPostagens() {
    // obtém todas as postagens ordenadas por data decrescente 
    // (da mais nova a mais antiga)
    return await Postagem.find({}).sort({ "data" : "descending" });
}

// U: Update (função para alterar os dados de uma postagem específica)
export async function alterarPostagem(postagemId, { titulo, conteudo, 
        autor, curtidas, hashtags, data }) {
    return await Postagem.findOneAndUpdate({ _id: postagemId },
        { $set: { titulo, conteudo, autor, curtidas, hashtags, data} },
        { new: true }
    );
}

// D: Delete (função para excluir uma postagem específica)
export async function excluirPostagem(postagemId) {
    return await Postagem.deleteOne({ _id: postagemId });
}
