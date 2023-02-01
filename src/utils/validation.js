import * as Yup from 'yup';

export const validationSchema = Yup.object({
  register: Yup.string().min(5).max(5).required().required(),
  password: Yup.string().required(),
  assy: Yup.string().min(3).max(3).required(),
});
