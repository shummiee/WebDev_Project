const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const open = require('open').default;
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static files like css/, js/, img/
app.use(express.static(path.join(__dirname)));

// Set EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Route to /main
app.get('/main', (req, res) => {
  res.render('main'); // render views/main.ejs
});

//Route to /product
app.get('/products', (req, res) => {
  res.render('products');
});

//Route to /product view

app.get('/viewProducts', (req, res) => {
  res.render('viewProducts');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  open(`http://localhost:${PORT}/main`); // open directly to /main
});
