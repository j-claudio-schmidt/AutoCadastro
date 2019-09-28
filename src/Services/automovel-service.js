const repository = require('../Repositories/automovel-repository');

exports.BuscarTodos = function() {
   return repository.BuscarTodos();
};

exports.BuscarPorPlaca = function(placa) {
    return repository.BuscarPorPlaca(placa);
 };

exports.Salvar = function(modelo) {
    const posicao = repository.Verificar(modelo);

    if(posicao === -1){
        repository.Adicionar(modelo);
    }else{
        repository.Alterar(posicao,modelo);
    }

    return posicao;
 };