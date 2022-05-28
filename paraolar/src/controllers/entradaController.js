const dbConfig = require("../models/dbConfig");

async function dbConnect() {
    return await dbConfig.bancoDeDados("assistir");
};

const getMessage = async (request, response) => {
    try {
        let mensagem = await dbConnect();
        response.status(200).send(mensagem);

    } catch (error) {
        response.status(500).send({ error: "Não foi possível exibir mensagem de entrada. Por favor, tente novamente mais tarde" });

    }

};

module.exports = {
    getMessage
};
