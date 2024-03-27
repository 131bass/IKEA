import { Schema, model } from "mongoose";
import Joi from "joi";
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = Joi.extend(joiPasswordExtendCore);

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: String,
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
});


const UserModel = model("users", UserSchema)

export default UserModel;

export const UserValidation = Joi.object({
  firstName: Joi.string().min(2).max(16).required(),
  lastName: Joi.string().min(2).max(16).required(),
  email: Joi.string().email().required(),
  password: joiPassword
    .string()
    .min(8)
    .max(20)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required()
});