import { Router } from "express";

const suspeitosRoutes = Router();

// Array com os suspeitos ja cadastrados 

let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000),
        nome: "João",
        profissao: "Programador",
        envolvimentoApostas: "sim",
        nivelSuspeita: "Médio",
    },
    {
        id: Math.floor(Math.random() * 1000),
        nome: "vitor",
        profissao: "Adiministrador",
        envolvimentoApostas: "não",
        nivelSuspeita: "Baixo",
    },
    {
        id: Math.floor(Math.random() * 1000),
        nome: "Felipe",
        profissao: "gogo😗",
        envolvimentoApostas: "sim",
        nivelSuspeita: "Alto",
    },
];

// Rota para buscar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos);
});
//rota para achar o suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((suspect) => suspect.id == id)

    if (!suspeito) {
        return res.status(404).send({
            message: "Suspeito não encontrado"
        })
    }

    return res.status(200).send({
        message: "Suspeito encontrado", suspeito,
    })
})
// Rota para criar um suspeito
suspeitosRoutes.post("/", (req, res) => {

    const {
        nome,
        profissao,
        envolvimentoApostas,
        nivelSuspeita
    } = req.body;

    //validação de nome
    if (!nome) {
        return res.status(400).send({ message: "Coloque um nome para o suspeito" })
    }

    //validaçao da profissão
    if (!profissao) {
        return res.status(400).send({ message: "Coloque uma profissão" })
    }

    //validação de envolvimento de aposta
    if (envolvimentoApostas == "") {
        return res.status(400).send({ message: "preencha o campo" })
    }
    // validação de nivel de suspeita
    if (nivelSuspeita == "") {
        return res.status(400).send({ message: "Coloque o nivel de suspeita" })
    }


    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000),
        nome,
        profissao,
        envolvimentoApostas,
        nivelSuspeita
    }
    suspeitos.push(novoSuspeito)
    return res.status(201).send("Suspeito criado com sucesso")
});


// Rota para deletar um suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((suspect) => suspect.id == id);

    if (!suspeito) {
        return res.status(404).send({
            message: "suspeito não encontrado!",
        });
    }
    suspeitos = suspeitos.filter((suspect) => suspect.id != id)

    return res.status(200).send({
        message: "suspeito deletado!",
        suspeitos,
    });
});


// Rota para atualizar um suspeito
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((suspect) => suspect.id == id)

    if (!suspeito) {
        return res.status(404).send({
            message: "Suspeito não encontrado"
        })
    }

    const { nome, profissao, envolvimentoApostas, nivelSuspeita } = req.body;

    if (!nome) {
        return res.status(400).send({
            message: " nome do Suspeito por favor",
        })
    }

    if (!profissao) {
        return res.status(400).send({
            message: " profissao do Suspeito por favor",
        })
    }

    if (!envolvimentoApostas) {
        return res.status(400).send({
            message: "tem envolvimento em aposta?",
        })
    }

    if (!nivelSuspeita) {
        return res.status(400).send({
            message: " nivel do Suspeito por favor",
        })
    }


    suspeito.nome = nome;
    suspeito.profissao = profissao;
    suspeito.envolvimentoApostas = envolvimentoApostas;
    suspeito.nivelSuspeita = nivelSuspeita;

    return res.status(200).send({
        message: "suspeito/a atualizado/a",
        suspeito,
    })
});
export default suspeitosRoutes;