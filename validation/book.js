const Joi = require("joi");

module.exports= {
    create : Joi.object()
  .keys({
    name: Joi.string()
      .required().max(100).min(5),
    description: Joi.string()
      .required().min(50),
      author: Joi.string().required().max(100),
      price: Joi.number().required(),
  }),
}