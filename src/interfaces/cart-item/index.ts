import { CartInterface } from 'interfaces/cart';
import { PizzaInterface } from 'interfaces/pizza';
import { GetQueryInterface } from 'interfaces';

export interface CartItemInterface {
  id?: string;
  cart_id: string;
  pizza_id: string;
  quantity: number;
  price: number;
  created_at?: any;
  updated_at?: any;

  cart?: CartInterface;
  pizza?: PizzaInterface;
  _count?: {};
}

export interface CartItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  cart_id?: string;
  pizza_id?: string;
}
