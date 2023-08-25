import axios from 'axios';
import queryString from 'query-string';
import { PizzaInterface, PizzaGetQueryInterface } from 'interfaces/pizza';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPizzas = async (query?: PizzaGetQueryInterface): Promise<PaginatedInterface<PizzaInterface>> => {
  const response = await axios.get('/api/pizzas', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPizza = async (pizza: PizzaInterface) => {
  const response = await axios.post('/api/pizzas', pizza);
  return response.data;
};

export const updatePizzaById = async (id: string, pizza: PizzaInterface) => {
  const response = await axios.put(`/api/pizzas/${id}`, pizza);
  return response.data;
};

export const getPizzaById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pizzas/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePizzaById = async (id: string) => {
  const response = await axios.delete(`/api/pizzas/${id}`);
  return response.data;
};
