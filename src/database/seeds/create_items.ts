import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: "Lampadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papeis e Papelão", image: "papeis-papelao.svg" },
    { title: "Residuos Eletronicos", image: "eletronicos.svg" },
    { title: "Residuos Organicos", image: "organicos.svg" },
    { title: "Oleo de Cozinha", image: "oleo.svg" }
  ]);
}

// {
//   "name": "Mercado varejo",
//   "email": "contato@varejo.com.br",
//   "whatsapp": "3242342342342",
//   "latitude": -46.81243213,
//   "longitude": -35.19238112,
//   "city": "Rio de Janeiro",
//   "uf": "RJ",
//   "items": [
//     1,
//     2,
//     6
//   ]
// }