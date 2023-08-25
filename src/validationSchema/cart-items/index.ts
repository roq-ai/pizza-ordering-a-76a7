import * as yup from 'yup';

export const cartItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
  cart_id: yup.string().nullable().required(),
  pizza_id: yup.string().nullable().required(),
});
