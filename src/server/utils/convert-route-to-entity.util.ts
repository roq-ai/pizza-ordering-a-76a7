const mapping: Record<string, string> = {
  accounts: 'account',
  carts: 'cart',
  'cart-items': 'cart_item',
  orders: 'order',
  pizzas: 'pizza',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
