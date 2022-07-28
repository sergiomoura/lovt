const express = require("express");

// Criar o roteador
const router = express.Router();

// Criar as rotas nele...
router.get(
    '/',
    (req, res) => {
        
        let produto = {
            nome:"Calça Jeans",
            preco: "190"
        }

        res.render("index.ejs",{produto, logado:true})
    }
)

// Exportar roteador
module.exports = router;