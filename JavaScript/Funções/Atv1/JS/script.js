const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
  {
		nome: 'Henrique',
		nota: 10,
		turma: '2C',
	},
  {
		nome: 'Caio',
		nota: 7,
		turma: '2C',
	},
  {
		nome: 'Kleber',
		nota: 8,
		turma: '2C',
	},
  {
		nome: 'Matheus',
		nota: 6,
		turma: '2C',
	},
  {
		nome: 'Jonathan',
		nota: 9,
		turma: '2C',
	},
];

function alunosAprov(alunos, media){
  let aprovados = [];

  for (let i=0; i<alunos.length; i++){
    let {nota, nome} = alunos[i];

    if(nota >= media){
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprov(alunos, 7));