import dbConnect from "../../../utils/db";
import { User } from "../../../models/User";
import errors from "../../../middleware/errors";
import bcrypt from "bcrypt";
import Joi from "joi";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { error } = validateLogin(req.body);
        if (error)
          return res
            .status(400)
            .json({ success: false, message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user)
          return res
            .status(400)
            .json({ success: false, message: "email or password invalid" });

        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPassword)
          return res
            .status(400)
            .json({ success: false, message: "email or password invalid" });

        const token = user.getJwtToken();
        res.status(200).json({ success: true, data: user, token });
      } catch (err) {
        const message = errors(err);
        res.status(400).json({
          success: false,
          message,
        });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

const validateLogin = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};
