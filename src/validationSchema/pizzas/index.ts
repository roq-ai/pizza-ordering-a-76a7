import * as yup from 'yup';

export const pizzaValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  size: yup.string().required(),
  ingredients: yup.string().nullable(),
});
