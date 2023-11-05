interface SeedIngredients {
  name: string;
  description: string;
  price: number;
  stock: number;
  state: string;
}

interface SeedDataIngredients {
  Ingredients: SeedIngredients[];
}

export const initialDataIngredients: SeedDataIngredients = {
  Ingredients: [
    {
      name: 'Carne de res',
      description: 'Carne de res de alta calidad.',
      price: 1300,
      stock: 100,
      state: 'available',
    },
    {
      name: 'Queso cheddar',
      description: 'Exquisito Queso cheddar derretido.',
      price: 650,
      stock: 150,
      state: 'available',
    },
    {
      name: 'Lechuga',
      description: 'Lechuga fresca.',
      price: 400,
      stock: 200,
      state: 'available',
    },
    {
      name: 'Tomate',
      description: 'Tomate fresco.',
      price: 400,
      stock: 150,
      state: 'available',
    },
    {
      name: 'Cebolla',
      description: 'Cebolla fresca.',
      price: 400,
      stock: 100,
      state: 'available',
    },
    {
      name: 'Hamburguesa de vegetales',
      description: 'Hamburguesa de vegetales frescos.',
      price: 1100,
      stock: 40,
      state: 'available',
    },
    {
      name: 'Pechuga de pollo',
      description: 'Pechuga de pollo a la parrilla.',
      price: 1200,
      stock: 60,
      state: 'available',
    },
    {
      name: 'Cebolla caramelizada',
      description: 'Cebolla caramelizada.',
      price: 700,
      stock: 30,
      state: 'available',
    },
    {
      name: 'Huevo frito',
      description: 'Huevos de campo',
      price: 650,
      stock: 40,
      state: 'available',
    },
    {
      name: 'Tocino ahumado',
      description: 'Exquisito tocino ahumado.',
      price: 800,
      stock: 40,
      state: 'available',
    },
    {
      name: 'Pechuga de pavo',
      description: 'Pechuga de pavo a la parrilla.',
      price: 1100,
      stock: 60,
      state: 'available',
    },
    {
      name: 'Champiñones',
      description: 'Exquisitos champiñones a la crema.',
      price: 700,
      stock: 60,
      state: 'available',
    },
    {
      name: 'bebida',
      description: 'Exquisitos bebida',
      price: 700,
      stock: 60,
      state: 'available',
    },
  ],
};
