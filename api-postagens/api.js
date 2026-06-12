import express from "express";
import cors from "cors";
import { conectarBanco } from "./bd/conexao.js";
import { definirRotasPostagens } from "./rotas/postagens.js";

const app = express();
// para podermos receber uma nova postagem com dados em JSON
app.use(express.json());
app.use(cors());

// exportamos o objeto "app" para usá-lo na função que cria as rotas
export { app };

// criamos uma rota default para avisar o usuário do endpoint da API
app.get("/", (requisicao, resposta) => {
    res.send("Acesse a API em /api/postagens");
});

// criamos as rotas para /api/postagens
definirRotasPostagens(app);

// como a conexão ao banco (e a inicialização da API) podem ter problemas, 
// colocamos em um bloco try...catch 
try {
    // tentamos conectar no banco
    await conectarBanco();
    const PORTA_API = 3000;
    // inicializamos a API
    app.listen(PORTA_API);
    console.log(`Aguardando conexões na porta ${PORTA_API}`);   
} catch (erro) {
    console.log(`Ocorreu um erro: ${erro}`);
}
