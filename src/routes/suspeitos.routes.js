import { Router } from "express";

const suspeitosRoutes = Router();

// Array com os suspeitos ja cadastrados 

let suspeitos = [
    {
        id: 1,
        nome: "João",
        profissão: "Programador",
        envolvimentoApostas: "sim",
        nivelSuspeita: "Médio",
    },
    {
        id: 2,
        nome: "vitor",
        profissão: "Adiministrador",
        envolvimentoApostas: "não",
        nivelSuspeita: "Baixo",
    },
    {
        id: 3,
        nome: "Felipe",
        profissão: [
            "Programador",
            "Professor",
            "Tecnico",
            "gogo😗"
        ],
        envolvimentoApostas: "sim",
        nivelSuspeita: "Alto",
    },
];

// Rota para buscar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos);
});

suspeitosRoutes.get("/:id", )
export default suspeitosRoutes;