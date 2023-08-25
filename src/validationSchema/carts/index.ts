import * as yup from 'yup';

export const cartValidationSchema = yup.object().shape({
  total_price: yup.number().integer().required(),
  cart_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
