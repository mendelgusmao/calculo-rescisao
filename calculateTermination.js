const { fillPrimaryForm, fillSecondaryForm } = require('./fillForm');
const parseTerminationPage = require('./parseTerminationPage');

const source = 'https://calculoexato.com.br/parprima.aspx?codMenu=TrabRescisao';

const calculateTermination = async (page, args) => {
  await Promise.all([
    page.goto(source),
    page.waitForNavigation(),
  ]);

  const proceed = () => Promise.all([
    page.click('#btnContinuar'),
    page.waitForNavigation(),
  ]);

  await fillPrimaryForm(page, args);
  await proceed();
  await fillSecondaryForm(page, args);
  await proceed();

  const terminationData = await parseTerminationPage(page);

  console.log(terminationData);
};

module.exports = calculateTermination;
