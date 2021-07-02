import dbConnect from "../../../utils/db";
import { User, validate } from "../../../models/User";
import errors from "../../../middleware/errors";
import auth from "../../../middleware/auth";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        auth(req, res);
        const user = await User.findById(req.user._id).select("-password");
        res.status(200).json({ success: true, data: user });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { error } = validate(req.body);
        if (error)
          return res
            .status(400)
            .json({ success: false, message: error.details[0].message });

        let user = await User.findOne({
          email: req.body.email,
        });
        if (user)
          return res
            .status(400)
            .json({ success: false, message: "email already taken" });

        user = new User(req.body);
        await user.save();

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

    case "PUT":
      try {
        auth(req, res);
        let user = await User.findById(req.user._id);

        req.body.date_of_birth = user.date_of_birth;
        req.body.password = user.password;
        req.body.email = user.email;

        const { error } = validate(req.body);
        if (error)
          return res
            .status(400)
            .json({ success: false, message: error.details[0].message });

        user = await User.findByIdAndUpdate(req.user._id, req.body, {
          new: true,
        });

        const token = user.getJwtToken();

        res.status(200).json({ success: true, data: user, token });

        if (!user) return;
      } catch (err) {
        const message = errors(err);
        res.status(400).json({
          success: false,
          message,
        });
      }
      break;

    case "DELETE":
      try {
        auth(req, res);
        let user = await User.findById(req.user._id);

        user = await User.findByIdAndRemove(req.user._id);

        res.status(200).json({ success: true, data: user, token: "" });
      } catch (err) {
        const message = errors(err);
        res.status(400).json({
          success: false,
          message,
        });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};
