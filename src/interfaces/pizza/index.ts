import { CartItemInterface } from 'interfaces/cart-item';
import { GetQueryInterface } from 'interfaces';

export interface PizzaInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  size: string;
  ingredients?: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];

  _count?: {
    cart_item?: number;
  };
}

export interface PizzaGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  size?: string;
  ingredients?: string;
}
