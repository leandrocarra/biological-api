import express from 'express';
import Knex from './database/connections';

const routes = express.Router();

routes.get('/', (req,res) => {
  return res.send('oi')
});

routes.get('/items', async (req, res) => {
  const items = await Knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  return res.json(serializedItems);
});

export default routes;