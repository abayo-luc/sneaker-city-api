import data from './data.json';
const { status, results } = data;
const generateRandomNumber = ({ max = 10, min = 1 }) =>
  parseInt(Math.random() * (max - min) + min);

export default {
  status,
  results: results.map((item) => ({
    id: item.id,
    ...item,
    model: item.midsole,
    size_range: item.size_range.map((size) => ({
      size,
      quantity: generateRandomNumber({ max: 100, min: 1 }),
    })),
  })),
};
