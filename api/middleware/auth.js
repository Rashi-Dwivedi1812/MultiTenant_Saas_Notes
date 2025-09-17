// api/middleware/auth.js
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = bearer.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // Attach user info to the request object
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ error: 'Unauthorized, token invalid' });
  }
};

export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Forbidden: Admins only' });
    }
    next();
};