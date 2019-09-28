const service = require('../Services/automovel-service');

exports.BuscarTodos = (req, res, next) => {
    res.status(200).send(JSON.stringify(service.BuscarTodos(), null, '\t\n'));   
};

exports.BuscarPorPlaca = (req, res, next) => {
    const result = service.BuscarPorPlaca(req.params.placa);
    const _res = result == undefined? 'Automovel não encontrado': JSON.stringify(result, null, '\t\n');
    res.status(200).send(_res);
};

exports.Salvar = (req, res, next) => {
    const result = service.Salvar(req.body);
    const acao = result === -1 ? 'Adicionado': 'alterado';   
    res.status(201).send(`Automovel ${acao} com sucesso`);
};
