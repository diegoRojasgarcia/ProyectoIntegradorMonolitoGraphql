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
  ],
};
