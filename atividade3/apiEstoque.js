const express = require('express');
const app = express();

const PORT = 8080;


let estoque = {};


// Adicionar os produtos:

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    if (estoque[id]) {
        return res.status(400).json({ erro: "Produto já existe" });
    }

    estoque[id] = {
        nome: nome,
        quantidade: parseInt(qtd)
    };

    res.json({ mensagem: "Produto adicionado", produto: estoque[id] });
});


// Listar os produtos:

app.get('/listar', (req, res) => {
    res.json(estoque);
});


// Remover os produtos:

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    if (!estoque[id]) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    delete estoque[id];
    res.json({ mensagem: "Produto removido" });
});


// Editar as quantidades:

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;

    if (!estoque[id]) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    estoque[id].quantidade = parseInt(qtd);
    res.json({ mensagem: "Quantidade atualizada", produto: estoque[id] });
});




app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});