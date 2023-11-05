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
  image: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialDataProduct: SeedData = {
  products: [
    {
      name: 'Hamburguesa Clásica',
      description:
        'Una jugosa hamburguesa de carne de res con lechuga, tomate y cebolla ',
      price: 6300,
      stock: 50,
      rank: 4.5,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
      image: '/images/clasica.jpg',
    },
    {
      name: 'Hamburguesa de Pollo y Queso',
      description:
        'Hamburguesa de pechuga de pollo con queso cheddar, lechuga y tomate.',
      price: 5900,
      stock: 45,
      rank: 4.3,
      state: 'disponible',
      ingredients: [
        {
          id: 11,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
      image: '/images/pavoqueso.jpg',
    },
    {
      name: 'Hamburguesa con Champiñones',
      description:
        'Hamburguesa con champiñones salteados, queso cheddar, lechuga y cebolla caramelizada.',
      price: 6600,
      stock: 38,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 4,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 13,
        },
      ],
      image: '/images/champiñon.jpg',
    },
    {
      name: 'Hamburguesa cebolla',
      description:
        'Hamburguesa de carne de res con tocino ahumado, queso cheddar y cebolla.',
      price: 6800,
      stock: 42,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 10,
        },
        {
          id: 1,
        },
        {
          id: 8,
        },
      ],
      image: '/images/bbq.png',
    },
    {
      name: 'Hamburguesa Deluxe',
      description:
        'Hamburguesa de carne de res con huevo frito, queso cheddar, lechuga y tomate.',
      price: 7200,
      stock: 36,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 12,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
      image: '/images/deluxe.jpg',
    },
    {
      name: 'Hamburguesa de Pollo cebolla',
      description:
        'Hamburguesa de pechuga de pollo con tocino ahumado, queso cheddar y cebolla caramelizada.',
      price: 6400,
      stock: 47,
      rank: 4.4,
      state: 'disponible',
      ingredients: [
        {
          id: 11,
        },
        {
          id: 10,
        },
        {
          id: 1,
        },
        {
          id: 13,
        },
      ],
      image: '/images/pollobbq.jpg',
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
          id: 9,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
      image: '/images/vegana.png',
    },
    {
      name: 'Hamburguesa de Tocino',
      description:
        'Hamburguesa de carne de res con doble tocino ahumado, queso cheddar, lechuga y tomate.',
      price: 7000,
      stock: 30,
      rank: 4.9,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 10,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
      image: '/images/tocino.jpg',
    },
    {
      name: 'Hamburguesa de Pollo Picante',
      description:
        'Hamburguesa de pechuga de pollo con queso cheddar picante, lechuga y tomate.',
      price: 6100,
      stock: 32,
      rank: 4.2,
      state: 'disponible',
      ingredients: [
        {
          id: 11,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
      image: '/images/pollopicante.jpg',
    },
    {
      name: 'Hamburguesa con Huevo',
      description:
        'Hamburguesa de carne de res con huevo frito, queso cheddar, lechuga y tomate.',
      price: 6700,
      stock: 28,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 12,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
      image: '/images/huevo.jpeg',
    },
    {
      name: 'Hamburguesa de Pollo con Champiñones',
      description:
        'Hamburguesa de pechuga de pollo con champiñones salteados, queso cheddar y lechuga.',
      price: 6900,
      stock: 35,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 1,
        },
        {
          id: 5,
        },
      ],
      image: '/images/pollochampiñon.jpg',
    },
    {
      name: 'Hamburguesa Doble Queso',
      description:
        'Doble porción de queso cheddar con carne de res, lechuga y tomate.',
      price: 7500,
      stock: 25,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
      image: '/images/doblequeso.jpg',
    },
    {
      name: 'Hamburguesa Especial del Chef',
      description:
        'Una creación única del chef con carne de res, queso cheddar, tocino, huevo frito y más.',
      price: 8000,
      stock: 20,
      rank: 4.9,
      state: 'disponible',
      ingredients: [
        {
          id: 6,
        },
        {
          id: 1,
        },
        {
          id: 10,
        },
        {
          id: 12,
        },
        {
          id: 13,
        },
      ],
      image: '/images/especial.jpg',
    },
    {
      name: 'Coca-Cola Clásica',
      description: 'Refresco carbonatado sabor cola.',
      price: 1500,
      stock: 100,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/cocacola.jpg',
    },
    {
      name: 'Fanta Naranja',
      description: 'Refresco carbonatado sabor naranja.',
      price: 1400,
      stock: 80,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/fanta.jpg',
    },
    {
      name: 'Sprite',
      description: 'Refresco carbonatado sabor lima-limón.',
      price: 1400,
      stock: 85,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/sprite.jpg',
    },
    {
      name: 'Pepsi',
      description: 'Refresco carbonatado sabor cola.',
      price: 1500,
      stock: 90,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/pepsi.jpg',
    },
    {
      name: '7UP',
      description: 'Refresco carbonatado sabor lima-limón.',
      price: 1400,
      stock: 70,
      rank: 4.5,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/7up.jpg',
    },
    {
      name: 'Dr. Pepper',
      description: 'Refresco carbonatado con sabor único y distintivo.',
      price: 1550,
      stock: 60,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/drpepper.jpg',
    },
    {
      name: 'Mountain Dew',
      description: 'Refresco carbonatado con sabor cítrico.',
      price: 1450,
      stock: 80,
      rank: 4.6,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/mountaindew.jpg',
    },
    {
      name: 'Agua Mineral',
      description: 'Agua mineral natural sin gas.',
      price: 800,
      stock: 150,
      rank: 4.8,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/aguamineral.jpg',
    },
    {
      name: 'Red Bull',
      description: 'Bebida energética que te da alas.',
      price: 2500,
      stock: 50,
      rank: 4.7,
      state: 'disponible',
      ingredients: [
        {
          id: 3,
        },
      ],
      image: '/images/redbull.jpg',
    },
  ],
};
