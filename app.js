require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { shopRoutes } = require('./routes/shopRoutes');
const { cartRoutes } = require('./routes/cartRoutes');
const { blogRoutes } = require('./routes/blogRoutes')
const app = express();
// const { logger } = require('./middleware/logger');
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const shopRouter = express.Router();
app.use('/', shopRouter);

const cartRouter = express.Router();
app.use('/', cartRouter);

const blogRouter = express.Router();
app.use('/', blogRouter)

// /shop
shopRouter.use('/shop', shopRoutes);
// /cart
cartRouter.use('/cart', cartRoutes);
// /blog
blogRouter.use('/blog', blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});


app.listen(PORT, () => console.log(`Server ready on port: ${PORT}`));
