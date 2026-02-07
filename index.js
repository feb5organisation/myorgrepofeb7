const express = require('express');
const app = express();

// Cloud Run passes the port via the PORT environment variable
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Cloud Run v2 is working too!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});
