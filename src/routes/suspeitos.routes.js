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

export default suspeitosRoutes;