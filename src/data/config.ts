// Agregamos "type" para que TypeScript esté contento con la sintaxis estricta
import { type RestaurantConfig, type MenuItem } from '../types';

export const restaurantInfo: RestaurantConfig = {
  name: "Modesto Restaurante",
  slogan: "Sencillez que cautiva el paladar",
  contact: {
    phone: "+54 11 1234-5678",
    address: "Calle de los Sabores 456, Buenos Aires",
    instagram: "@modesto.restaurante"
  }
};

export const menuData: MenuItem[] = [
  {
    id: '1',
    name: "Entrada de la Casa",
    description: "Mix de vegetales asados con reducción de balsámico",
    price: 2500,
    category: "Entradas",
    tags: ["Vegano"]
  }
];