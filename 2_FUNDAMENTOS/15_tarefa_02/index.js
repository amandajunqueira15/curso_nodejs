import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      name: 'nomeUsuario',
      message: 'Qual o nome do usuário?',
    },
    {
      name: 'idadeUsuario',
      message: 'Qual a idade do usuário?',
    },
  ])
  .then((perguntas) => {
    if (!perguntas.nome || !perguntas.idade) {
      throw new Error('O nome e a idade são obrigatórios!');
    }

    const nome = perguntas.nomeUsuario;
    const idade = perguntas.idadeUsuario;

    console.log(chalk.bgYellow.black(`A idade de ${nome} é ${idade} anos`));
  })
  .catch((erro) => console.log(chalk.bgRedBright.black(erro)));
