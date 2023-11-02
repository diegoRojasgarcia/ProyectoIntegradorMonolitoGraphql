interface ingredients {
  id: number;
}

interface SeedProduct {
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
  rank: number;
  state: string;
  ingredients: ingredients[];
}

interface SeedData {
  products: SeedProduct[];
}

export const initialDataProduct: SeedData = {
  products: [
    {
      name: 'Hamburguesa Clásica',
      image: "../public/images/hamburguesaclasica.png",
      description:
        'Una jugosa hamburguesa de carne de res con lechuga, tomate, cebolla y salsa especial.',
      price: 6300,
      stock: 50,
      rank: 4.5,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 9,
        },
      ],
    },
    {
      name: 'Hamburguesa de Pavo y Queso',
      image: "../public/images/hamburguesapavoqueso.png",
      description: 'Hamburguesa de pechuga de pavo con queso cheddar, lechuga y tomate.',
      price: 5900,
      stock: 45,
      rank: 4.3,
      state: 'disponible',
      ingredients: [
        {
          id: 11,
        },
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 1,
        },

      ],
    },
    {
      name: 'Hamburguesa con Champiñones',
      image: "../public/images/hamburguesachampi.png",
      description: 'Hamburguesa con champiñones salteados, queso cheddar, lechuga y cebolla caramelizada.',
      price: 6600,
      stock: 38,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 12,
        },
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 8,
        },
    
      ],
    },
    {
      name: 'Hamburguesa BBQ',
      image: "../public/images/hamburguesaBBQ.png",
      description: 'Hamburguesa de carne de res con tocino ahumado, queso cheddar y salsa barbacoa.',
      price: 6800,
      stock: 42,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 10,
        },
        {
          id: 1,
        },
        {
          id: 7,
        },
      ],
    },
    {
      name: 'Hamburguesa Deluxe',
      
      image: "../public/images/hamburguesadelux.png",
      description: 'Hamburguesa de carne de res con huevo frito, queso cheddar, lechuga y tomate.',
      price: 7200,
      stock: 36,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 9,
        },

      ],
    },
    {
      name: 'Hamburguesa de Pollo BBQ',
      
      image: "../public/images/hamburguesapolloBBQ.png",
      description: 'Hamburguesa de pechuga de pollo con tocino ahumado, queso cheddar y salsa barbacoa.',
      price: 6400,
      stock: 47,
      rank: 4.4,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 10,
        },

      ],
    },
    {
      name: 'Hamburguesa Vegana',
      
      image: "../public/images/hamburguesavegana.png",
      description: 'Hamburguesa de vegetales con lechuga, tomate y cebolla.',
      price: 5500,
      stock: 50,
      rank: 4.0,
      state: 'disponible',
      ingredients: [
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
    {
      name: 'Hamburguesa de Tocino',
      image: "../public/images/hamburguesatocino.png",
      description: 'Hamburguesa de carne de res con doble tocino ahumado, queso cheddar, lechuga y tomate.',
      price: 7000,
      stock: 30,
      rank: 4.9,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 10,
        },

      ],
    },
    {
      name: 'Hamburguesa de Pollo Picante',
      image: "../public/images/hamburguesapollopicante.png",
      description: 'Hamburguesa de pechuga de pollo con queso cheddar picante, lechuga y tomate.',
      price: 6100,
      stock: 32,
      rank: 4.2,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 6,
        },

      ],
    },
    {
      name: 'Hamburguesa con Huevo',
      image: "../public/images/hamburguesahuevo.png",
      description: 'Hamburguesa de carne de res con huevo frito, queso cheddar, lechuga y tomate.',
      price: 6700,
      stock: 28,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 9,
        },
      ],
    },
    {
      name: 'Hamburguesa de Pollo con Champiñones',
      image: "../public/images/hamburguesapollochampi.png",
      description: 'Hamburguesa de pechuga de pollo con champiñones salteados, queso cheddar y lechuga.',
      price: 6900,
      stock: 35,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 6,
        },
        {
          id: 12,
        },
      ],
    },
    {
      name: 'Hamburguesa Doble Queso',
      image: "../public/images/hamburguesadoblequeso.png",
      description: 'Doble porción de queso cheddar con carne de res, lechuga y tomate.',
      price: 7500,
      stock: 25,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 4,
        },

      ],
    },
    {
      name: 'Hamburguesa Especial del Chef',
      image: "../public/images/hamburguesachef.png",
      description: 'Una creación única del chef con carne de res, queso cheddar, tocino, huevo frito y más.',
      price: 8000,
      stock: 20,
      rank: 4.9,
      state: 'disponible',
      ingredients: [
        {
          id: 1,
        },
        {
          id: 8,
        },
        {
          id: 9,
        },
        {
          id: 10,
        },

      ],
    },
  ],
};
