# Mienian Backend API

Simple Express API for Mienian Go app.

## Endpoints

### GET `/api/menu`
Returns list of menu items:
```json
[
  { "_id": "1", "name": "Mie Ayam Original", "price": 15000 },
  ...
]
```

### GET `/api/carts/nearby?lat=...&lng=...`
Returns carts within 2km radius of given coordinates.

---

## Deployment

This project is intended to be deployed on [Render](https://render.com):

1. Push to GitHub
2. Create new Web Service
3. Environment: Node
4. Build Command: `npm install`
5. Start Command: `npm start`
