const Joi = require("joi");

module.exports= {
    create : Joi.object()
  .keys({
    name: Joi.string()
      .required().max(100).min(3),
    description: Joi.string()
      .required().min(50),
      author: Joi.string().required().max(100),
      price: Joi.number().required(),
  }),
  update : Joi.object()
  .keys({
    name: Joi.string()
      .required().max(100).min(3),
    description: Joi.string()
      .required().min(50),
      author: Joi.string().required().max(100),
      price: Joi.number().required(),
      _id: Joi.string().required()
  }),
}