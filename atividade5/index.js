const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.html");
});


app.post("/agendamento", (req, res) => {
    const dados = req.body;

    const {
        nome,
        sobrenome,
        cpf,
        data_nascimento,
        telefone,
        cep,
        endereco,
        clinica,
        especialidade,
        data,
        hora
    } = dados;

    let erros = [];

    
    if (!nome || !sobrenome || !cpf || !data_nascimento || !telefone || !cep || !endereco || !clinica || !especialidade || !data || !hora) {
        erros.push("Preencha todos os campos obrigatórios.");
    }

    
    const hoje = new Date();
    const dataAgendamento = new Date(data + "T" + hora);

    if (dataAgendamento <= hoje) {
        erros.push("A data do agendamento deve ser futura.");
    }

    if (erros.length > 0) {
        return res.render("erro.html", { erros });
    }

    res.render("agendamento.html", { dados_agendamento: dados });
});

app.listen(PORT, () => {
    console.log("Rodando em http://localhost:" + PORT);
});