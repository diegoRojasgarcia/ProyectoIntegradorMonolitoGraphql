interface SeedProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  rank: number;
  state: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      name: 'Hamburguesa Clásica',
      description:
        'Una jugosa hamburguesa de carne de res con lechuga, tomate, cebolla y salsa especial.',
      price: 6.3,
      stock: 50,
      rank: 4.5,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa con Queso',
      description: 'Hamburguesa clásica con queso cheddar derretido.',
      price: 6.0,
      stock: 35,
      rank: 4.3,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa Doble',
      description: 'Doble carne, doble queso, doble sabor.',
      price: 8.6,
      stock: 25,
      rank: 4.7,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa Vegetariana',
      description:
        'Hamburguesa a base de vegetales frescos y queso vegetal, con lechuga, tomate y cebolla.',
      price: 7.3,
      stock: 20,
      rank: 4.2,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Pollo',
      description:
        'Pechuga de pollo a la parrilla con lechuga, tomate y salsa especial.',
      price: 6.2,
      stock: 30,
      rank: 4.4,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa BBQ',
      description:
        'Hamburguesa con carne de res, cebolla caramelizada y salsa barbacoa.',
      price: 7.3,
      stock: 15,
      rank: 4.6,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Pavo',
      description:
        'Hamburguesa con carne de pavo magra, lechuga, tomate y mayonesa.',
      price: 6.5,
      stock: 18,
      rank: 4.0,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa Picante',
      description:
        'Hamburguesa con carne sazonada, jalapeños en rodajas y salsa picante.',
      price: 6.5,
      stock: 12,
      rank: 4.8,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Champiñones',
      description:
        'Hamburguesa vegetariana con champiñones a la parrilla, queso suizo y cebolla salteada.',
      price: 7.5,
      stock: 22,
      rank: 4.1,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa Deluxe',
      description:
        'La hamburguesa definitiva con carne de res, tocino crujiente, huevo frito, lechuga, tomate y mayonesa especial.',
      price: 8.1,
      stock: 10,
      rank: 4.9,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Salmón',
      description:
        'Hamburguesa gourmet con filete de salmón fresco, lechuga, tomate y salsa de eneldo.',
      price: 6.8,
      stock: 8,
      rank: 4.7,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Res y Champiñones',
      description:
        'Hamburguesa con carne de ternera, champiñones a la parrilla y queso suizo.',
      price: 6.8,
      stock: 14,
      rank: 4.3,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Cordero',
      description:
        'Hamburguesa gourmet con carne de cordero, lechuga, tomate y salsa de menta.',
      price: 6.8,
      stock: 7,
      rank: 4.5,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa Cerdo',
      description:
        'Hamburguesa con cerdo desmenuzado, salsa de barbacoa y coleslaw.',
      price: 6.8,
      stock: 12,
      rank: 4.4,
      state: 'disponible',
    },
    {
      name: 'Hamburguesa de Pavo y Aguacate',
      description:
        'Hamburguesa con carne de pavo, aguacate fresco y mayonesa de cilantro y limón.',
      price: 6.4,
      stock: 10,
      rank: 4.2,
      state: 'disponible',
    },
  ],
};
