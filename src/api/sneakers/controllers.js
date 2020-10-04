import data from '../../database';
import { isEmpty } from '../../helpers';

export const getAll = (req, res) => {
  const { search, page = 1, limit = 10 } = req.query;
  /**
   * to create a copy of
   * array prior to sorting
   * and slicing
   */
  let sortedData = [...data.results].sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  if (!isEmpty(search)) {
    sortedData = sortedData.filter((item) =>
      `${item.brand_name} ${item.model} ${item.name} ${item.nickname} ${item.designer}`
        .toLocaleLowerCase()
        .split(' ')
        .includes(search.trim()?.toLocaleLowerCase())
    );
  }
  const sneakers = [...sortedData].slice((page - 1) * limit, limit * page);
  return res.json({ data: { count: sortedData.length, sneakers } });
};

export const getOne = (req, res) => {
  const { id } = req.params;
  const sneaker = data.results.find((item) => item.id == id);
  if (!sneaker) {
    return res.status(404).json({ error: 'Record not found' });
  }
  return res.json({ sneaker });
};
