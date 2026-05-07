export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags?: string[];
}

export interface RestaurantConfig {
  name: string;
  slogan: string;
  contact: {
    phone: string;
    address: string;
    instagram: string;
  };
}