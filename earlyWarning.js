const earlyWarning = [
  'trabalhado',
  'indenizado',
].reduce(
  (e, i) => ({ ...e, [i[0]]: i }),
  {},
);

module.exports = earlyWarning;
