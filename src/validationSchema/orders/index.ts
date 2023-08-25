import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  total_price: yup.number().integer().required(),
  order_status: yup.string().required(),
  order_date: yup.date().required(),
  delivery_address: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
