// Métodos HTTP para o recurso/rota /api/postagens
import { incluirPostagem, consultarPostagens, excluirPostagem, alterarPostagem } 
    from "../bd/services.js";

export function definirRotasPostagens(app) {

    app.get("/api/postagens", async (requisicao, resposta) => {
        return resposta.json(await consultarPostagens());
    });

    app.post("/api/postagens", async (requisicao, resposta) => {
        try {
            const postagemIncluida = await incluirPostagem(requisicao.body);
            return resposta.status(201).json(postagemIncluida);
        } catch (erro) {
            resposta.status(500).json({ "erro": erro })
        }
    });

    app.patch("/api/postagens/:id", async (requisicao, resposta) => {
        try {
            const postagemAlterada = await alterarPostagem(
                requisicao.params.id, requisicao.body);
            return resposta.json(postagemAlterada);
        } catch (erro) {
            return resposta.status(500).json({ "erro": erro });
        }
    });
    
    app.delete("/api/postagens/:id", async (requisicao, resposta) => {
        try {
            const { deletedCount } = await excluirPostagem(requisicao.params.id);
            if (deletedCount > 0) {
                return resposta.json({ "mensagem": "postagem excluída com sucesso" });
            } else {
                return resposta.json({ "mensagem" : "postagem inexistente" });
            }
        } catch (erro) {
            return resposta.status(500).json({ "erro" : erro });
        }
    });
    
}