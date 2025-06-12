const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const menu = [
  { _id: '1', name: 'Mie Ayam Original', price: 15000 },
  { _id: '2', name: 'Mie Ayam Bakso', price: 18000 },
  { _id: '3', name: 'Mie Ayam Ceker', price: 17000 },
  { _id: '4', name: 'Mie Ayam Komplit', price: 20000 },
  { _id: '5', name: 'Mie Ayam Pedas Level 3', price: 16000 }
];

const carts = [
  { latitude: -6.2001, longitude: 106.8167 },
  { latitude: -6.2048, longitude: 106.8456 },
  { latitude: -6.1900, longitude: 106.8060 }
];

app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.get('/api/carts/nearby', (req, res) => {
  const { lat, lng } = req.query;
  const userLat = parseFloat(lat);
  const userLng = parseFloat(lng);

  const nearby = carts.filter(cart => {
    const dLat = Math.abs(cart.latitude - userLat);
    const dLng = Math.abs(cart.longitude - userLng);
    return dLat < 0.02 && dLng < 0.02;
  });

  res.json(nearby);
});

app.get('/', (req, res) => {
  res.send('Mienian API is running!');
});

app.listen(port, () => {
  console.log(`Mienian backend running at http://localhost:${port}`);
});
