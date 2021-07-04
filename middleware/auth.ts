import jwt from "jsonwebtoken";

export default function (req, res) {
  const token = req.headers["x-auth-token"];
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "access denied. No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    return;
  } catch (ex) {
    return res.status(400).json({ success: false, message: "Invalid token" });
  }
}
