import jwt from "jsonwebtoken"
const authenticateUser = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(404).json({ message: "no token found" });


     jwt.verify(
      token,
      process.env.ACCESS_JWT_SECRET,
      (err, user) => {
        if (err) return res.status(403).json({ message: "invalid token" });
        console.log("authenticate user ===> ", user);
        req.userId = user.id;
        next();
        
      
        
      }
    );
  };

export default authenticateUser