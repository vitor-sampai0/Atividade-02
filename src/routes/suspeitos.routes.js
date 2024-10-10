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


export default suspeitosRoutes;