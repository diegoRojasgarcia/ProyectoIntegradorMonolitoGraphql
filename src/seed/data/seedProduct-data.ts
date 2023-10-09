interface ingredients {
  id: number;
}

interface SeedProduct {
  name: string;
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
      description: 'Hamburguesa de carne de res con tocino ahumado, queso cheddar y salsa barbacoa.',
      price: 6800,
      stock: 42,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 0,
        },
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
      description: 'Hamburguesa de carne de res con huevo frito, queso cheddar, lechuga y tomate.',
      price: 7200,
      stock: 36,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 0,
        },
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
      description: 'Hamburguesa de carne de res con doble tocino ahumado, queso cheddar, lechuga y tomate.',
      price: 7000,
      stock: 30,
      rank: 4.9,
      state: 'disponible',
      ingredients: [
        {
          id: 0,
        },
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
      description: 'Hamburguesa de carne de res con huevo frito, queso cheddar, lechuga y tomate.',
      price: 6700,
      stock: 28,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 0,
        },
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
      description: 'Doble porción de queso cheddar con carne de res, lechuga y tomate.',
      price: 7500,
      stock: 25,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 0,
        },
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
      description: 'Una creación única del chef con carne de res, queso cheddar, tocino, huevo frito y más.',
      price: 8000,
      stock: 20,
      rank: 4.9,
      state: 'disponible',
      ingredients: [
        {
          id: 0,
        },
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
