import mongoose from "mongoose";
import Joi from "joi";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  (<any>this).password = await bcrypt.hash((<any>this).password, salt);
  console.log((<any>this).password);
  return;
});

userSchema.methods.getJwtToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      full_name: (<any>this).full_name,
      email: (<any>this).email,
      date_of_birth: (<any>this).date_of_birth,
      profession: (<any>this).profession,
    },
    process.env.JWT_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );

  return token;
};

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const validate = (user) => {
  const schema = Joi.object({
    full_name: Joi.string().required().trim().min(5),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
    date_of_birth: Joi.date().required(),
    profession: Joi.string().required().trim().min(3),
  });

  return schema.validate(user);
};
