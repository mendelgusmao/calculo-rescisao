const parseDate = (date) => {
  const [day, month, year] = date.split('/');

  return {
    day: day.padStart(2, '0'),
    month: month.padStart(2, '0'),
    year,
  };
};

const nowDate = () => {
  const date = new Date();

  return [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ].join('/');
};

module.exports = { parseDate, nowDate };
