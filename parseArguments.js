const { ArgumentParser } = require('argparse');
const reasons = require('./reasons');
const earlyWarnings = require('./earlyWarning');
const { nowDate } = require('./utils');

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Cálculo de Rescisão',
  epilog: [
    'Motivo da rescisão:',
    ...reasons.slice(1).map(
      (r, i) => [i + 1, r].join(' - '),
    ),
  ].join(' - '),
});

const specs = [
  [
    ['-i', '--inicio'],
    {
      help: 'Data do início da relação de trabalho',
      dest: 'start',
      defaultValue: nowDate(),
    },
  ],
  [
    ['-f', '--final'],
    {
      help: 'Data do final da relação de trabalho',
      dest: 'end',
      defaultValue: nowDate(),
    },
  ],
  [
    ['-m', '--motivo'],
    {
      help: 'Motivo da rescisão',
      choices: ['1', '2', '3', '4', '5', '6', '7'],
      dest: 'reason',
      defaultValue: '2',
    },
  ],
  [
    ['-s', '--salario'],
    {
      help: 'Valor do último salário',
      dest: 'salary',
    },
  ],
  [
    ['-a', '--aviso-previo'],
    {
      help: 'O aviso prévio foi trabalhado ou indenizado?',
      choices: Object.keys(earlyWarnings),
      dest: 'earlyWarning',
      defaultValue: 'i',
    },
  ],
  [
    ['-F', '--filhos'],
    {
      help: 'Número de filhos',
      dest: 'children',
      defaultValue: '0',
    },
  ],
];

const parseArguments = () => {
  specs.forEach(
    (a) => parser.addArgument(...a),
  );

  return parser.parseArgs();
};

module.exports = parseArguments;
