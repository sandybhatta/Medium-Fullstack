// index.js
const express = require('express');
const app = express();

app.use(express.json()); // JSON body parsing

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));