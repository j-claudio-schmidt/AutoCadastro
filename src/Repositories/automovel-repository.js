
var automoveis = [];

exports.BuscarTodos = function() {
    return automoveis;
 };
 
 exports.BuscarPorPlaca = function(placa) {
     return automoveis.find(automovel => automovel.placa === placa);
  };
 
  exports.Verificar = function(modelo) {
    return automoveis.findIndex(automovel => automovel.placa === modelo.placa);
  };

 exports.Adicionar = function(modelo) {
    automoveis.push(modelo);
  };

  exports.Alterar = function(posicao, modelo) {
    automoveis[posicao] = modelo;
 };