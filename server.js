// Servidor Express - Projeto #21: Loja de Quadrinhos & Colecionáveis
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3021;

app.get('/api/geekstore/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 21,
        sistema: "Loja de Quadrinhos & Colecionáveis",
        categoria: "Cultura Pop & Varejo",
        tabela_conectada: process.env.TABELA_ALVO || "catalogo_hqs",
        parametro_ambiente: process.env.SECAO_RARIDADES || "COMIC_VAULT_21",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #21] Loja de Quadrinhos & Colecionáveis rodando em http://localhost:${PORT}/api/geekstore/status`);
});