const parseTerminationPage = (page) => page.evaluate(
  () => document.querySelector('#divCE').innerText.replace(/\n{3,}/g, '\n\n'),
);

module.exports = parseTerminationPage;
