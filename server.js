const express = require('express');

const app = express();

app.get('/api/products', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      products: [
        { id: 1, title: 'title', body: 'body' },
        { id: 2, title: 'title 2', body: 'body 2' },
      ],
    },
  });
});

app.listen(5000, () => {
  console.log('server is running');
});
