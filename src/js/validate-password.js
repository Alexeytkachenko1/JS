import Joi from 'joi';
// console.log(Joi);

const passSchema = Joi.string().min(3).max(10);
export default function validatePasword(password) {
  return passSchema.validate(password);
}
