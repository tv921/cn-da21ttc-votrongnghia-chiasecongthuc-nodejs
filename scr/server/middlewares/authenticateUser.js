const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Lấy token từ header Authorization
  if (!token) {
    return res.status(401).json({ message: 'Token không tồn tại' });
  }

  jwt.verify(token, 'secretkey', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token không hợp lệ' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;


