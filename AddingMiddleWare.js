const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token.');
    }

    req.user = decoded;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.send('Protected route accessed successfully');
});
