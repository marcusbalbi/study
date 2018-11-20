var ID_FUNCIONARIO_INC = 3;
var funcionarios = [
	{id: 1, nome: 'Funcionário Exemplo 1'}, 
	{id: 2, nome: 'Funcionário Exemplo 2'}, 
	{id: 3, nome: 'Funcionário Exemplo 3'}
] 

exports.listaFuncionarios = function(req, res) {
	console.log('API: listaFuncionarios');
	res.json(funcionarios);
};

exports.obtemFuncionario = function(req, res) {
	console.log('API: obtemFuncionario');
	var idFuncionario = req.params.id;
	var funcionario;
	for(var i = 0; i < funcionarios.length; i++) {
		if(funcionarios[i].id == idFuncionario) {
			funcionario = funcionarios[i];
		}
	}
	res.json(funcionario);
};

exports.salvaFuncionario = function(req, res) {
	console.log('API: salvaFuncionario');
	var funcionario = req.body;
	if(funcionario.id) {
		funcionario = atualiza(funcionario);
	} else {
		funcionario = adiciona(funcionario);

	}
	res.json(funcionario);
};

exports.removeFuncionario = function(req, res) {
	console.log('API: removeFuncionario')
	var idFuncionario = req.params.id;

	for(var i = 0; i < funcionarios.length; i++) {
		if(funcionarios[i].id == idFuncionario) {
			funcionarios.splice(i, 1);
			break;
		}
	}
	res.send(204);
};

function adiciona(funcionario) {
	ID_FUNCIONARIO_INC++;
	funcionario.id = ID_FUNCIONARIO_INC;
	funcionarios.push(funcionario);
	return funcionario;
}

function atualiza(funcionario) {
	for(var i = 0; i < funcionarios.length; i++) {
		if(funcionarios[i].id == funcionario.id) {
			funcionarios[i] = funcionario;
			break;
		}
	}
	return funcionarios[i];
}

