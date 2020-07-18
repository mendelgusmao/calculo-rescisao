const PromisePool = require('@supercharge/promise-pool');
const { parseDate } = require('./utils');
const reasons = require('./reasons');
const earlyWarnings = require('./earlyWarning');

const selectFormFields = async (page, bindings) => {
  const { results, errors } = await PromisePool
    .for(
      Object.entries(bindings),
    )
    .withConcurrency(1)
    .process(
      async ([id, value]) => page.select(id, value),
    );

  if (errors.length) {
    throw new Error(errors);
  }

  if (process.env.DEBUG && results.length) {
    console.debug(results);
  }
};

const fillPrimaryForm = async (page, args) => {
  const { start, end, reason } = args;
  const { day: startDay, month: startMonth, year: startYear } = parseDate(start);
  const { day: endDay, month: endMonth, year: endYear } = parseDate(end);

  const bindings = {
    '#comboDataAno1': startYear,
    '#comboDataMes1': startMonth,
    '#comboDataDia1': startDay,
    '#comboDataAno2': endYear,
    '#comboDataMes2': endMonth,
    '#comboDataDia2': endDay,
    '#comboEspecial3': reasons[reason],
  };

  await selectFormFields(page, bindings);
};

const fillSecondaryForm = async (page, args) => {
  const { salary, earlyWarning, children } = args;

  const bindings = {
    '#comboEspecial2': earlyWarnings[earlyWarning],
    '#comboEspecial3': children,
  };

  await page.$eval('#txt1', (el, value) => { el.value = value; }, salary);
  await selectFormFields(page, bindings);
};

module.exports = {
  fillPrimaryForm,
  fillSecondaryForm,
};
